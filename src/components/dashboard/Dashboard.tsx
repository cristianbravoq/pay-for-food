import "./styles.css";

//Components
import { Sidebar } from "../../pages/Sidebar";
import { OrdersList } from "./pages/OrdesList";

//Hooks
import { useAppDispatch } from "../../app/states/hooks";
import { useState } from "react";
import { orderByRestaurantSlice } from "../../features/orders/ordersSlice";

//Services
import { GetOrderByState } from "../../services/GetOrderByState";

//Images
import Pendiente from "../../assets/pendientes.png";
import Preparacion from "../../assets/preparacion.png";
import Entregado from "../../assets/entregado.png";

function Dashboard() {

  const [data, setData] = useState<any[]>([]);
  //Funcion que actualiza la informacion para que pueda ser obtenida desde cualquier componente
  const dispatch = useAppDispatch();

  function dataProps(props: any) {
    const dataString = JSON.stringify(props.data);
    const dataArray = JSON.parse(dataString);
    console.log(dataArray, "dataArray");
    setData(dataArray);
    dispatch(orderByRestaurantSlice(dataArray));
  }

  function dataNull() {
    console.log("No hay pedidos disponibles");
    setData([]);
  }

  async function orderPendiente() {
    const ordenesPendiente: any = await GetOrderByState(1);
    console.log(ordenesPendiente);
    ordenesPendiente.message === "Consulta Exitosa"
      ? dataProps(ordenesPendiente)
      : dataNull();
  }
  async function orderPreparacion() {
    const ordenesPreparacion: any = await GetOrderByState(2);
    console.log(ordenesPreparacion);
    ordenesPreparacion.message === "Consulta Exitosa"
      ? dataProps(ordenesPreparacion)
      : dataNull();
  }
  async function orderEntregado() {
    const ordenesEntregado: any = await GetOrderByState(3);
    console.log(ordenesEntregado);
    ordenesEntregado.message === "Consulta Exitosa"
      ? dataProps(ordenesEntregado)
      : dataNull();
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex flex-1 flex-col p-7">
        <div>
          <h1 className="text-2xl font-semibold ">Dashboard</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row m-5">
            <div className="mx-5 flex flex-1 flex-col w-1/3 text-center bg-slate-200 rounded-3xl border-2 border-slate-400">
              <button onClick={() => orderPendiente()}>
                <p className="estado-pedido">Pendientes</p>
                <img
                  src={Pendiente}
                  alt="Pedidos pendientes"
                  className="cover"
                  style={{ display: "inline" }}
                />
              </button>
            </div>
            <div className="mx-5 flex flex-1 flex-col w-1/3 text-center bg-slate-200 rounded-3xl border-2 border-slate-400">
              <button onClick={() => orderPreparacion()}>
                <p className="estado-pedido">Preparacion</p>
                <img
                  src={Preparacion}
                  alt="Pedidos en preparacion"
                  className="cover"
                  style={{ display: "inline" }}
                />
              </button>
            </div>
            <div className="mx-5 flex flex-1 flex-col w-1/3 text-center bg-slate-200 rounded-3xl border-2 border-slate-400">
              <button onClick={() => orderEntregado()}>
                <p className="estado-pedido">Entregado</p>
                <img
                  src={Entregado}
                  alt="Pedidos entregados"
                  className="cover"
                  style={{ display: "inline" }}
                />
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-row my-5 justify-between items-center">
              <h2>Nombre del restaurante</h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Agregar
              </button>
            </div>
            <div className="overflow-y-scroll" style={{ maxHeight: "50vh" }}>
              <OrdersList data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
