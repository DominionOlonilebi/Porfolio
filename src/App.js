import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
