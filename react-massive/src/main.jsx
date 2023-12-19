import React from "react";
import ReactDOM from "react-dom/client";

import "../src/css/bootstrap.min.css";
import "../src/css/style.css";
import "../src/css/peta.css";
import "../src/css/psikososial.css";

import "../src/css/lanjut_donasi.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Relawan from "./pages/Relawan";
import InfoDonasi from "./fragments/Donasi";
import Donasi1 from "./pages/Donasi";
import Peta from "./pages/Peta";
import Tentang from "./pages/Tentang";
import Masuk from "./pages/Masuk";
import Error from "./pages/404";
import LanjutDonasi from "./pages/LanjutDonasi";
import Psikososial from "./pages/Psikososisal";
import Resetpassword from "./pages/Resetpassword";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },

  {
    path: "/relawan",
    element: <Relawan />,
  },
  {
    path: "/info-donasi",
    element: <InfoDonasi />,
  },
  {
    path: "/donasi",
    element: <Donasi1 />,
  },
  {
    path: "/lanjutDonasi",
    element: <LanjutDonasi />,
  },
  {
    path: "/peta",
    element: <Peta />,
  },
  {
    path: "/tentang",
    element: <Tentang />,
  },
  {
    path: "/login",
    element: <Masuk />,
  },
  
  {
    path: "/psikososial",
    element: <Psikososial />,
  },
  {
    path: "/resetpassword",
    element: <Resetpassword />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
