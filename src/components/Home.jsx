import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/resume.pdf';
import hero from './Data/hero.json';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Welcome to my profile', 'My name is Neeraj Vishwakarma', 'I am a Front-end Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    
    // Initialize Typed.js and attach to the ref's current value
    const typed = new Typed(typedRef.current, options);

    // Cleanup function
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id='home'>
        <div className="left"
        data-aos="fade-up-right"
     data-aos-duration='1000'
        
        >
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">
            Download Resume
          </a>
        </div>

        <div className="right">
          <div className="img" data-aos="fade-up-left"
     data-aos-duration='1000'>
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
