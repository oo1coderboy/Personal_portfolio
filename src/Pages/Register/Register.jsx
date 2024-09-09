import React from "react";
import Logo1 from '../../assets/Logo2.jpg';
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:4/12 lg:w-7/12">
              <img
                src={Logo1}
                alt="image"
              />
            </div>
            <div className="md:7/12 lg:w-10/12 p-6">
              <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Create an account</h1>

              <form className="flex flex-col">
                <div className="flex flex-col mb-4">
                  <label htmlFor="fullName" className="hidden font-serif">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="username" className="hidden font-serif">
                    Username (mandatory)
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="hidden font-serif">
                    Email (mandatory)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="password" className="hidden font-serif">
                    Password (mandatory)
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="confirmPassword" className="hidden font-serif">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>

                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="termsCheckbox"
                    className="mr-2"
                    required
                  />
                  <label htmlFor="termsCheckbox" className="text-gray-600 text-sm font-serif">
                    I agree to the Terms of Service
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 font-serif"
                >
                  Register
                </button>
                <div>
                  <h4>
                    Return to Login:{" "}
                    <Link
                      to="/login"
                      className="text-orange-700 hover:underline"
                    >
                      login
                    </Link>
                  </h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
