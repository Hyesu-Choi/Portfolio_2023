import "./App.css";
import "./reset.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MyWorks from "./components/MyWorks/MyWorks";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";

function App() {
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
