/* eslint-disable jsx-a11y/alt-text */
/* import avatar from '../../../public/assets/avatar.png';
import icon_settings from '../../../public/assets/icon-settings.png';
import icon_accounts from '../../../public/assets/icon-accounts.png';
import icon_lock from '../../../public/assets/icon-lock.png'; */
import "./styles.css";

import { useState } from "react";

import Calendar from "../../assets/Calendar.png";
import Chart_fill from "../../assets/Chart_fill.png";
import Chart from "../../assets/Chart.png";
import Chat from "../../assets/Chat.png";
import Control from "../../assets/control.png";
import Folder from "../../assets/Folder.png";
import Logo from "../../assets/logo.png";
import Search from "../../assets/Search.png";
import Setting from "../../assets/Setting.png";
import User from "../../assets/User.png";
import Pendiente from "../../assets/pendientes.png";
import Preparacion from "../../assets/preparacion.png";
import Entregado from "../../assets/entregado.png";

function Dashboard() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-slate-900 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={Control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 rounded-full  ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            P<small>ay</small>4F<small>ood</small>
          </h1> */}
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex flex-1 flex-col p-7">
        <div>
          <h1 className="text-2xl font-semibold ">Dashboard</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row m-5">
            <div className="mx-3 flex flex-1 flex-col w-1/3 text-center bg-slate-200 rounded-3xl border-2 border-slate-400">
              <button>
                <p className="estado-pedido">Pendientes</p>
                <img src={Pendiente} alt="" />
              </button>
            </div>
            <div className="mx-3 flex flex-1 flex-col w-1/3 text-center bg-slate-200 rounded-3xl border-2 border-slate-400">
              <button>
                <p className="estado-pedido">Preparacion</p>
                <img src={Preparacion} alt="" />
              </button>
            </div>
            <div className="mx-3 flex flex-1 flex-col w-1/3 text-center bg-slate-200 rounded-3xl border-2 border-slate-400">
              <button>
                <p className="estado-pedido">Entregado</p>
                <img src={Entregado} alt="" />
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-row my-5 justify-between items-center">
                <h2>Nombre del restaurante</h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar</button>
            </div>
            <table className="table-fixed w-full my-5">
              <thead>
                <tr>
                  <th className="">Id</th>
                  <th className="">Pedido</th>
                  <th className="">Cliente</th>
                  <th className="">Producto</th>
                  <th className="">Valor</th>
                  <th className="">Detalles</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-slate-400 bg-zinc-50">The Sliding</td>
                  <td className="border border-slate-400 bg-zinc-50">Malcolm Lockyer</td>
                  <td className="border border-slate-400 bg-zinc-50">1961</td>
                  <td className="border border-slate-400 bg-zinc-50">Mr. Bones</td>
                  <td className="border border-slate-400 bg-zinc-50">Malcolm Lockyer</td>
                  <td className="border border-slate-400 bg-zinc-50">1961</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
