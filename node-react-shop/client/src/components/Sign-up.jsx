
  

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; // Make sure to install axios

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    
    // Call API to register the user
    try {
      const response = await axios.post("http://localhost:4000/api/users/", {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        setSuccess("Signup successful!");
        // Optionally, clear the form
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred while processing your signup. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "500px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="adjust_button">
          <button type="submit" className="btn btn-primary w-100">
          
            Sign Up
           
          </button>
          </div>
        </form>
        <p className="text-center mt-3">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;


