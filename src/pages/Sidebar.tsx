/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";

import Chart_fill from "../assets/Chart_fill.png";
import User from "../assets/User.png";
import Control from "../assets/control.png";
import Logo from "../assets/logo.png";
import Search from "../assets/Search.png";
/* import Setting from "../assets/Setting.png";
import Chat from "../assets/Chat.png";
import Folder from "../assets/Folder.png";
import Chart from "../assets/Chart.png";
import Calendar from "../assets/Calendar.png"; */
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/states/hooks";
import { loginSlice } from "../features/auth/authSlice";

export function Sidebar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const Menus = [
    { title: "Search", src: Search },
    { title: "Dashboard", src: Chart_fill },
    /* { title: "Inbox", src: Chat }, */
    /* { title: "Pendientes", src: Chat, gap: true },
    { title: "Preparacion", src: Calendar },
    { title: "Entregados", src: Chart }, */
    { title: "Salir", src: User, gap: true },
    /* { title: "Configuracion", src: Setting }, */
  ];

  function login() {
    navigate(`/SignIn`);
  }
  function menusNavigate(title: string) {
    if (title === "Dashboard") navigate(`/Dashboard`);
    if (title === "Salir") {
      dispatch(
        loginSlice({
          iD_RESTAURANTE: 0,
          nombre: "",
        })
      );
      navigate(`/SignIn`);
    }
  }

  return (
    <>
      <div
        className={` ${
          open ? "sm:w-72 w-full" : "sm:w-20 w-10"
        } bg-slate-900 h-full p-5 pt-8 fixed duration-500 flex flex-col justify-between`}
      >
        <img
          src={Control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 rounded-full  ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div
          className="flex gap-x-4 items-center justify-center hover:scale-90"
          onClick={login}
        >
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
        <ul className="py-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white hover:scale-110  hover:bg-slate-500 text-gray-300 hover:text-gray-800 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-40" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <div
                className="w-full flex items-center gap-4"
                onClick={() => menusNavigate(Menu.title)}
              >
                <img src={Menu.src} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
