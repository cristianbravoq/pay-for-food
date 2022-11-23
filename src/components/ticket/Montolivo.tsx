import "./style.css";

import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

export function Montolivo() {
  let now = new Date().toUTCString();
  let fecha = now.split("22 ");
  console.log(fecha);

  const location = useLocation();
  const dataString = location.state.item;
  console.log(dataString);

  const productos: any[] = [];
  dataString.productos.forEach((element: any) => productos.push(element));
  console.log(productos);

  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint_Factura = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Pedido",
    onAfterPrint: () => alert("Print sucess"),
  });

  return (
    <>
      <div className="flex justify-center mt-6 bg-slate-500">
        <div
          ref={componentRef}
          className="flex flex-col w-min justify-center align-middle bg-zinc-100"
        >
          <div className="flex w-full justify-around">
            <div className="flex items-center flex-col justify-center title1">
              <p>UNICENTRO MEDELLIN</p>
              <p>CC UNICENTRO LOC 212</p>
              <p>CR 66B # 34A76 LC 337</p>
              <br />
              <p>INVERSIONES MONTOLIVO SAS</p>
              <p>NIT: 901547119-4</p>
              <p>Regimen Comun</p>
            </div>
          </div>
          <div className="flex flex-col w-full justify-start title2 my-2">
            <div className="flex flex-row">
              <p className="w-1/2 ml-4">TPV:</p>
              <p className="w-1/2">TPVA10901</p>
            </div>
            <div className="flex flex-row">
              <p className="w-1/2 ml-4">Cajero:</p>
              <p> Pay4Food</p>
              <p className="w-1/2">HORA: </p>
            </div>
            <div className="flex flex-row">
              <p className="w-1/2 ml-4">Fecha:</p>
              <p className="w-1/2">{fecha[0]} {fecha[1]}</p>
            </div>
            <div className="flex flex-row">
              <p className="w-1/2 ml-4">Turno: 21</p>
              <p className="w-1/2">FACTURA DE VENTA</p>
            </div>
            <div className="flex flex-row">
              <p className="w-1/2 ml-4">TIQUET: F7 - 26353</p>
              <p className="w-1/2">FECHA: </p>
            </div>
          </div>
          <div className="">
            <table className="bg-zinc-50 title3">
              <thead className="">
                <tr>
                  <th className="px-3">UDS</th>
                  <th className="pr-5">DESCRIPCION</th>
                  <th className="pr-5">PVP</th>
                  <th className="px-3">VALOR</th>
                </tr>
              </thead>
              {productos.map((producto: any, idx: any) => {
                return (
                  <tbody key={idx}>
                    <tr>
                      <td className="px-3">{producto.cantidad}</td>
                      <td className="pr-5">{producto.nombrE_PRODUCTO}</td>
                      <td className="pr-5">{dataString.valor}</td>
                      <td className="px-3">{dataString.valor}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="title2 my-2">
            <div className="flex flex-row gap-4 justify-end mr-3">
              <p>BASE IMPONIBLE</p>
              <p>16471</p>
            </div>
            <div className="flex flex-row gap-4 justify-end mr-3">
              <p>IVA 19%</p>
              <p>3129</p>
            </div>
          </div>
          <div className="title1">
            <div className="flex flex-row gap-4 justify-end mr-3 my-1">
              <p>TOTAL</p>
              <p>18900</p>
            </div>
          </div>
          <div className="title2">
            <div className="flex flex-row gap-4 justify-end mr-3 my-1">
              <p>RECIBIDO</p>
              <p>CAMBIO</p>
            </div>
            <div className="flex flex-row gap-4 justify-end mr-3 my-2">
              <p className="mr-6">Pay4Food</p>
              <p>20000</p>
              <p>1900</p>
            </div>
          </div>
          <div className="title2 mx-1">
            <div className="flex flex-col gap-4 justify-end mr-3 my-2">
              <p>AUTORIZAICION FACTURA Nro: 18764029419211</p>
            </div>
            <div className="flex flex-row gap-4 justify-end mr-3 my-2">
              <p>DE : 5/27/2022 </p>
              <div>
                <p>AL: F7 - 100000</p>
                <p>DEL : F7 - 10001</p>
              </div>
            </div>
          </div>
          <div className="title2 mx-1">
            <div className="flex flex-col justify-end  items-center mr-3 my-1">
              <p>NO SOMOS GRANDES CONTRIBUYENTES</p>
              <p>NO SOMOS AUTORRETENEDORES</p>
            </div>
          </div>
          <div className="title2 mx-1">
            <div className="flex flex-row gap-4 justify-center mr-3 my-4">
              <p>*** GRACIAS POR LA VISITA ***</p>
            </div>
          </div>
          <div className="title2 mx-1">
            <div className="flex flex-col justify-center items-center">
              <p>*Software ICG-Front Rest</p>
              <p>Soluciones Fourgen, Tel (023465345)</p>
            </div>
          </div>
        </div>
        <div className="w-full justify-center absolute bottom-0">
          <button
            onClick={handlePrint_Factura}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full justify-center"
          >
            Imprimir
          </button>
        </div>
      </div>
    </>
  );
}
