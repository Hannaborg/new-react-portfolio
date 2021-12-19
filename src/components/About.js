import React, {useState} from 'react';
import './About.css';

function About() {
    return (
        <>
        <section id="home">
        <img className="picture anim" data-delay="0s" src="./images/hanna.jpg" />
        <div className="padding-top">
            <h1 className="anim" data-delay="0.4s">
            FRONT-END DEVELOPER <br /> &amp; WEB DESIGNER
            </h1>
            <div className="small-container">
            <p className="anim" data-delay="0.6s">
                Founded a plantbased fast-casual restaurant with a vision to share a
                more sustainable lifestyle throughout the Nordics. After two years of
                building a brand &amp; community, I saw an opportunity in using
                technology to enable greater impact in my field. I retrained as a
                full-stack developer, and am currently looking for opportunities as a
                web designer &amp; developer.{" "}
            </p>
            <p className="anim" data-delay="0.8s">
                I code and develop clean, timeless design and user experience solutions
                for websites. I am striving for continous learning and will always push
                myself to reach best possible customer satisfaction. <br /> When I am
                not busy coding, I can be found skiing in the mountains, playing golf,
                cooking, or reading a good book.
                <br />
                <br />{" "}
                <a
                href="mailto:hanna.r.borg@gmail.com"
                target="_blank"
                className="anim"
                data-delay="1s"
                >
                Let's talk.
                </a>
            </p>
            </div>
        </div>
        </section>
        </>
    )
}

export default About;