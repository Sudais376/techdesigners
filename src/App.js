import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5, // Smoothness duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smooth: true, // Enable smooth scroll
      direction: 'vertical', // Scroll direction (horizontal/vertical)
    });

    // Animation frame loop for Lenis
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <div className=" relative bg-gradient-to-r from-customPurpleStart to-customPurpleEnd min-h-screen text-white max-w-[2400px] mx-auto">
        {/* Your content goes here */}
        <div className=" absolute w-full h-full bg-gradient-to-r from-[#26386b] to-[#431953] opacity-60 "></div>

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
