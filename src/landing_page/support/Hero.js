import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-5 mt-5 text-center">
        <h1 className="fs-2 fw-semibold">Need Help? We’re Here for You!</h1>
        <p className="text-muted fs-5">
          Find answers to your queries or get in touch with our support team.
        </p>
      </div>

      {/* Support Options */}
      <div className="row p-5 mt-4 border-top">
        <div className="col-md-4 text-center">
          <h3 className="fw-semibold">📖 Knowledge Base</h3>
          <p className="text-muted">
            Browse our <strong>FAQ</strong> section for quick solutions to common issues.
          </p>
          <a href="#" className="btn btn-primary">Visit FAQ</a>
        </div>

        <div className="col-md-4 text-center">
          <h3 className="fw-semibold">💬 Live Chat</h3>
          <p className="text-muted">
            Connect with our support team via live chat for real-time assistance.
          </p>
          <a href="#" className="btn btn-primary">Start Chat</a>
        </div>

        <div className="col-md-4 text-center">
          <h3 className="fw-semibold">📩 Contact Us</h3>
          <p className="text-muted">
            Have a specific query? Drop us an email, and we’ll get back to you.
          </p>
          <a href="mailto:support@stocktrail.com" className="btn btn-primary">Email Support</a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row p-5 mt-4 border-top">
        <div className="col-12">
          <h3 className="fw-semibold text-center">Submit a Support Request</h3>
        </div>
        <div className="col-md-8 offset-md-2">
          <form>
            <div className="mb-3">
              <label className="form-label fw-bold">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Your Message</label>
              <textarea className="form-control" rows="4" placeholder="Describe your issue" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  
  );
}

export default Hero;
