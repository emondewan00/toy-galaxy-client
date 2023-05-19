import { Outlet } from "react-router-dom";
import NavBar from "../pages/Navbar/NavBar";
import Footer from "../pages/Footer/Footer";

const Layout = () => {
  // bg-[#01051e] 
  return (
    <div className="container   mx-auto ">
      <NavBar />
      <div className="min-h-[80vh] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
