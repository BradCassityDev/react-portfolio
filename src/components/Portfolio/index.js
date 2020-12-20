import React from 'react';
import Project from '../Project';

function Portfolio() {

    const projects = [
        {
            filename: 'stock-tracker',
            title: 'Stock Tracker',
            link: 'https://utah-coding-bootcamp-project-1.github.io/stock-tracker/',
            gitHubLink: 'https://github.com/Utah-Coding-Bootcamp-Project-1/stock-tracker'
        },
        {
            filename: 'git-ticketing-system',
            title: 'Git Ticketing System',
            link: 'https://git-ticketing-system.herokuapp.com/',
            gitHubLink: 'https://github.com/BradCassityDev/git-ticketing-system'
        },
        {
            filename: 'run-buddy',
            title: 'Run Buddy',
            link: 'https://bradcassitydev.github.io/run-buddy/',
            gitHubLink: 'https://github.com/BradCassityDev/run-buddy'
        }
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="card-deck">
                {projects.map((project) => (<Project project={project} key={project.title}/>))}
            </div>
        </section>
    );
}

export default Portfolio;