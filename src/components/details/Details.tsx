import "../dashboard/styles.css";
import Swal from 'sweetalert2'

import { Sidebar } from "../../pages/Sidebar";
import { updateOrder } from "../../services/UpdateOrder";
import { sendMsn } from "../../services/SendMsn";

import ImprimirPedido from "../../assets/imprimir-pedido.png";
import ImprimirFactura from "../../assets/imprimir-factura.png";
import ActualizarPedido from "../../assets/actualizar-pedido.png";

import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/states/hooks";

function Details() {
  const authUser = useAppSelector((state) => state.auth.Users);
  const location = useLocation();
  const dataString = JSON.stringify(location.state.item);
  const dataOrders = JSON.parse(dataString);

  const productos: any[] = [];
  dataOrders.productos.forEach((element: any) => productos.push(element));

  console.log(dataOrders);
  //console.log(productos);

  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint_Pedido = useReactToPrint({
    content: () => componentRef.current,
    pageStyle:'width: 90px, font-size: 15%',
    documentTitle: "Pedido",
    onAfterPrint: () => alert("Print sucess"),
  });

  const navigate = useNavigate();
  const toFactura = (item: any) => {
    const { iD_RESTAURANTE } = authUser;
    console.log(iD_RESTAURANTE);
    if (iD_RESTAURANTE === 0) alert("Inicia sesion con tu cuenta de usuario");
    if (iD_RESTAURANTE === 1) {
      navigate(`/rapidogs`, {
        state: {
          item,
        },
      });
    }
  };
  
  const [ valueState, setValueState ] = useState('')
  const [ msnState, setMsnState ] = useState('')
  useEffect(() => {
    if((dataOrders.iD_ESTADO_PEDIDO + 1) === 2) {
      setValueState('Preparacion') 
      setMsnState('El pedido está en Preparación')
    }
    if((dataOrders.iD_ESTADO_PEDIDO + 1) === 3) {
      setValueState('Entregado')
      setMsnState('El pedido ha sido entregado')
    }
    if((dataOrders.iD_ESTADO_PEDIDO + 1) === 4) {
      setValueState('Pedido Finalizado')
      setMsnState('El pedido se encuentra finalizado, ¡Gracias por tu compra!')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueState, msnState])
  
  function cambiarEstado() {
    if (dataOrders.iD_ESTADO_PEDIDO !== 3)
      updateOrder(
        dataOrders.iD_ESTADO_PEDIDO + 1,
        dataOrders.numerO_PEDIDO,
        authUser.iD_RESTAURANTE.toString()
      );
    alertState()
    msnCambioEstado()
    navigate(`/Dashboard`);
  }

  const [tel, setTel] = useState('3186480729')
  if(dataOrders.payerID !== 0) {
    setTel(dataOrders.payer.cel)
  }
  function msnCambioEstado() {
    console.log(dataOrders.payerID)
    sendMsn(tel, msnState)
    /* if(dataOrders.payerID !== 0) {
      sendMsn(dataOrders.payerID.cel, '')
    } */
  }

  function alertState() {
    Swal.fire(
      'Cambio de estado!',
      `Orden pasa a estado ${valueState}!`,
      'success'
    )
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex flex-1 flex-col p-2 sm:p-7 sm:ml-20 ml-10">
        <div>
          <h1 className="text-2xl font-semibold ">Details</h1>
        </div>
        <div className="flex flex-col mt-6 h-full justify-between">
          <div
            ref={componentRef}
            className="rounded-sm border-2 border-slate-400 bg-zinc-50 p-5"
          >
            <ol className="list-decimal ml-5">
              {productos.map((producto: any, idx: any) => {
                return (
                  <div key={idx}>
                    <p>{producto.nombrE_PRODUCTO}</p>
                    <li>{producto.descripcion}</li>
                    {producto.categorias.map(
                      (categoria: any, idxCategoria: any) => {
                        return (
                          <div key={idxCategoria}>
                            <p>- {categoria.categoria}</p>
                            {categoria.recetas.map(
                              (receta: any, idxReceta: any) => {
                                return (
                                  <div key={idxReceta}>
                                    <p className="ml-3">
                                      * {receta.iteM_RECETA}
                                    </p>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        );
                      }
                    )}
                    <br />
                  </div>
                );
              })}
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between mt-5">
            <div className="flex flex-col mb-4 sm:mb-0 w-5/6 sm:w-1/5">
              <button
                onClick={handlePrint_Pedido}
                className="rounded-md hover:rounded-sm border-2 border-slate-400 hover:text-slate-700 hover:bg-slate-50 hover:scale-105"
              >
                <p className="estado-pedido">Imprimir pedido</p>
                <img
                  src={ImprimirPedido}
                  alt="Imprimir pedido"
                  style={{ display: "inline" }}
                  className="cover"
                />
              </button>
            </div>
            <div className="flex flex-col mb-4 sm:mb-0 w-5/6 sm:w-1/5">
              <button
                onClick={() => toFactura(dataOrders)}
                className="rounded-md hover:rounded-sm border-2 border-slate-400 hover:text-slate-700 hover:bg-slate-50 hover:scale-105"
              >
                <p className="estado-pedido">Imprimir factura</p>
                <img
                  src={ImprimirFactura}
                  alt="Imprimir factura"
                  style={{ display: "inline" }}
                  className="cover"
                />
              </button>
            </div>
            <div className="flex flex-col mb-4 sm:mb-0 w-5/6 sm:w-1/5">
              <button
                onClick={cambiarEstado}
                className="rounded-md hover:rounded-sm border-2 border-slate-400 hover:text-slate-700 hover:bg-slate-50 hover:scale-105"
              >
                <p className="estado-pedido">Actualizar pedido</p>
                <img
                  src={ActualizarPedido}
                  alt="Actualizar pedido"
                  style={{ display: "inline" }}
                  className="cover"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
