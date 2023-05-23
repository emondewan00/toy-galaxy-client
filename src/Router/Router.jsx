import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/Details/ProductDetails";
import AllToys from "../pages/all-toys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/myToys/MyToys";
import PrivetRoute from "./PrivetRoute";
import EditToy from "../pages/editToy/EditToy";
import Error from "../pages/err/Error.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<Error/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <ProductDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://baby-toy-server-miremon5222-gmailcom.vercel.app/allToys/${params.id}`),
      },
      {
        path: "/allToys",
        element: (
          <PrivetRoute>
            <AllToys />
          </PrivetRoute>
        ),
      },
      {
        path: "/addToy",
        element: (
          <PrivetRoute>
            <AddToy />
          </PrivetRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivetRoute>
            <MyToys />
          </PrivetRoute>
        ),
      },
      {
        path: "/editToy/:id",
        element: (
          <PrivetRoute>
            <EditToy />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://baby-toy-server-miremon5222-gmailcom.vercel.app/allToys/${params.id}`),
      },
    ],
  },
]);
export default routes;
