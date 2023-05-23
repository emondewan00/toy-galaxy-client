import { useContext, useRef, useState } from "react";
// import login from "../../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import GoogleLog from "../shareComponent/GoogleLog";
import swal from "sweetalert";
import WebTitle from "../../webTitle/WebTitle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { googleLogIn, signInWithEmailPass } = useContext(AuthContext);
  const location = useLocation();
  const emailRaf = useRef();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const submitHandler = (event) => {
    event.preventDefault();
    signInWithEmailPass(email, password)
      .then((res) => {
        swal({
          title:"Success!",
          text: "Login successfully!",
          icon: "success",
          dangerMode: false,
        });
        navigate(from);
      })
      .catch((err) => console.log(err));
  };
  const forgotPass = (e) => {
    console.log(emailRaf.current.value);
  };
  WebTitle()
  return (
    <div className="max-w-md h-[80vh] my-10 mx-auto  relative">
      <div className="w-80 h-80 bg-[#A427DF] absolute rounded-full -top-10 -left-10 "></div>
      <div className="login-card">
        <h1 className="text-3xl text-center font-bold">Login!</h1>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label className="toy-label">Email</label>
            <input
              type="text"
              placeholder="email"
              ref={emailRaf}
              className="toy-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="toy-label ">Password</label>
            <input
              type="password"
              placeholder="password"
              className="toy-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="toy-label">
              <p
                onClick={forgotPass}
                className="text-white tracking-wide cursor-pointer mt-2"
              >
                Forgot password?
              </p>
            </label>
          </div>
          <div className="form-control ">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <GoogleLog />
        <p className="text-center">
          New in this site ?{" "}
          <Link className="text-orange-600 font-semibold" to="/registration">
            Registration
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
