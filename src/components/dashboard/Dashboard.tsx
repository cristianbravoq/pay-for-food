import "./styles.css";

//Components
import { Sidebar } from "../../pages/Sidebar";
import { OrdersList } from "./pages/OrdesList";

//Hooks
import { useAppDispatch, useAppSelector } from "../../app/states/hooks";
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
  const [cantidad, setCantidad] = useState(0)
  const [pendiente, setPendiente] = useState(false)
  const [preparacion, setPreparacion] = useState(false)
  const [entregado, setEntregado] = useState(false)

  //Funcion que actualiza la informacion para que pueda ser obtenida desde cualquier componente
  const dispatch = useAppDispatch();
  const authUser = useAppSelector((state) => state.auth.Users);
  //console.log(authUser);

  function dataProps(props: any) {
    const dataString = JSON.stringify(props.data);
    const dataArray = JSON.parse(dataString);
    //console.log(dataArray, "dataArray");
    setData(dataArray.reverse());
    setCantidad(dataArray.length)
    console.log(dataArray, "data Reversado");
    dispatch(orderByRestaurantSlice(dataArray));
  }

  function dataNull() {
    console.log("No hay pedidos disponibles");
    setData([]);
  }

  async function orderPendiente() {
    setPendiente(true)
    setPreparacion(false)
    setEntregado(false)
    const ordenesPendiente: any = await GetOrderByState(1);
    console.log(ordenesPendiente);
    ordenesPendiente.message === "Consulta Exitosa"
      ? dataProps(ordenesPendiente)
      : dataNull();
  }
  async function orderPreparacion() {
    setPendiente(false)
    setPreparacion(true)
    setEntregado(false)
    const ordenesPreparacion: any = await GetOrderByState(2);
    console.log(ordenesPreparacion);
    ordenesPreparacion.message === "Consulta Exitosa"
      ? dataProps(ordenesPreparacion)
      : dataNull();
  }
  async function orderEntregado() {
    setPendiente(false)
    setPreparacion(false)
    setEntregado(true)
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
          <h1 className="text-2xl font-semibold ">{authUser.nombre ? authUser.nombre : "Inicia sesion para consultar"}</h1>
        </div>
        <div className="flex flex-row h-full">
          <div className=" w-5/6">
            <div className="flex flex-row my-5 justify-between items-center">
              <h2>Dashboard</h2>
            </div>
            <div className="overflow-y-scroll" style={{ maxHeight: "75vh" }}>
              <OrdersList data={data} />
            </div>
          </div>
          <div className="flex flex-col m-5 h-full items-center justify-center gap-y-4 w-1/6">
            <div className="rounded-3xl border-2 border-slate-400 p-5">   
                <p className="text-center mx-4">Cantidad</p>
                <h3 className="text-center">{cantidad}</h3>
            </div>
            <div className="flex flex-col">
              <button
                onClick={() => orderPendiente()}
                className={`cover ${pendiente === true ? "bg-slate-400 text-white" : "bg-slate-200"} rounded-3xl border-2 border-slate-400 hover:text-slate-700 hover:bg-slate-50 hover:scale-95`}
              >
                <p className="estado-pedido">Pendientes</p>
                <img
                  src={Pendiente}
                  alt="Pedidos pendientes"
                  className="cover"
                  style={{ display: "inline" }}
                />
              </button>
            </div>
            <div className="flex flex-col">
              <button
                onClick={() => orderPreparacion()}
                className={`cover ${preparacion === true ? "bg-slate-400 text-white" : "bg-slate-200"} rounded-3xl border-2 border-slate-400 hover:text-slate-700 hover:bg-slate-50 hover:scale-95`}
              >
                <p className="estado-pedido">Preparacion</p>
                <img
                  src={Preparacion}
                  alt="Pedidos en preparacion"
                  className="cover"
                  style={{ display: "inline" }}
                />
              </button>
            </div>
            <div className="flex flex-col">
              <button
                onClick={() => orderEntregado()}
                className={`cover ${entregado === true ? "bg-slate-400 text-white" : "bg-slate-200"} rounded-3xl border-2 border-slate-400 hover:text-slate-700 hover:bg-slate-50 hover:scale-95`}
              >
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
