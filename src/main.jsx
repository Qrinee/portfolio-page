import React from 'react';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Elkomeb from "./components/Elkomeb";
import ParafiaWierzawice from "./components/ParafiaWierzawice";
import LikiaBeauty from "./components/LikiaBeauty";
import Page from './components/Page';
import NianiawUK from './components/NianiaWUK';
import MobileMenu from './components/MobileMenu';
import Mebloza from './components/Mebloza';
import Smartni from './components/Smartni';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/elkomeb",
    element: <Elkomeb />
  },
  {
    path: "/parafiawierzawice",
    element: <ParafiaWierzawice/>
  },
  {
    path: "/nianiawuk",
    element: <NianiawUK/>
  },
  {
    path: "/likiabeauty",
    element: <LikiaBeauty/>
  },{
    path: "/mebloza",
    element: <Mebloza/>
  },
  {
    path: "/smartni",
    element: <Smartni/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Page>

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Page>
);