import React, { useState, useEffect,Redirect } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Axios from "axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(false);
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('username'));
  //   if (items) {
  //    setUsername(username);
  //   }
  // }, []);
  // if(username === username && password === password){
  //   localStorage.setItem("authenticated", true);
  //   navigate("/");
  // }
  
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //    setItems(items);
  //   }
  // }, []);

  const handleSubmit = (e) => {
     e.preventDefault() 
  };
 
  
  const navigate = useNavigate();
  const register = () => {
    Axios.post("http://localhost:3000/signin", {
      username: username,
      password: password,
    }).then((response) => {
  
       console.log(response);
       var obj = response.data;
       if(obj.code==200){
          var user_data = obj.data;
          localStorage.setItem("authenticated",true);
          localStorage.setItem("userid",user_data[0].id);
          localStorage.setItem("username",user_data[0].username);
          navigate("/");
       }else{
        localStorage.setItem("authenticated",true);
        swal("Sorry!", "Invalid credentials!", "error");
        //navigate("/login")
       }
      // console.log(obj);
      // if(obj){
      //   localStorage.setItem("userid",obj[0].id);
      //   localStorage.setItem("username",obj[0].username);
      //   navigate("/");
      // }
      // else{
      //   localStorage.setItem('code', 400);
      //   swal("Sorry!", "please register yourself!", "error");
      //   navigate("/login")
      // }
      

      // navigate("/");
    });
   
  };
  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="navbar">
          <div className="navLink">
            <span>Sar Software solutions</span>
          </div>
        </div>
        <h1>Sign in to your account!</h1>
        <div className="login">
          <label>Username</label>
          <input
            type="text"
            // name="username"
            // id="user"
            // value={formValues.user}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="red">
          {/* {formErrors.user && <span>{formErrors.user}</span>} */}
        </div>
        <div className="login">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="red">
          {/* {formErrors.password && <span>{formErrors.password}</span>} */}
        </div>
        <div className="login-btn">
          <div className="login-btn1">
            <button
              type="button"
              value="button"
              onClick={register}
              className="btn btn-success"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
