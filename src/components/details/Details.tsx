import "../dashboard/styles.css"

import { Sidebar } from "../../pages/Sidebar";

import ImprimirPedido from "../../assets/imprimir-pedido.png";
import ImprimirFactura from "../../assets/imprimir-factura.png";
import ActualizarPedido from "../../assets/actualizar-pedido.png";
import { useLocation } from "react-router-dom";

import { useReactToPrint } from 'react-to-print'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Details() {
  const location = useLocation()
  const dataString = JSON.stringify(location.state.item)
  const dataOrders = JSON.parse(dataString)

  const productos: any[] = [];
  dataOrders.productos.forEach((element: any) => productos.push(element))

  console.log(dataOrders)
  console.log(productos)

  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint_Pedido = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Pedido',
    onAfterPrint: () => alert('Print sucess')
  })

  const navigate = useNavigate();

  const toFactura = (item: any) => {
    navigate(`/rapidogs`, {
      state: {
        item,
      },
    });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex flex-1 flex-col p-7">
        <div>
          <h1 className="text-2xl font-semibold ">Details</h1>
        </div>
        <div className="flex flex-col mt-6">
          
          <div ref={componentRef} className="rounded-sm border-2 border-slate-400 bg-zinc-50 p-5">
            <ol className="list-decimal ml-5">
              {productos.map((producto: any, idx: any) => {
                return (
                  <div key={idx}>
                    <p>{producto.nombrE_PRODUCTO}</p>
                    <li>{producto.descripcion}</li>
                    {producto.categorias.map((categoria: any, idxCategoria: any) => {
                      return (
                        <div key={idxCategoria}>
                          <p>- {categoria.categoria}</p>
                          {categoria.recetas.map((receta: any, idxReceta: any) => {
                            return (
                              <div key={idxReceta}>
                                <p className="ml-3">* {receta.iteM_RECETA}</p>
                              </div>
                            )
                          })}
                        </div>
                      )
                    })}
                    <br />
                  </div>
                )
              })}
            </ol>
          </div>
  
          <div className="flex flex-row mt-5">
            <div className="mx-3 flex flex-1 flex-col w-1/3 text-center bg-slate-200 rounded-3xl border-2 border-slate-400">
              <button onClick={handlePrint_Pedido}>
                <p className="estado-pedido">Imprimir pedido</p>
                <img
                  src={ImprimirPedido}
                  alt="Imprimir pedido"
                  style={{ display: "inline" }}
                  className="cover"
                />
              </button>
            </div>
            <div className="mx-3 flex flex-1 flex-col w-1/3 text-center bg-slate-200 rounded-3xl border-2 border-slate-400">
              <button onClick={() => toFactura(dataOrders)}>
                <p className="estado-pedido">Imprimir factura</p>
                <img
                  src={ImprimirFactura}
                  alt="Imprimir factura"
                  style={{ display: "inline" }}
                  className="cover"
                />
              </button>
            </div>
            <div className="mx-3 flex flex-1 flex-col w-1/3 text-center bg-slate-200 rounded-3xl border-2 border-slate-400">
              <button>
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
