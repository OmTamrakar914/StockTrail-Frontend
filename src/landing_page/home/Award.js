import React from 'react';

function Award() {
    return ( 
        <div className='container mt-5 mb-5 pb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                     <img src="media/images/largestBroker.svg" alt=""/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-4'>2+ million StockTrail clients contribute to over 15%  of all retail order volumes in india daily by trading and investing in:</p>
                    
                    <div className='row pb-4 '>
                        <div className='col-6 lh-lg'>
                           <ul>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>currency derivatives</li>
                           </ul>
                        </div>
                        <div className='col-6 lh-lg'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                             </ul> 
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="images" style= {{width:"98%"}}/>
                    
                </div>
            </div>
        </div>
     );
}

export default Award;