import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components/form.css";
export const Login = () => {
  const navigator = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (input.email === "" || input.password === "") {
      alert("Please enter both email and password");
      return;
    }
    if (!emailRegex.test(input.email)) {
      alert("Invalid email format");
      return;
    }
    const loginUser = JSON.parse(localStorage.getItem("user"));
    if (!loginUser) {
      alert("User not found");
      return;
    }
    if (input.email === loginUser.email && input.password === loginUser.password) {
      localStorage.setItem("loggin", true);
      navigator("/home");
    } else {
      alert("Wrong Email or Password");
    }
  };
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
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className=" w-100 btn btn-outline-light fw-bold "
          >
            Submit
          </button>
          <div className="form-text text-warning mt-2 fw-bold">
            Create a new account?
            <Link
              to="/register"
              className="ps-1 link-danger text-light text-decoration-none"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
