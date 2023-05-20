import { useState } from "react";
import { Link } from "react-router-dom";
// import { HiMenu } from "react-icons/hi";
// import logo from "../../assets/logo.svg";
// import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  // const { currentUser, logOut } = useContext(AuthContext);
  const menuHandler = () => {
    setNav(!nav);
  };
  // const logOutHandler = () => {
  //   logOut();
  // };
  // Home, All Toys, My Toys, Add A Toy, Blogs,
  return (
    <div className="  text-white bg-white/10  border-b  shadow-xl">
      <nav className="p-5  md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center ">
          <Link
            to="/"
            className="text-2xl hover:text-4xl delay-200 transition-all duration-300 ease-in-out  cursor-pointer"
          >
            Toy Galaxy
          </Link>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={menuHandler}
          >
            =
          </span>
        </div>
        <ul
          className={`md:flex md:items-center z-40 md:z-auto absolute md:sticky  w-full left-0  md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100   transition-all ease-in duration-500 ${
            nav ? "top-[80px]" : "top-[-400px]"
          }`}
        >
          <li className="me-2">
            <Link to="/">Home</Link>
          </li>
          <li className="me-2">
            <Link to="/allToys">All Toys</Link>
          </li>
          <li className="me-2">
            <Link to="/myToys">My Toys</Link>
          </li>
          <li className="me-2">
            <Link to="/addToy">Add A Toy</Link>
          </li>
          <li className="me-2">
            <Link to="/blogs">Blogs</Link>
          </li>
          {/* {currentUser?.email ? (
          <>
            <li className="me-2">
              <Link to="services">Book Services</Link>
            </li>
            <li className="me-2">
              <button onClick={logOutHandler} className="btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li className="me-2">
            <Link to="/login">Login</Link>
          </li>
        )} */}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
