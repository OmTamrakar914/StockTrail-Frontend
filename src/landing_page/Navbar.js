import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-white  border-bottom">
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            className="position-relative"
            src="media/images/logo.png"
            alt=""
            style={{ width: "5%", left: "10%", top: "-5px" }}
          />
          <h4
            className=" d-inline-block position-relative fs-4 btn-primary "
            style={{ left: "11%",color: "#004ffa" }}
          >
            STOCKTRAIL
          </h4>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="  collapse navbar-collapse " id="navbarSupportedContent">
         
          <form class="d-flex" role="search">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
               Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/product">
              Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/support">
                Support  
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/">
              <i class="fa-solid fa-bars"></i>
              </Link>
            </li>
           
            
             
            
           
          </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
