import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/Details/ProductDetails";
import AllToys from "../pages/all-toys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/myToys/MyToys";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
      { path: "/details/:id", element: <ProductDetails /> },
      { path: "/allToys", element: <AllToys /> },
      { path: "/addToy", element: <AddToy /> },
      { path: "/myToys", element: <MyToys /> },
    ],
  },
]);
export default routes;
