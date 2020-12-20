import React from 'react';
import Project from '../Project';

function Portfolio() {

    const projects = [
        {
            filename: 'project1.jpg',
            title: 'Project 1',
            link: 'google.com',
            gitHubLink: 'https://github.com/BradCassityDev/react-portfolio'
        },
        {
            filename: 'project2.jpg',
            title: 'Project 2',
            link: 'google.com',
            gitHubLink: 'https://github.com/BradCassityDev/react-portfolio'
        },
        {
            filename: 'project3.jpg',
            title: 'Project 3',
            link: 'google.com',
            gitHubLink: 'https://github.com/BradCassityDev/react-portfolio'
        },
        {
            filename: 'project4.jpg',
            title: 'Project 4',
            link: 'google.com',
            gitHubLink: 'https://github.com/BradCassityDev/react-portfolio'
        }
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            {projects.map((project) => (<Project project={project} key={project.title}/>))}
        </section>
    );
}

export default Portfolio;