import React from 'react';

function Hero() {
    return ( 
       <div className='container text-center pt-5 pb-5 mt-5 mb-5 border-bottom'>
           <div className='row lh-lg'>
               <h1 className='' style={{fontSize:"3rem"}} >Technology</h1>
               <h4 className='lh-lg text-muted'>Sleek, modern, and intuitive trading platforms</h4>
               <p >Check out our  <a  c href=''  style ={{textDecoration: "none"}} >investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
           </div>
       </div>
     );
}

export default Hero;