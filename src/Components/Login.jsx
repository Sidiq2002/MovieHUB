import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components/form.css"
export const Login = () => {
  const navigator = useNavigate()
   const [input, setInput] = useState({
      email: "",
      password: "",
    });
    const handleLogin = (e) =>{
      e.preventDefault()
      const loginUser = JSON.parse(localStorage.getItem("user"))
      if(input.email == loginUser.email && input.password == loginUser.password){
        localStorage.setItem("loggedin",true)
        navigator("/home")
      } else {
        alert("Wrong Email or Password")
      }
    }
  return (
    <div className="login-form">
      <h1 className="text-center">MovieHUB</h1>
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <form className="py-4 px-3 forms-mv" onSubmit={handleLogin}>
          <h4 className="text-center border-bottom border-dark mb-3 pb-2">
            Login
          </h4>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              className="form-control"
              required
            />
          </div>
          <button
            type="submit"
            className=" w-100 btn btn-outline-success fw-bold "
          >
            Submit
          </button>
          <div className="form-text mt-2 fw-bold">
            Create a new account?
            <Link
              to="/register"
              className="ps-1 link-danger text-secondary text-decoration-none"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
