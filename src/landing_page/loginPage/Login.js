import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // State for login form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3002/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        throw new Error(data.message || "Login failed!");
      }

      // Store token & username in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.fullName.split(" ")[0]);

      // Redirect to dashboard
      navigate("/dashboard");

    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row shadow-lg p-4 rounded" style={{ maxWidth: "900px", width: "100%" }}>
        
        {/* Left Side - Login Form */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-4">
          <h2 className="text-center mb-4 fw-semibold">
            Login to <span style={{ fontFamily: "Arial, sans-serif", color: "#004ffa" }}>STOCKTRAIL</span>
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
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
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="text-danger fw-bold">{error}</p>}

            <div className="d-flex justify-content-between">
              <Link to="/forgot-password" className="text-decoration-none text-primary">Forgot Password?</Link>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-3">
            Don't have an account? <Link to="/signup" className="text-decoration-none text-primary">Sign Up</Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6 d-none d-md-block">
          <img src="/media/images/signupImage.jpg" alt="Login Visual" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}

export default Login;
