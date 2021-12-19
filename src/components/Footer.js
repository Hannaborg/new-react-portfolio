import React, {useState} from 'react';
import './Footer.css';
import Projects from './Projects';

function Footer() {
    return (
    <>
    <section>
        <div className="tagembed-container instagram" style={{ width: "100%", height: "100%", overflow: "auto" }}>
            <div className="tagembed-socialwall" data-wall-id={19453} view-url="https://widget.tagembed.com/19453?view"/>
        </div>
        {/* footer */}
        <div className="footer anim" data-delay="0s" id="contact">
            <a>Get in touch</a>
            <br />
            <a href="mailto:hanna.r.borg@gmail.com" target="_blank">
            <i className="fas fa-at" />
            </a>
            <a href="https://github.com/Hannaborg" target="_blank">
            <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/hannaborg/" target="_blank">
            <i className="fab fa-linkedin-in" />
            </a>
        </div>
    </section>
    </>
    );
  }
  
  export default Footer;
  