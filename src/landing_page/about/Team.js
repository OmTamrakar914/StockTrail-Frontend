import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/aboutImagejpg.jpg"
            alt="Om Tamrakar"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Om Tamrakar</h4>
          <h6>Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Om is a tech enthusiast passionate about web development, AI, 
            and financial technology. He developed StockTrail to combine his 
            interests in finance and technology, creating an engaging way to 
            learn stock trading concepts hands-on.
          </p>
          <p>
            StockTrail is a result of his commitment to making financial literacy 
            more accessible, providing students and traders with an interactive 
            and risk-free environment** to explore stock markets.
          </p>
          <p>
            When he's not coding, you can find him playing chess, leading hackathons, 
            or building innovative tech projects.
          </p>
          <p>
            Connect on <a href="">GitHub</a> / <a href="">LinkedIn</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
