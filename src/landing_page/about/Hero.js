import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          Redefining stock market learning  
          <br />
          with innovation and technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            StockTrail is an educational project designed to help students, 
            aspiring traders, and finance enthusiasts understand stock trading, 
            investments, and market analysis in a risk-free environment.
          </p>
          <p>
            Our platform offers simulated trading, allowing users to place 
            virtual trades, explore market trends, and analyze financial data — 
            all without real financial risks.
          </p>
          <p>
            StockTrail is built using cutting-edge web technologies to provide a 
            seamless and intuitive trading experience, making financial literacy 
            more accessible and engaging.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            We believe that financial education should be interactive and practical. 
            That’s why we focus on **market insights, real-time learning, and easy-to-use tools.
          </p>
          <p>
            StockTrail is more than just a project—it's an initiative to bridge the 
            gap between financial knowledge and real-world market experiences.
          </p>
          <p>
            And yet, we are always improving and innovating. Stay updated with our 
            latest developments, insights, and features as we continue to enhance 
            the learning experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
