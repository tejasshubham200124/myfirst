import React, { useState, useEffect } from "react";
import "./login.css";
import swal from "sweetalert";
import Axios from "axios";
import { Navigate } from "react-router-dom";
export default function Login() {
  const intialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const signUp = () => {
    Axios.post("http://localhost:3000/signUp", formValues).then((response) => {
      console.log(response);
    });
  };
  const submit = () => {
    console.log(formValues);
  };
  const showAlert = () => {
    swal("Good job!", "Signed in succesfully!", "success");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    var err = validate(formValues);
    if (err(formValues).length === 0 && isSubmitting) {
      return true;
    }
    return false;
  };
  // setIsSubmitting(true);
  const validate = (values) => {
    let errors = {};

    if (!values.username) {
      errors.user = "please fill in the details";
    } else if (values.user.length < 3) {
      errors.user = "username must be more than 3 characters";
    }

    if (!values.password) {
      errors.password = "please fill in the details";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };
  

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 &&
          isSubmitting &&
          console.log("form submitted")}
        <div className="navbar">
          <div className="navLink">
            <span>Sar Software solutions</span>
          </div>
        </div>
        <h1>Register yourself !</h1>
        <div className="login">
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="user"
            value={formValues.user}
            onChange={handleChange}
          />
        </div>
        <div className="red">
          {formErrors.user && <span>{formErrors.user}</span>}
        </div>
        <div className="login">
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="red">
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <div className="login-btn">
          <div className="login-btn1">
            <button
              type="submit"
              value="submit"
              onClick={signUp}
              // onClick={showAlert}
              className="btn btn-success"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
