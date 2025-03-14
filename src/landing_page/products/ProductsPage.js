import React from 'react';
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
    return ( <>
    <Hero/>
    <LeftSection 
     imageURL="media/images/kite.png"
     productName="Hawk" 
     productDescription="streaming market data, advanced charts, an
    elegant UI, and more. Enjoy the Hawk
    experience seamlessly on your Android and iOS devices."
     tryDemo="" 
     learnMore=""
     googlePlay="" 
     appStore=""   />

    <RightSection/>

     {/* <LeftSection 
     imageURL="media/images/coin.png"
     productName="Coin" 
     productDescription="streaming market data, advanced charts, an
    elegant UI, and more. Enjoy the Kite
    experience seamlessly on your Android and iOS devices."
     tryDemo="" 
     learnMore=""
     googlePlay="" 
     appStore="" />

    <RightSection/>

    <LeftSection 
     imageURL="media/images/varsity.png"
     productName="Varsity mobile" 
     productDescription="streaming market data, advanced charts, an
    elegant UI, and more. Enjoy the Kite
    experience seamlessly on your Android and iOS devices."
     tryDemo="" 
     learnMore=""
     googlePlay="" 
     appStore="" /> */}
    {/* <Universe/> */}
    
    </> );
}

export default ProductPage;