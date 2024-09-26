import React from 'react';

function Pricing() {
    return ( 
      <div className='container p-3 mt-5 pt-5 '>
          <div className='row p-3 '>
              <div className='col-5 mb-3 p-2'>
                  <h1 className='lh-lg'>Unbeatable pricing</h1>
                 
                  <p>We pioneered the concept of discount broking and price <br/> transparency in India. Flat fees and no hidden charges.</p>
                  <a  c href='' className =' position-relative mx-5' style ={{textDecoration: "none", left:"-48px"}} >See Pricing  <i class="fa-solid fa-arrow-right-long"></i></a>
              </div>
              <div className='col-7 p-2'>
                <div className='row v-align around'>
                    <div className='col-4'>
                        <img src="media/images/pricing-1.svg" style = {{width: "55%"}}/>
                        <p className=' d-inline-block  position-relative text-muted' style = {{left : "-25px" ,top : "30px", fontSize: "13px" }} >Free account
                          <br></br> opening</p>
                    </div>
                    <div className='col-4'>
                        <img src="media/images/pricing-1.svg" alt="pricing image" style = {{width: "55%"}}/>
                        <p className=' d-inline-block position-relative text-muted' style = {{fontSize: "13px", left: "98px", top: "-45px" }}>Free equity delivery <br/>
                          and direct mutual funds</p>
                    </div>
                    <div className='col-4'>
                        <img src="media/images/pricing-20.svg" alt="pricing image" style = {{width: "55%"}}/>
                        <p className=' d-inline-block position-relative text-muted'
                        style =  {{fontSize: "13px", left:"-8px" ,top:"6px"}}>Intraday F&O</p>
                    </div>
                </div>
                  
              </div>
          </div>
      </div>
     );
}

export default Pricing;