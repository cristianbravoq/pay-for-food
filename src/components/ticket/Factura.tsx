import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Logo from "../../assets/logo.png";

export function Factura() {
  let now = new Date();

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
      <div ref={componentRef} className="flex flex-col m-10">
        <div className="flex w-full justify-around mx-5">
          <img src={Logo} alt="Logotipo" />
          <div className="flex items-center flex-col justify-center">
            <h2>Nombre del restaurante</h2>
            <p>{now.toUTCString()}</p>
          </div>
        </div>
        <hr />
        <br />
        <div className="flex w-full justify-around mx-5">
          <div>
            <p>Numero de pedido:</p>
            <p>{dataString.numerO_PEDIDO}</p>
          </div>
          <div className="flex flex-row">
            <div className="mx-3">
              <p>Nombre Cliente:</p>
              <p>Id Pedido:</p>
            </div>
            <div className="mx-3">
              <p>{dataString.nombrE_CLIENTE}</p>
              <p>{dataString.iD_PEDIDO}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="rounded-sm border-2 border-slate-400 bg-zinc-50 p-5">
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
                            <div className="flex justify-between bg-slate-300">
                              <p className="p-1">Items</p>
                              <p className="p-1">Valor </p>
                            </div>
                            {categoria.recetas.map(
                              (receta: any, idxReceta: any) => {
                                return (
                                  <div
                                    key={idxReceta}
                                    className="flex justify-between"
                                  >
                                    <p className="">{receta.iteM_RECETA}</p>
                                    <p className="">
                                      {receta.valor} <hr />
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
        </div>
      </div>
      <div className="w-full justify-center">
        <button
          onClick={handlePrint_Factura}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full justify-center"
        >
          Imprimir
        </button>
      </div>
    </>
  );
}