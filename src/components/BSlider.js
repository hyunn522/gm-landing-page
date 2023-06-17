import React, { useEffect, useState } from 'react';
import "./BSlider.css";
import { useInView } from 'react-intersection-observer';

const BSlider = ({contentSrc, page_num}) => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [imgClass, setImgClass] = useState(1);

    var num = 0;
    var listArr = [];
    var imgArr = [];
    var contentArr = [];

    //scroll함에 따라 view 나타내기
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.3
    });

    useEffect(() => {
        setTimeout(() => {
            setImgClass(0);
        },1000);
    }, [currentIndex])
    
      
    const renderContent = () => {

        return (
            <>
            <div className='bslider_p'>
                <h1 className='bslider_title'>식물을 키울 때 중요한 환경요인은<br></br>무엇이 있을까요?</h1>
                <div className='bslider_subtitle'>
                    <li className={ currentIndex == 1 ? "bslider_list bslider_list_clicked" : "bslider_list"} onClick={() => {setImgClass(1); setCurrentIndex(1)}}>{listArr[1]}</li>
                    <li className={ currentIndex == 2 ? "bslider_list bslider_list_clicked" : "bslider_list"} onClick={() => {setImgClass(2); setCurrentIndex(2);}}>{listArr[2]}</li>
                    <li className={ currentIndex == 3 ? "bslider_list bslider_list_clicked" : "bslider_list"} onClick={() => {setImgClass(3); setCurrentIndex(3);}}>{listArr[3]}</li>
                    <li className={ currentIndex == 4 ? "bslider_list bslider_list_clicked" : "bslider_list"} onClick={() => {setImgClass(4); setCurrentIndex(4);}}>{listArr[4]}</li>
                </div>
                <div className='bslider_content'>
                    <h3 className='bslider_h3'>{contentArr[currentIndex]}</h3>
                </div>
            </div>
            <div className='bslider_item'>
                <img src={imgArr[currentIndex]} className={ imgClass ? 'bslider_img bslider_img-clicked'+imgClass : 'bslider_img'}/>
            </div>
            </>
        );
    };
    
    
    return (
        <div id="bslider_i">
            <div className={inView ? "bslider bslider--zoom" : "bslider"} ref={ref}>
                {contentSrc.map(item => {
                    num++;
                    listArr[num] = item.title;
                    imgArr[num] = item.src;
                    contentArr[num] = item.content;
                })}
                {renderContent()}
            </div>
        </div>
      );
};


export default BSlider;