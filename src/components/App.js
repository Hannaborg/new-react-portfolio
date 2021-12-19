import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import About from './About.js';
import Projects from './Projects.js';
import Footer from './Footer.js';

let observer;

function App() {
  return (
    <Navbar/>,
    <About/>,
    <Projects/>,
    <Footer/>
  );
}

const animations = document.querySelectorAll(".anim");

// scroll animations
observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
          entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
      } else {
          entry.target.style.animation = 'none';
      }
  })
})

animations.forEach(animation => {
  observer.observe(animation);
})

export default App;
