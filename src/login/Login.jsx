import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const savedName = (event) => {
    const newUser = event.target.value;
    setUsername(newUser);
    console.log(newUser);
  };
  const savedPassword = (event) => {
    const newPass = event.target.value;
    setPassword(newPass);
    console.log(newPass);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    Username: ${username} \n 
    Password:${password}`);
  };

  return (
    
    <div className="login-page">
      

      <form>
      <div className="navbar">
        <div className="navLink">
          <span>Sar Software solutions</span>
        </div>
      </div>
        <h1>Sign in to your account !</h1>
        <div className="login">
          <label>Username</label>
          <input type="text" value={username} onChange={savedName} />
        </div>
        <div className="login">
          <label>Password</label>
          <input type="text" onChange={savedPassword} />
        </div>
        <div className="login-btn">
          <div className="login-btn1">
            <button
              onClick={handleSubmit}
              value="submit"
              className="btn btn-success"
            >
              Sign In
            </button>
          </div>
          {/* <div className="login-btn2">
            <button className="btn btn-primary">Register</button>
          </div> */}
        </div>
      </form>
    </div>
  );
}
