import React from "react";
import TypingEffect from "../TypingEffect/TypingEffect";

import HomeBg from "../../assets/home-bg.jpg";
import Cloud1 from "../../assets/cloud1.png";
import Cloud2 from "../../assets/cloud2.png";
import Cloud3 from "../../assets/cloud3.png";

const Home = () => {
  return (
    <div id="home" className="home section">
      <img src={HomeBg} alt="Home-background" />
      <img src={Cloud1} className="cloud1" />
      <img src={Cloud2} className="cloud2" />
      <img src={Cloud3} className="cloud3" />
      <img src={Cloud1} className="cloud4" />
      <img src={Cloud2} className="cloud5" />
      <img src={Cloud3} className="cloud6" />

      {/* typing effect 부분 */}
      <div className="text_box">
        {/* <span className="text"></span> */}

        <TypingEffect
          text="안녕하세요, 프론트엔드 개발자 최혜수 입니다. Welcome to my Portfolio."
          speed={300}
        />
        <span className="blink">|</span>
      </div>

      <div id="mouse_body">
        <div id="mouse_wheel"></div>
      </div>

      <div className="social">
        <a
          href="https://github.com/Hyesu-Choi"
          target="_blank"
          className="github"
        ></a>
        <a
          href="https://velog.io/@hs_choi"
          target="_blank"
          className="blog"
        ></a>
      </div>
    </div>
  );
};

export default Home;
