import React from 'react';

function LeftSection() {
    return ( 
        <div className='container mt-5 p-5 pt-5 border-top'>
            <div className='ror p-5 d-flex gap-5'>
                <div className='col pl-5 position-relative' style={{left:"60px"}} >
                    <img src="media/images/kite.png" alt="" style={{width:"100%"}} />
                </div>
                <div className='col pt-5 p-5 position-relative' style={{left:"60px"}}>
                    <h1 className='lh-lg' >Kite</h1>
                    <p>Our ultra-fast flagship trading platform with</p>
                    <p>streaming market data, advanced charts, an</p>
                    <p>elegant UI, and more. Enjoy the Kite</p>
                    <p>experience seamlessly on your Android and iOS devices.</p>
                    <div className=''>
                        
                    </div>
                    <p cl><a  c href=''  style ={{textDecoration: "none"}} >Try demo  <i class="fa-solid fa-arrow-right-long"></i></a> <span class="tab-space"> </span><a c href='' className='position-relative' style ={{textDecoration: "none", left:"100px"}} >
                    Learn more  <i class="fa-solid fa-arrow-right-long"></i></a></p>
                    <img src="media/images/googlePlayBadge.svg" alt=""/>
                </div>
            </div>
            
        </div>
     );
}

export default LeftSection;