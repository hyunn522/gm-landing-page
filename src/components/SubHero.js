import React from "react";
import "./SubHero.css";
import { useInView } from 'react-intersection-observer';


const SubHero = () => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.3,
    });

    const renderContent = () => {
        return <>
            <div className="subhero_content">
                <h1>식물별로 다른 관리방법<br></br>매번 식물을 떠나보내셨나요?<br></br><br></br>
                식물별 맞춤 환경 관리를 제공하는<br></br>그린메이트와 함께라면 해결할 수 있습니다</h1>
            </div>
            <video className="subhero_video" src="videos/subhero_video.mp4" type="video/mp4"
                loop muted playsInline autoPlay/>
        </>
    }


    return (
    <div id="subhero_id">
        <div className={inView ? "subhero subhero--zoom" : "subhero"} ref={ref}>
            {renderContent()}
        </div>
    </div>
    );
};

export default SubHero;