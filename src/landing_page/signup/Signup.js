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
  const [loading, setLoading] = useState(false); // ✅ Loading state
  const navigate = useNavigate(); // For redirecting user

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Prevent API call if fields are empty
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required!");
      return;
    }

    // ✅ Validate password length
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // ✅ Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true); // Show loading state

    try {
      const response = await fetch("http://localhost:3002/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
        credentials: "include", // ✅ Allows backend to set authentication cookies
      });

      const data = await response.json();
      setLoading(false); // Hide loading state

      if (!response.ok) {
        setError(data.error || "Signup failed!");
        return;
      }

      if (!data.user || !data.user.username) {
        throw new Error("Error: `user.username` is missing in API response.");
      }

      // ✅ Store username & token in session storage (For UI & API authentication)
      sessionStorage.setItem("username", data.user.username);
      sessionStorage.setItem("token", data.token);

      console.log("Stored Username:", sessionStorage.getItem("username"));
      console.log("Stored Token:", sessionStorage.getItem("token"));

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
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

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-3 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none text-primary">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
