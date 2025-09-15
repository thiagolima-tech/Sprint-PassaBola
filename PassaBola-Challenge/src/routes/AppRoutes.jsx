import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Jogos from "../pages/Jogos";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jogos",
    element: <Jogos />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);
