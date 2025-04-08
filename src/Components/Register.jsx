import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components/form.css"

export const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  // LocalStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <div className="login-form">
      <h1 className="text-center">MovieHUB</h1>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="login-form">
          <form
            className="py-4 px-5 forms-mv"
            onSubmit={handleSubmit}
          >
            <h4 className="text-center border-bottom border-dark">Register</h4>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
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
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
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
                to="/login"
                className="ps-1 link-danger text-secondary text-decoration-none"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
