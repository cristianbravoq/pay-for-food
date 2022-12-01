import "./styles.css";

//Components
import { Sidebar } from "../../pages/Sidebar";
import { OrdersList } from "./pages/OrdesList";

//Hooks
import { useAppDispatch, useAppSelector } from "../../app/states/hooks";
import { useEffect, useState } from "react";
import { orderByRestaurantSlice } from "../../features/orders/ordersSlice";

//Services
import { GetOrderByState } from "../../services/GetOrderByState";

//Images
import Pendiente from "../../assets/pendientes.png";
import Preparacion from "../../assets/preparacion.png";
import Entregado from "../../assets/entregado.png";

function Dashboard() {
  const [data, setData] = useState<any[]>([]);

  const [cantidadPendiente, setCantidadPendiente] = useState(0);
  const [cantidadPreparacion, setCantidadPreparacion] = useState(0);
  const [cantidadEntregado, setCantidadEntregado] = useState(0);

  const [pendiente, setPendiente] = useState(false);
  const [preparacion, setPreparacion] = useState(false);
  const [entregado, setEntregado] = useState(false);

  //Funcion que actualiza la informacion para que pueda ser obtenida desde cualquier componente
  const dispatch = useAppDispatch();
  const authUser = useAppSelector((state) => state.auth.Users);
  //console.log(authUser);

  useEffect(() => {
    async function cantidadesInicio() {
      const ordenesPendiente: any = await GetOrderByState(1);
      const ordenesPreparacion: any = await GetOrderByState(2);
      const ordenesEntregado: any = await GetOrderByState(3);
      const dataPendiente = JSON.stringify(ordenesPendiente.data);
      const dataArrayPendiente = JSON.parse(dataPendiente);
      setCantidadPendiente(dataArrayPendiente.length)
      const dataPreparacion = JSON.stringify(ordenesPreparacion.data);
      const dataArrayPreparacion = JSON.parse(dataPreparacion);
      setCantidadPreparacion(dataArrayPreparacion.length)
      const dataEntregado = JSON.stringify(ordenesEntregado.data);
      const dataArrayEntregado = JSON.parse(dataEntregado);
      setCantidadEntregado(dataArrayEntregado.length)
    }
    cantidadesInicio();
  }, [cantidadEntregado, cantidadPendiente, cantidadPreparacion]);

  function dataProps(props: any) {
    const dataString = JSON.stringify(props.data);
    const dataArray = JSON.parse(dataString);
    //console.log(dataArray, "dataArray");
    setData(dataArray.reverse());
    //setCantidad(dataArray.length);
    //console.log(dataArray, "data Reversado");
    dispatch(orderByRestaurantSlice(dataArray));
  }

  function dataNull() {
    //console.log("No hay pedidos disponibles");
    setData([]);
  }

  async function orderPendiente() {
    setPendiente(true);
    setPreparacion(false);
    setEntregado(false);
    const ordenesPendiente: any = await GetOrderByState(1);
    //console.log(ordenesPendiente);
    ordenesPendiente.message === "Consulta Exitosa"
      ? dataProps(ordenesPendiente)
      : dataNull();
  }
  async function orderPreparacion() {
    setPendiente(false);
    setPreparacion(true);
    setEntregado(false);
    const ordenesPreparacion: any = await GetOrderByState(2);
    //console.log(ordenesPreparacion);
    ordenesPreparacion.message === "Consulta Exitosa"
      ? dataProps(ordenesPreparacion)
      : dataNull();
  }
  async function orderEntregado() {
    setPendiente(false);
    setPreparacion(false);
    setEntregado(true);
    const ordenesEntregado: any = await GetOrderByState(3);
    //console.log(ordenesEntregado);
    ordenesEntregado.message === "Consulta Exitosa"
      ? dataProps(ordenesEntregado)
      : dataNull();
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex flex-1 flex-col p-2 sm:p-7 sm:ml-20 ml-10">
        <div>
          <h1 className="text-2xl font-semibold mb-5">
            {authUser.nombre ? authUser.nombre : "Inicia sesion para consultar"}
          </h1>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between">
            {/* <div className="rounded-3xl border-2 border-slate-400 p-5">   
                <p className="text-center mx-4">Cantidad</p>
                <h3 className="text-center">{cantidad}</h3>
            </div> */}
            <div className="flex flex-col mb-4 sm:mb-0 w-5/6 sm:w-1/5">
              <button
                onClick={() => orderPendiente()}
                className={`${
                  pendiente === true
                    ? "bg-slate-400 text-white"
                    : "bg-slate-200"
                } rounded-md hover:rounded-sm border-2 border-slate-400 hover:text-slate-700 hover:bg-slate-50 hover:scale-105`}
              >
                <p className="estado-pedido">{cantidadPendiente}</p>
                <p className="">Pendientes</p>
                <img
                  src={Pendiente}
                  alt="Pedidos pendientes"
                  className="cover"
                  style={{ display: "inline" }}
                />
              </button>
            </div>
            <div className="flex flex-col mb-4 sm:mb-0 w-5/6 sm:w-1/5">
              <button
                onClick={() => orderPreparacion()}
                className={`${
                  preparacion === true
                    ? "bg-slate-400 text-white"
                    : "bg-slate-200"
                } rounded-md hover:rounded-sm border-2 border-slate-400 hover:text-slate-700 hover:bg-slate-50 hover:scale-105`}
              >
                <p className="estado-pedido">{cantidadPreparacion}</p>
                <p className="">Preparacion</p>
                <img
                  src={Preparacion}
                  alt="Pedidos en preparacion"
                  className="cover"
                  style={{ display: "inline" }}
                />
              </button>
            </div>
            <div className="flex flex-col mb-4 sm:mb-0 w-5/6 sm:w-1/5">
              <button
                onClick={() => orderEntregado()}
                className={`${
                  entregado === true
                    ? "bg-slate-400 text-white"
                    : "bg-slate-200"
                } rounded-md hover:rounded-sm border-2 border-slate-400 hover:text-slate-700 hover:bg-slate-50 hover:scale-105`}
              >
                <p className="estado-pedido">{cantidadEntregado}</p>
                <p className="">Entregado</p>
                <img
                  src={Entregado}
                  alt="Pedidos entregados"
                  className="cover"
                  style={{ display: "inline" }}
                />
              </button>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-row my-5 justify-between items-center">
              <h2>Dashboard</h2>
            </div>
            <div className="overflow-y-scroll max-h-96" /* style={{ maxHeight: "70vh" }} */>
              <OrdersList data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
