import React from "react";
import "../index.css";
import Landscape from "./assets/nature-landscape.jpg";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/v1/signup", Inputs)
      .then((response) => {
        setInputs({
          username: "",
          email: "",
          password: "",
        });
        toast.success("Signup successful!");
      })
      .catch((error) => {
        console.error("Signup failed:", error);
        toast.error("Signup failed. Please try again.");
      });
  };

  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center perspective-normal">
    <div className="w-full max-w-xl rounded-lg transition-all duration-500 ease-out bg-green-400 p-px bg-[conic-gradient(from_0deg,_black_80%,_#22c55e_90%,_black_100%)] animated-border">
      <div className="login-items flex justify-center items-center flex-col text-white text-center p-5 rounded-lg bg-neutral-900 border border-neutral-800">
        <h1 className="text-3xl font-bold glowing-pulse underline mb-4">
          SignUp
        </h1>
        <div className="relative w-xs mt-4">
          <input
            type="text"
            className="p-2 mt-2 w-full peer placeholder:text-transparent"
            placeholder="username"
            name="username"
            id="username"
            onChange={change}
            value={Inputs.username}
          />
          <label
            htmlFor="username"
            className="absolute transition-all -top-2.5 left-2 text-sm text-gray-600 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            username
          </label>
        </div>
        <div className="relative w-xs mt-4">
          <input
            type="text"
            className="p-2 mt-2 w-full peer placeholder:text-transparent"
            placeholder="email"
            name="email"
            id="email" 
            onChange={change}
            value={Inputs.email}
          />
          <label
            htmlFor="email"
            className="absolute transition-all -top-2.5 left-2 text-sm text-gray-600 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            email
          </label>
        </div>
        <div className="relative mt-4 w-xs">
          <input
            type="password" // Changed to password type for security
            className="p-2 mt-2 w-full peer placeholder:text-transparent"
            placeholder="password"
            name="password"
            id="password"
            onChange={change}
            value={Inputs.password}
          />
          <label
            htmlFor="password"
            className="absolute transition-all -top-2.5 left-2 text-sm text-gray-600 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            password
          </label>
        </div>
        <button onClick={submit} className=" w-xs mt-6 p-1 bg-green-500 hover:bg-green-600 rounded">
          SignUp
        </button>
        <div className="mt-4">
          <p>Have an account allredy! <Link to="/login" className="hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
    <ToastContainer />
  </div>
  );
};

export default Signup;