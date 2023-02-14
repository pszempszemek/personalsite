import { createBrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./pages/About/About";
import Contact from "./pages/Contact.tsx/Contact";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import { BrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeroSection />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />}></Route>
          <Route path={"*"} element={<Error />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
