import React, {useState} from 'react';
import './Projects.css';

function Projects() {
    return (
        <>
    <section id="projects">
        <h1 className="header">PORTFOLIO</h1>
        <div className="cards-project" />
    </section>
    </>
    );
}

const projects = document.querySelector(".cards-project");

const loadData = () => {
    fetch('data.json')
    .then(response => response.json())
    .then((data) => {
        data.projects.forEach((project) => {
            const cardProject =
                `<div class="card-project">
                    <a href="${project.href}" target="_blank"><h2>${project.name}</h2></a>
                    <a href="${project.href}" target="_blank"><img src="${project.image}"></a>
                    <p>${project.text}</p>
                </div>`;
            projects.insertAdjacentHTML("beforeend", cardProject);
        });
    });
};

document.addEventListener("DOMContentLoaded", function() {
    loadData();
  });

export default Projects;