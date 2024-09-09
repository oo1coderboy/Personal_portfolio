import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo1.png";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      // console.log("Response Value: ", response);

      if (response.data.success) {
        toast.success('Congratulation! You are loggedIn Successfully.') ;
      } else {
        toast.error("Invalid Username or password!");
      }
    } catch (error) {
      console.log("Getting server error: ", error);
    }
  };

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:8/12 lg:w-9/12">
              <img src={Logo} alt="image" />
            </div>
            <div className="md:7/12 lg:w-10/12 p-6">
              <h1 className="text-3xl font-extrabold text-gray-800 mb-4 font-serif">
                Welcome back!
              </h1>

              <form className="flex flex-col" onSubmit={handleLogin}>
                <div className="flex flex-col mb-4">
                  <label htmlFor="username" className="hidden font-serif">
                    Username or Email
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username or Email"
                    className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="password" className="hidden font-serif">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 font-serif"
                >
                  Login
                </button>
                <div>
                  <h4>
                    Register yourself:{" "}
                    <Link
                      to="/register"
                      className="text-orange-700 hover:underline"
                    >
                      Register
                    </Link>
                  </h4>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
