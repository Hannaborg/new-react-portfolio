import React, {useState} from 'react';
import './Navbar.css';

function Navbar() {
    <>
    <nav className="navbar">
        <a href="#home" className="nav-branding">
        Hanna's Portfolio Site
        </a>
        <ul className="nav-menu">
            <li className="nav-item">
            <a href="#projects" className="nav-link">
            Projects
            </a>
            </li>
            <li className="nav-item">
            <a href="https://hannaborg.notion.site/Welcome-to-my-blog-that-s-right-dd0a97df712b47cca88101c98cbca2b9" className="nav-link">
            Blog
            </a>
            </li>
            <li className="nav-item">
            <a href="#about" className="nav-link">
            About
            </a>
            </li>
            <li className="nav-item">
            <a href="#contact" className="nav-link">
            Contact
            </a>
            </li>
        </ul>
        <div className="hamburger">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
        </div>
    </nav>
    </>
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

export default Navbar;