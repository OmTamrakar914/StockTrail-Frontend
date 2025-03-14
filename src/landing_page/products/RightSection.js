import React from 'react';

function RightSection() {
    return ( 
        <div className='container  p-5 pt-3 '>
            <div className='ror p-5 d-flex gap-5'>
                <div className='col  p-4 position-relative mt-2' style={{left:"60px"}}>
                    <h1 className='lh-lg '>Console</h1>
                    <p>The central dashboard for your StockTrail</p>
                    <p>account. Gain insights into your trades andn</p>
                    <p> investments with in-depth reports and</p>
                    <p>visualisations.</p>
                    <p> <a  c href=''  style ={{textDecoration: "none"}} >
                    Learn more  <i class="fa-solid fa-arrow-right-long"></i></a></p>
                </div>
                <div className='col pl-5 position-relative' style={{top:"-90px" ,right:"90px"}} >
                    <img src="media/images/console.png" alt="" style={{width:"130%"}} />
                </div>
            </div>
            
        </div>
     );
}

export default RightSection;