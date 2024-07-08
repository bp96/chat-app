import React, { useState } from "react";
import '../style.scss'

const Register = () => {

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatNow</span>
        <span className="title">Register</span>
        <form>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" /> 
        </form>

      </div>
    </div>
  );
};

export default Register;
