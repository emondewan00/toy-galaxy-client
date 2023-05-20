import { Outlet } from "react-router-dom";
import NavBar from "../pages/Navbar/NavBar";
import Footer from "../pages/Footer/Footer";

const Layout = () => {
  // bg-[#01051e]
  return (
    <div className=" bg-[#01051e]   ">
      <div className="">
        <NavBar />
        <div className="min-h-[80vh] container mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
