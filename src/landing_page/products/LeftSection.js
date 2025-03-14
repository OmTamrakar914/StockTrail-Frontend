import React from 'react';

function LeftSection({imageURL, productName, productDescription,tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        
        <div className='container  p-4   '>
            <div className='row p-5 d-flex gap-5'>
                <div className='col pl-5 position-relative' style={{left:"60px"}} >
                    {/* <img src="media/images/kite.png" alt="" style={{width:"100%"}} /> */}
                    <img src={imageURL} alt="" style={{width:"100%"}} />

                </div>
                <div className='col pt-2 p-5 position-relative' style={{left:"60px"}}>
                    <h1 className='lh-lg' >{productName}</h1>
                    <p>{productDescription}</p>

                    <div className=''>
                        
                    </div>
                    
                    <div>
                    <a href={tryDemo} style ={{textDecoration: "none"}} className=''>Try Demo</a>
                    <a href={learnMore} style={{marginLeft: "50px",textDecoration: "none"}} >Learn More</a>
                    </div >
                    <div className='mt-3'>
                        
                    {/* <a href={googlePlay} style={{marginLeft: "0px"}}><img src="media/images/googlePlayBadge.svg" alt=""/></a>
                    <a href={appStore} style={{marginLeft: "20px"}}><img src="media/images/appstoreBadge.svg" alt=""/></a> */}
                    </div>
                </div>
            </div>
            
        </div>
     
     );
}

export default LeftSection;