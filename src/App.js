import "./App.css";
import "./reset.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MyWorks from "./components/MyWorks/MyWorks";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import TypingEffect from "./components/TypingEffect/TypingEffect";

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
      <Header />
      <Home />
      <About />
      <MyWorks />
      <Contact />
      <Footer />

      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  );
}

export default App;
