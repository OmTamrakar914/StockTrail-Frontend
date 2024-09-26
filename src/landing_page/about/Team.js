import React from 'react';

function Team() {
    return ( 
     <div className="container p-5">
        <div className="row pb-5 border-top">
          <h1 className="fs-1 text-center text-muted mt-5 pt-5">
            People
          </h1>
        </div>
        <div className="row p-5   p-3 fs-6 text-muted  " style={{lineHeight: "1.8", fontSize:"1.em"}} >
          <div className="col-6 ">
            <img src="media/images/nithinKamath.jpg" className='text-center' style={{borderRadius:"100%", width:"70%"}} alt=""/>
            <h3 className='text-center mt-5 position-relative' style={{lineHeight: "1", fontSize:"1.em" , right:"70px"}}>Nithin Kamath</h3>
            <h4 className='text-center position-relative' style={{lineHeight: "1", fontSize:"1.em" , right:"70px"}}>Founder, CEO</h4>
          
          </div>
          <div className="col-6 text-center p-5">
            <p>
            Nithin bootstrapped and founded StockTrail in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, StockTrail has changed the landscape of the Indian broking industry.
            </p>
            <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
            Playing basketball is his zen.
            </p>
            <p>
            Connect on <a href="" style= {{textDecoration: "none"}} >Homepage</a>  /<a href="" style= {{textDecoration: "none"}} >TradingQnA</a>  /<a href="" style= {{textDecoration: "none"}} >Twitter</a> 
            </p>
          </div>
        </div>
      </div>
     );
}

export default Team;   