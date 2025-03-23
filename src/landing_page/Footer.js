import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-top mt-5 bg-light">
      <div className="container">
        <div className="row mt-5">
          <div className="col-3">
            <div className="footer-logo">
              <img src="media/images/logo.png" alt="StockTrail Logo" style={{ width: "10%" }} />
              <h4 className="d-inline-block">STOCKTRAIL</h4>
            </div>
            <p className="copyright text-grey">© 2024 StockTrail. All rights reserved.</p>
            <p className="text-muted small">
              StockTrail is a college project developed for learning purposes. It is not a real financial service.
            </p>
          </div>

          <div className="col-3">
            <ul className="list-style">
            <Link class="nav-link active" to="/product" className="nav-head">Company</Link>
              <li><Link class="nav-link active" to="/about">About</Link></li>
              <li><Link class="nav-link active" to="/product">Product</Link></li>
              <li><Link class="nav-link active" to="/pricing">Pricing</Link></li>
              <li><Link class="nav-link active" to="/support">Referral Program</Link></li>
              <li><Link class="nav-link active" to="/support">Careers</Link></li>
              <li><Link class="nav-link active" to="/support">Press & Media</Link></li>
            </ul>
          </div>

          <div className="col-3">
            <ul className="list-style">
            <Link class="nav-link active" className="nav-head" to="/support">Support</Link>
              <li> <Link class="nav-link active" to="/support">Contact Us</Link></li>
              <li><Link class="nav-link active" to="/support">Support Portal</Link></li>
              <li><Link class="nav-link active" to="/support">FAQ</Link></li>
              <li><Link class="nav-link active" to="/support">Download and resources</Link></li>
            </ul>
          </div>

          <div className="col-3">
            <ul className="list-style">
            <Link class="nav-link active" className="nav-head" to="/signup">Account</Link>
              <li> <Link class="nav-link active" to="/signup">Open a account</Link></li>
              <li><Link class="nav-link active" to="/support">Fund Transfer</Link></li>
            </ul>
          </div>
        </div>

        <div className="row mt-5 fs-6 text-small text-muted">
          <p>
            This website is for educational purposes only. StockTrail does not provide real financial services. 
            The information presented is fictional and should not be considered financial advice.
          </p>
        </div>

        <div className="footer-graveyard-links text-center">
          <ul className="">
            <li><a href="https://nseindia.com">NSE</a></li>
            <li><a href="https://www.bseindia.com/">BSE</a></li>
            <li><a href="https://www.mcxindia.com/">MCX</a></li>
            <li><Link class="nav-link active" to="/support">Terms & Conditions</Link></li>
            <li><Link class="nav-link active" to="/support">Privacy Policy</Link></li>
          </ul>
          <p className="text-muted small">The external links provided are for reference only and do not imply any affiliation.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
