import "./App.css";
import "./reset.css";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import MyWorks from "./components/MyWorks/MyWorks";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import HomeBg from "./assets/home-bg.jpg";
import Cloud1 from "./assets/cloud1.png";
import Cloud2 from "./assets/cloud2.png";
import Cloud3 from "./assets/cloud3.png";
import Cocktailer from "./assets/cocktailer.jpg";
import Apperal from "./assets/apperal.jpg";
import Yoga from "./assets/Yoga.jpg";
import Twg from "./assets/twg.jpg";
import TypingEffect from "./components/TypingEffect/TypingEffect";

import { BiPhone, BiVerticalCenter } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";

function App() {
  //script part
  // 스크롤시 헤더 색상 변경
  // function scrollHeader() {
  //   const header = document.getElementById("header");
  //   if (this.scrollY >= 70) header.classList.add("scroll-header");
  //   else header.classList.remove("scroll-header");
  // }
  // window.addEventListener("scroll", scrollHeader);

  // // HOME 타이핑커서 이펙트
  // const content =
  //   "안녕하세요, 프론트엔드 개발자 / 퍼블리셔 최혜수 입니다. \n Welcome to my Portfolio.";
  // const text = document.querySelector(".text");
  // let i = 0;

  // function sleep(delay) {
  //   // 텍스트 다 입력 후, 조금 쉬었다 지우고 다시 시작하는 함수
  //   const start = new Date().getTime();
  //   while (new Date().getTime() < start + delay);
  // }

  // function typing() {
  //   let txt = content[i++];
  //   text.innerHTML += txt === "\n" ? "<br/>" : txt;
  //   if (i > content.length) {
  //     text.textContent = "";
  //     i = 0;
  //     sleep(3000);
  //   }
  // }
  // setInterval(typing, 200);

  // // scroll up 버튼 보이기
  // function scrollUp() {
  //   const scrollUp = document.getElementById("scroll-up");
  //   if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  //   else scrollUp.classList.remove("show-scroll");
  // }
  // window.addEventListener("scroll", scrollUp);

  // // 스크롤시 헤더에 해당 섹션 active
  // const sections = document.querySelectorAll("section[id]");
  // function scrollActive() {
  //   const scrollY = window.pageYOffset;
  //   sections.forEach((current) => {
  //     const sectionHeight = current.offsetHeight,
  //       sectionTop = current.offsetTop - 250,
  //       sectionId = current.getAttribute("id");
  //     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  //       document
  //         .querySelector(".nav a[href*=" + sectionId + "]")
  //         .classList.add("active-link");
  //     } else {
  //       document
  //         .querySelector(".nav a[href*=" + sectionId + "]")
  //         .classList.remove("active-link");
  //     }
  //   });
  // }
  // window.addEventListener("scroll", scrollActive);

  // 제이쿼리로 처리한 script. js로 처리할것!!
  // 1. progress bar - circle로 처리된 부분..라이브러리 사용했었음. 리액트 라이브러리 찾아볼것
  // 2. 모바일 영역 메뉴 토글 처리.

  // $(document).ready(function () {
  //   let options = {
  //     startAngle: -1.55,
  //     size: 150,
  //     value: 0.95,
  //     fill: { gradient: ["#a445b2", "#fa4299"] },
  //   };
  //   $(".circle .bar")
  //     .circleProgress(options)
  //     .on("circle-animation-progress", function (event, progress, stepValue) {
  //       $(this)
  //         .parent()
  //         .find("span")
  //         .text(String(stepValue.toFixed(2).substr(2)) + "%");
  //     });
  //   $(".css .bar").circleProgress({
  //     value: 0.9,
  //   });
  //   $(".js .bar").circleProgress({
  //     value: 0.75,
  //   });
  //   $(".ps .bar").circleProgress({
  //     value: 0.65,
  //   });

  //   /* 모바일 영역 메뉴 토글 */
  //   $(".menu_toggle").on("click", function () {
  //     $(this).toggleClass("open");
  //     $(".nav").toggleClass("open");
  //   });
  //   $(".nav_link").on("click", function () {
  //     $(".menu_toggle").removeClass("open");
  //     $(".nav").removeClass("open");
  //   });
  // });

  return (
    <div className="App">
      <header id="header">
        <ul className="nav" id="nav">
          <li>
            <a href="#home" className="nav-link active-link">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#works" className="nav-link">
              MY WORKS
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              CONTACT
            </a>
          </li>
        </ul>

        <div className="menu_toggle">
          <div className="bar half top"></div>
          <div className="bar"></div>
          <div className="bar half bottom"></div>
        </div>
      </header>

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
          <span className="text"></span>
          <span className="blink">|</span>
          <TypingEffect
            text="안녕하세요, 프론트엔드 개발 / 퍼블리셔 최혜수 입니다. Welcome to my Portfolio."
            speed={300}
          />
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
            href="https://blog.naver.com/hs1263"
            target="_blank"
            className="blog"
          ></a>
        </div>
      </div>

      <div id="about" className="about section">
        <div className="about-me-box">
          <h2>ABOUT ME</h2>
          <div className="about-me">
            <div className="emoji"></div>
            <div className="about-text">
              <p>
                안녕하세요 프론트엔드 개발 / 퍼블리셔 최혜수입니다. <br />
                HTML의 구조를 잘 이해하고 있으며, 웹 접근성과 웹표준에 맞는
                마크업을 구현하고 있습니다. <br />
                디자인의 의도에 맞는 CSS를 구현하며, JavaScript, jQury 문법을
                이해하고 있습니다.
              </p>
              <button className="button resume-down-button">
                <a download="" href="./assets/_2023.pdf">
                  이력서 보기<span>→</span>
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* 스킬 : html, css, js, jquery, react */}
        <div className="about-skill-box">
          <h2>MY SKILLS</h2>

          <div className="skills-wrapper">
            <div className="card">
              <div className="circle">
                <div className="bar"></div>
                <div className="box">
                  <span></span>
                </div>
              </div>
              <div className="text">HTML</div>
            </div>
            <div className="card css">
              <div className="circle">
                <div className="bar"></div>
                <div className="box">
                  <span></span>
                </div>
              </div>
              <div className="text">CSS</div>
            </div>
            <div className="card js">
              <div className="circle">
                <div className="bar"></div>
                <div className="box">
                  <span></span>
                </div>
              </div>
              <div className="text">Javascript / jQuery</div>
            </div>
            <div className="card ps">
              <div className="circle">
                <div className="bar"></div>
                <div className="box">
                  <span></span>
                </div>
              </div>
              <div className="text">Photoshop / Illustrator</div>
            </div>
          </div>
        </div>
      </div>

      <div id="works" className="works section">
        <div className="work-container">
          <div className="work-item">
            <div className="work-img">
              <img src={Cocktailer} alt="" />
            </div>

            <div className="work-description">
              <h1>01</h1>
              <h2>Responsive Website</h2>
              <h3>COCKTAILER</h3>
              <h4>기여도</h4>
              <p>기획 / 디자인 / 퍼블리싱 팀 프로젝트</p>
              <h4>사용 스킬</h4>
              <p>Photoshop, jQuery, JS, flexslider</p>
              <h4>개발 페이지</h4>
              <p>성인인증창, 메인, 서브페이지</p>
              <h4>제작 기간</h4>
              <p>1주 이내</p>
              <button className="button">
                <a href="https://hyesu-choi.github.io/Cocktailer/">
                  사이트 보기
                </a>
              </button>
              <button className="button">
                <a href="https://github.com/Hyesu-Choi/Cocktailer">
                  작업코드 보기
                </a>
              </button>
            </div>
          </div>

          <div className="work-item">
            <div className="work-img">
              <img src={Apperal} alt="" />
            </div>

            <div className="work-description">
              <h1>02</h1>
              <h2>Desktop Website</h2>
              <h3>Apparel</h3>
              <h4>기여도</h4>
              <p>기획 / 퍼블리싱 프로젝트</p>
              <h4>사용 스킬</h4>
              <p>jQuery, js, ps</p>
              <h4>개발 페이지</h4>
              <p>메인 페이지</p>
              <h4>제작 기간</h4>
              <p>1주 이내</p>
              <button className="button">
                <a href="https://hyesu-choi.github.io/Apparel/">사이트 보기</a>
              </button>
              <button className="button">
                <a href="https://github.com/Hyesu-Choi/Apparel">
                  작업코드 보기
                </a>
              </button>
            </div>
          </div>

          <div className="work-item">
            <div className="work-img">
              <img src={Twg} alt="" />
            </div>

            <div className="work-description">
              <h1>03</h1>
              <h2>Responsive Website</h2>
              <h3>TWG</h3>
              <h4>기여도</h4>
              <p>기획 / 퍼블리싱 프로젝트</p>
              <h4>사용 스킬</h4>
              <p>jQuery</p>
              <h4>개발 페이지</h4>
              <p>메인 페이지</p>
              <h4>제작 기간</h4>
              <p>1주 이내</p>
              <button className="button">
                <a href="https://hyesu-choi.github.io/TWG/">사이트 보기</a>
              </button>
              <button className="button">
                <a href="https://github.com/Hyesu-Choi/TWG">작업코드 보기</a>
              </button>
            </div>
          </div>

          <div className="work-item">
            <div className="work-img">
              <img src={Yoga} alt="" />
            </div>

            <div className="work-description">
              <h1>04</h1>
              <h2>PC Website</h2>
              <h3>Yoga</h3>
              <h4>기여도</h4>
              <p>퍼블리싱 프로젝트</p>
              <h4>사용 스킬</h4>
              <p>Js</p>
              <h4>개발 페이지</h4>
              <p>메인 페이지</p>
              <h4>제작 기간</h4>
              <p>1주 이내</p>
              <button className="button">
                <a href="https://hyesu-choi.github.io/Yoga/">사이트 보기</a>
              </button>
              <button className="button">
                <a href="https://github.com/Hyesu-Choi/Yoga">작업코드 보기</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="contact section">
        <h1>CONTACT ME</h1>
        <h3>제 포트폴리오를 봐주셔서 감사합니다.</h3>
        <h3>하단의 연락처로 연락주시면 확인 후 연락드리겠습니다.</h3>
        <p>연락처 :</p>
        <p>
          <BiPhone style={{ verticalAlign: "middle", marginRight: "5px" }} />
          010-3922-0580
        </p>
        <p>
          <BiMailSend style={{ verticalAlign: "middle", marginRight: "5px" }} />
          hs1263@naver.com
        </p>
      </div>

      <div className="footer">
        <p>COPYRIGHT ‌CHOI HYESU © 2022. ALL RIGHTS RESERVED.</p>
      </div>

      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  );
}

export default App;
