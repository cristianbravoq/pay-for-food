import { useNavigate } from "react-router-dom";

export function OrdersList(props: any) {
  const navigate = useNavigate();

  const toDetails = (item: any) => {
    navigate(`/details`, {
      state: {
        item,
      },
    });
  };

  const usuario = props.data.map((res: any) => res);

  return (
    <table className="table-fixed w-full my-5">
      <thead className="">
        <tr>
          <th className="">Id</th>
          <th className="">Cliente</th>
          <th className="">Estado</th>
          <th className="">Valor</th>
        </tr>
      </thead>
      {usuario.map((element: any, idx: any) => {
        return (
          <tbody key={idx}>
            <tr className="text-center text-sm">
              <td className="border border-slate-400 bg-zinc-50">
                {element.iD_PEDIDO}
              </td>
              {/* <td className="border border-slate-400 bg-zinc-50">
                {element.numerO_PEDIDO}
              </td> */}
              <td className="border border-slate-400 bg-zinc-50">
                {element.nombrE_CLIENTE}
              </td>
              <td className="border border-slate-400 bg-zinc-50">
                {element.iD_ESTADO_PEDIDO <= 2 ? (
                  <>
                    {element.iD_ESTADO_PEDIDO === 1 ? (
                      <>Pendiente</>
                    ) : (
                      <>Preparacion</>
                    )}
                  </>
                ) : (
                  <>Entregado</>
                )}
              </td>
              <td className="border border-slate-400 bg-zinc-50">
                {element.valor}
              </td>
              <td className="">
                <button
                  onClick={() => toDetails(element)}
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >
                  Detalles
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
