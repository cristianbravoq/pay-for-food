import { BrowserRouter, Route, Routes } from "react-router-dom";

/* import { ProtectedRoute } from "./components/security/ProtectedRoutes" */
import { SignIn, SignUp } from "./components/auth/index"
import Dashboard from "./components/dashboard/Dashboard"
import Details from "./components/details/Details";
import { Factura } from "./components/ticket/Factura";
import { Rapidogs } from "./components/ticket/Rapidogs";
import { Mitos } from "./components/ticket/Mitos";
import { Montolivo } from "./components/ticket/Montolivo";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details/>} />
        <Route path="/factura" element={<Factura/>} />
        <Route path="/rapidogs" element={<Rapidogs/>} />
        <Route path="/mitos" element={<Mitos/>} />
        <Route path="/montolivo" element={<Montolivo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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

  /* <div className="absolute w-full text-center z-10 mt-2">
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
      </div> */