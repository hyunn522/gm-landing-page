import React from "react";
import "./Hero.css";


const Hero = ( {imgSrc} ) => {

    return (
    <div className={"hero"}>
        <h4 className="hero_top">─────────Home Gardening App</h4>
        <h1 className="hero_title">Green Mate</h1>
        <h2 className="hero_content">반려식물을 쉽게 키워보세요<br></br>식물별 맞춤 관리 서비스</h2>
        <button className="hero_button" onClick={() =>
        window.open("https://docs.google.com/forms/d/1CiKZkLHE9ZmsK2Zuh_TshB6Ss0xseRblvWkF-YK3uyQ/edit", '_blank')}>
            사전예약하기
        </button>
        <img className="hero_image" src={imgSrc}/>
    </div>
    );
};

export default Hero;