import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // For redirecting user

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3002/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed!");
        return;
      }

      // Store token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", formData.fullName.split(" ")[0]); // Save first name as username

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center min-vh-100">
        {/* Image Section */}
        <div className="col-md-6 text-center d-none d-md-block">
          <img
            src="/media/images/signupImage.jpg"
            alt="Signup"
            className="img-fluid"
            style={{ maxWidth: "85%", borderRadius: "10px" }}
          />
        </div>

        {/* Signup Form */}
        <div className="col-md-6">
          <h1 className="fs-2 fw-bold text-center">Create Your StockTrail Account</h1>
          <p className="text-muted text-center fs-5">
            Join StockTrail and start investing in your future today.
          </p>

          <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
            <div className="mb-3">
              <label className="form-label fw-bold">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="text-danger fw-bold">{error}</p>}

            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>

          <p className="mt-3 text-center">
            Already have an account? <Link to="/login" className="text-decoration-none text-primary">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
