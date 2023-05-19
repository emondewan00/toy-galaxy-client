import { useContext, useState } from "react";
// import login from "../../assets/images/login/login.svg";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser } = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    createUser(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log("hallo");
  };
  return (
    <div className="hero h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12">{/* <img src={login} alt="" /> */}</div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sing Up!</h1>

            <form onSubmit={submitHandler}>
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">Name</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your Email"
                  className="input input-bordered"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="pass">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="pass"
                  type="password"
                  placeholder="Enter your Password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <p className="flex justify-center gap-x-3">
              <span className="bg-gray-200 p-3 rounded-full cursor-pointer">
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
              Already have an account?{" "}
              <Link className="text-orange-600 font-semibold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
