import React from "react";

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
              <a href="#" className="nav-head">Company</a>
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Referral Program</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press & Media</a></li>
            </ul>
          </div>

          <div className="col-3">
            <ul className="list-style">
              <a href="#" className="nav-head">Support</a>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Support Portal</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Downloads & Resources</a></li>
            </ul>
          </div>

          <div className="col-3">
            <ul className="list-style">
              <a href="#" className="nav-head">Account</a>
              <li><a href="#">Open an Account</a></li>
              <li><a href="#">Fund Transfer</a></li>
            </ul>
          </div>
        </div>

        <div className="row mt-5 fs-6 text-small text-muted">
          <p>
            This website is for **educational purposes only**. StockTrail does not provide real financial services. 
            The information presented is fictional and should not be considered financial advice.
          </p>
        </div>

        <div className="footer-graveyard-links text-center">
          <ul className="">
            <li><a href="https://nseindia.com">NSE</a></li>
            <li><a href="https://www.bseindia.com/">BSE</a></li>
            <li><a href="https://www.mcxindia.com/">MCX</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <p className="text-muted small">The external links provided are for reference only and do not imply any affiliation.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
