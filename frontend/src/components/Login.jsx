import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/v1/signin", Inputs);
  
      // Optional: Do something with the response, like console.log or setting tokens, etc.
      console.log("SignIn successful:", response.data);
  
      // Clear input fields after success
      setInputs({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("SignIn failed:", error.response?.data || error.message);
    }
  };
  
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center perspective-normal">
      <div className="w-full max-w-xl rounded-lg transition-all duration-500 ease-out bg-green-400 p-px bg-[conic-gradient(from_0deg,_black_80%,_#22c55e_90%,_black_100%)] animated-border">
        <div className="login-items flex justify-center items-center flex-col text-white text-center p-5 rounded-lg bg-neutral-900 border border-neutral-800">
          <h1 className="text-3xl font-bold glowing-pulse underline mb-4">
            SignIn
          </h1>
          <div className="relative w-xs mt-4">
            <input
              type="email"
              className="p-2 mt-2 w-full peer placeholder:text-transparent"
              placeholder="email"
              name="email"
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
          <div className="relative mt-5 w-xs">
            <input
              type="password"
              className="p-2 mt-2 w-full peer placeholder:text-transparent"
              placeholder="password"
              name="password"
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

          <div className="forget-pass mt-2 ">
            <Link className="text-sm hover:underline">Forget password?</Link>
          </div>
          <button onClick={submit} className=" w-xs mt-6 p-1 bg-green-500 hover:bg-green-600 rounded">
            SignIn
          </button>
          <div className="mt-4">
            <p>
              Don't have an account?{" "}
              <Link to="/" className="hover:underline">
                Create new account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
