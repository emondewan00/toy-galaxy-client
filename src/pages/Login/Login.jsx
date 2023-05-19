import { useContext, useRef, useState } from "react";
// import login from "../../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

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
        navigate(from);
      })
      .catch((err) => console.log(err));
  };
  const forgotPass = (e) => {
    console.log(emailRaf.current.value);
  };
  const googleLog = () => {
    googleLogIn()
      .then((res) => {
        navigate(from);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12">{/* <img src={login} alt="" /> */}</div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login!</h1>
            <form onSubmit={submitHandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  ref={emailRaf}
                  className="input input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <p
                    onClick={forgotPass}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <p className="flex justify-center gap-x-3">
              <span
                onClick={googleLog}
                className="bg-gray-200 p-3 rounded-full cursor-pointer"
              >
                <FaGoogle />
              </span>
              <span className="bg-gray-200 p-3 rounded-full cursor-pointer">
                <FaFacebook />
              </span>
              <span className="bg-gray-200 p-3 rounded-full cursor-pointer">
                <FaLinkedin />
              </span>
            </p>
            <p className="text-center">
              New in this site ?{" "}
              <Link
                className="text-orange-600 font-semibold"
                to="/registration"
              >
                Registration
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
