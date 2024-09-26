import React from 'react';

function Education() {
    return ( 
        <div className='container p-3 mt-5 pb-5'>
            <div className='row p-3'>
                <div className='col '>
                    <img style = {{width:"70%"}} src="media/images/education.svg" alt=""/>
                </div>
                <div className='col p-2 pt-5 '>
                    <h2 className='lh-lg'>Free and open market education</h2>
                    
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=''style ={{textDecoration: "none"}} > Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <br/><br/>

                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href=''style ={{textDecoration: "none"}} > TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                    
                </div>
            </div>
        </div>
     );
}

export default Education;