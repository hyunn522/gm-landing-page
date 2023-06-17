import React from 'react';
import "./Slider.css";
import { useInView } from 'react-intersection-observer';

const Slider = ({imageSrc, title, subtitle, page_num}) => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.3,
      });

    const renderContent = () => {

        if (page_num === 2) {
            return <>
            <img src={imageSrc} id="slider_image1" />
            <div className="slider_content" id="slider_content1">
                <h4 className="slider_top">───────────────────</h4>
                <h1 className="slider_title">{title}</h1>
                <p className="slider_subtitle">{subtitle}</p>
            </div>
            </>
        }else if(page_num === 3){
            return <>
            <div className="slider_content" id="slider_content2">
                <h4 className="slider_top">───────────────────</h4>
                <h1 className="slider_title">{title}</h1>
                <p className="slider_subtitle">{subtitle}</p>
            </div>
            <img src={imageSrc} id="slider_image2" />
            </>
        }else if(page_num === 4){
            return <>
            <div className="slider_content" id="slider_content3">
                <h1 className="slider_title" id="button_title">{title}</h1>
                <button className="slider_button" onClick={() =>
                    window.open("https://docs.google.com/forms/d/1CiKZkLHE9ZmsK2Zuh_TshB6Ss0xseRblvWkF-YK3uyQ/edit", '_blank')}>
                    사전예약하기
                </button>
            </div>
            </>
        }
    };



  return (
    <div id={"slider"+(page_num-1)}>
        <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
            {renderContent()}
        </div>
    </div>
  );
};

export default Slider;
