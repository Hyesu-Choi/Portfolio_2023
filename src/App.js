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

  // // scroll up 버튼 보이기
  // function scrollUp() {
  //   const scrollUp = document.getElementById("scroll-up");
  //   if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  //   else scrollUp.classList.remove("show-scroll");
  // }
  // window.addEventListener("scroll", scrollUp);

  // 제이쿼리로 처리한 script. js로 처리할것!!
  // 1. progress bar - circle로 처리된 부분..라이브러리 사용했었음. 리액트 라이브러리 찾아볼것
  // 2. 모바일 영역 메뉴 토글 처리.

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
