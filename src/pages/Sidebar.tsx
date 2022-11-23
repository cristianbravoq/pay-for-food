/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";

import Calendar from "../assets/Calendar.png";
import Chart_fill from "../assets/Chart_fill.png";
import Chart from "../assets/Chart.png";
/* import Chat from "../assets/Chat.png"; */
import Control from "../assets/control.png";
import Folder from "../assets/Folder.png";
import Logo from "../assets/logo.png";
import Search from "../assets/Search.png";
import Setting from "../assets/Setting.png";
import User from "../assets/User.png";

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    /* { title: "Inbox", src: Chat }, */
    { title: "Search", src: Search },
    { title: "Pendientes", src: User, gap: true },
    { title: "Preparacion", src: Calendar },
    { title: "Entregados", src: Chart },
    { title: "Archivos", src: Folder, gap: true },
    { title: "Configuracion", src: Setting },
  ];

  return (
    <>
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
    </>
  );
}
