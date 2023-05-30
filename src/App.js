import "./App.css";
import "./reset.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MyWorks from "./components/MyWorks/MyWorks";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import TypingEffect from "./components/TypingEffect/TypingEffect";
import ScrollUp from "./components/ScrollUp/ScrollUp";

function App() {
  //script part
  // 스크롤시 헤더 색상 변경
  // function scrollHeader() {
  //   const header = document.getElementById("header");
  //   if (this.scrollY >= 70) header.classList.add("scroll-header");
  //   else header.classList.remove("scroll-header");
  // }
  // window.addEventListener("scroll", scrollHeader);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <MyWorks />
      <Contact />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
