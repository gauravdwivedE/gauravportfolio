import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Route, Routes, useLocation } from "react-router-dom"; // add useLocation
import Home from './pages/Home';
import Nav from './components/Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import theme from './hooks/theme';

const App = () => {
  const bodyRef = useRef(null);
  const location = useLocation(); // get current location
  const {setableTheme} = theme()
  console.log();
  
  useEffect(() => {
    gsap.fromTo(
      bodyRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }
    );
  }, [location.pathname, setableTheme]); // run effect on every route change

  return (
    <div className={`${setableTheme =='dark' ?"bg-black text-white" : "bg-white text-black"}`}>
      <div ref={bodyRef} className={`min-h-screen w-full ${setableTheme =='dark' ?"bg-black text-white" : "bg-white text-black"}`}>
        <div className="main h-screen w-full fixed top-0">
          <div
            className="grid h-full z-1"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='94' height='90'%3E%3Crect width='100' height='100' fill='transparent' /%3E%3Crect x='0%' width='0.8'  height='100%' fill='rgb(55, 65, 81)' /%3E%3Crect y='0%' width='100%' height='1' fill='rgb(55, 65, 81)' /%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="relative ">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
