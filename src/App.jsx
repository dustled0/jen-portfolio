import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import StatsCounter from "./components/StatsCounter";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import CanvaGallery from "./components/CanvaGallery";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import FloatingContact from "./components/FloatingContact";
import ScrollProgress from "./components/ScrollProgress";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <StatsCounter />
        <Experience />
        <Services />
        <Portfolio />
        <CanvaGallery />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </>
  );
}

export default App;
