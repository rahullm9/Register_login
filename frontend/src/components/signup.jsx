import React from "react";
import "../index.css";
import Landscape from "./assets/nature-landscape.jpg";

const Signup = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex flex-row item-container">
          <div className="img-box">
            <img src={Landscape} alt="My Local File" className="img" />
          </div>
          <div className="signup-box d-flex flex-column justify-content-center align-items-center">
            <h1>Sign Up</h1>
            <div className="signup-items d-flex flex-column mt-3">
              <input className="p-2" type="text" placeholder="username" />
              <input className="p-2" type="email" placeholder="Email" />
              <input className="p-2" type="password" placeholder="Password" />
              <button>Sign Up</button>
            </div>
            <p>
              Have an account?<a href="#"> Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
