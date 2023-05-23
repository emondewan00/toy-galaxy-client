import { useContext, useState } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import GoogleLog from "../shareComponent/GoogleLog";
import swal from "sweetalert";
import WebTitle from "../../webTitle/WebTitle";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const { emailAndPass } = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    emailAndPass(email, password, name, photo)
      .then((res) => {
        swal({
          title: "Success!",
          text: "Registration successfully!",
          icon: "success",
          dangerMode: false,
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  WebTitle();
  return (
    <div className="max-w-lg h-[80vh] my-10 mx-auto relative">
      <div className="w-80 h-80 bg-[#A427DF] absolute rounded-full blur-2xl opacity-80 "></div>
      <div className="login-card">
        <h1 className="text-3xl text-center font-bold ">Sing Up!</h1>
        <form onSubmit={submitHandler} className="space-y-3">
          <div className="form-control ">
            <label className="toy-label" htmlFor="name">
              Name{" "}
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="toy-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="toy-label" htmlFor="email">
              Email{" "}
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your Email"
              className="toy-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="toy-label" htmlFor="pass">
              Password
            </label>
            <input
              id="pass"
              type="password"
              placeholder="Enter your Password"
              className="toy-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="toy-label" htmlFor="photo">
              Photo URL
            </label>
            <input
              id="photo"
              type="url"
              placeholder="Enter your photo url"
              className="toy-input"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <GoogleLog />
        <p className="text-center">
          Already have an account?
          <Link className="text-orange-600 font-semibold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
