/* import { useState } from "react"; */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* import { ProtectedRoute } from "./components/security/ProtectedRoutes" */

import { SignIn, SignUp } from "./components/auth/index"
import Dashboard from "./components/dashboard/Dashboard"

//Peticiones Services
//import { authUser } from "./services/Auth"
//import { GetOrdersByRestaurant } from './services/GetOrderByRestaurant'
//import { GetOrdersByNumber } from './services/GetOrderByNumber'

function App() {

  /* const [user, setUser] = useState<{
    usuario: string;
    contraseña: string;
  } | null>(null);

  const login = () =>
    setUser({
      usuario: "UsuarioPrueba",
      contraseña: "ContraseñaPrueba"
    });
  const logout = () => {
    setUser(null);
  } */

  return (
    <BrowserRouter>
      {/* <div className="absolute w-full text-center z-10 mt-2">
        {user ? (
          <>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={login}
          >
            Login
          </button>
        )}
      </div> */}
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
