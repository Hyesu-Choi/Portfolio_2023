import "./App.css";
import "./reset.css";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import MyWorks from "./components/MyWorks/MyWorks";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <MyWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
