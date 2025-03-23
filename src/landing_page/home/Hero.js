import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container p-5 mb-5 ' style={{   borderRadius: "03%", 
             }}>
            <div className='row text-center '>
                <img src="media/images/homeHero.png" alt="image" className='mb-5'/>

                <h1 className='mt-5 pb-1'>Invest in everything</h1>
                <p className='pb-2' >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/signup"><button className="p-3 btn btn-primary fs-5 mb-5"style={{width:"20%",margin: "0 auto"}}>Signup for free</button></Link> 
            </div>
        </div>
     );
}

export default Hero;
