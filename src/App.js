import './App.css';
import hero_image from "./assets/main.png";
import bslider_image1 from "./assets/bslider-01.png"
import bslider_image2 from "./assets/bslider-02.png"
import bslider_image3 from "./assets/bslider-03.png"
import bslider_image4 from "./assets/bslider-04.png"
import slide_image1 from "./assets/slider-01.png";
import slide_image2 from "./assets/slider-02.png";
import Hero from "./components/Hero";
import SubHero from "./components/SubHero";
import BSlider from "./components/BSlider";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const navbarLinks = [
  {url:"#", title:"Home"},
  {url:"#bslider_i", title:"Why"},
  {url:"#slider1", title:"Product"},
  {url:"#slider2", title:"Service"},
  {url:"#slider3", title:"Subscribe"}
]

const contentSrc = [
  {title:"온도", src:bslider_image1, content:"식물이 생장하는 데에 적당한 온도는 식물마다 다르므로\n각 식물에 적정한 온도를 유지하는 게 중요해요\n"},
  {title:"습도", src:bslider_image2, content:"건조해지기 쉬운 실내 환경에서는 식물에 병충해가 발생하기 쉬워요\n특히 일부 난류 식물은 수분 및 양분 흡수를 위해 공기 중 습도를 80% 이상 유지해야 해요"},
  {title:"조도", src:bslider_image3, content:"빛의 밝기는 식물의 생장에 영향을 미치며\n음지식물과 양지식물에 따라 필요로 하는 조도가 다르니 주의해야 해요"},
  {title:"토양수분", src:bslider_image4, content:"토양은 뿌리를 지지하고 양분과 수분의 흡수를 돕는 중요한 역할을 하기에\n각 식물에게 적절한 습도를 유지하는 것은 매우 중요해요"}
]

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <div className="content">
        <Hero imgSrc={hero_image}/>
        <SubHero/>
        <BSlider
          contentSrc={contentSrc}
          page_num = {1}
        />
        <Slider imageSrc={slide_image1}
        title={"쉬운 식물별 맞춤 환경 관리"}
        subtitle={
          "IoT를 활용하여 식물별로\n최적의 기상환경을 측정하여 개선할 점을 조언해줍니다"
        }
        page_num = {2}
        />
        <Slider imageSrc={slide_image2}
        title={"식물별 관리 기록"}
        subtitle={
          "어떻게 식물에게 관리를 해줬는지,\n반응이 어땠는지를 기록합니다\n측정한 기록을 열람할 수 있어\n더욱 꼼꼼하게 관리할 수 있어요"
        }
        page_num = {3}
        />
        <Slider
        title={"사전예약하고 그린메이트의 테스터가 되어보세요"}
        subtitle={
          "사전예약하기"
        }
        page_num = {4}
        />
      </div>
      <Footer fcontent={"만든 사람들     |     회사소개 & IR미팅 요청\n\ncopyright (주) PEPL 2023"}/>
    </div>
  );
}

export default App;
