import React from 'react';
import Project from '../Project';

function Portfolio() {

    const projects = [
        {
            filename: 'stock-tracker.PNG',
            title: 'Stock Tracker',
            link: 'https://utah-coding-bootcamp-project-1.github.io/stock-tracker/',
            gitHubLink: 'https://github.com/Utah-Coding-Bootcamp-Project-1/stock-tracker'
        },
        {
            filename: 'git-ticketing-system.PNG',
            title: 'Git Ticketing System',
            link: 'https://git-ticketing-system.herokuapp.com/',
            gitHubLink: 'https://github.com/BradCassityDev/git-ticketing-system'
        },
        {
            filename: 'note-taker.PNG',
            title: 'Note Taker',
            link: 'https://young-falls-24397.herokuapp.com/notes',
            gitHubLink: 'https://github.com/BradCassityDev/note-taker'
        },
        {
            filename: 'run-buddy.PNG',
            title: 'Run Buddy',
            link: 'https://bradcassitydev.github.io/run-buddy/',
            gitHubLink: 'https://github.com/BradCassityDev/run-buddy'
        },
        {
            filename: 'random-password-generator.PNG',
            title: 'Password Generator',
            link: 'https://bradcassitydev.github.io/random-password-generator/',
            gitHubLink: 'https://github.com/BradCassityDev/random-password-generator'
        },
        {
            filename: 'weather-dashboard.PNG',
            title: 'Weather Dashboard',
            link: 'https://bradcassitydev.github.io/weather-dashboard/',
            gitHubLink: 'https://github.com/BradCassityDev/weather-dashboard'
        }
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="wrapper">
                {projects.map((project) => (<Project project={project} key={project.title}/>))}
            </div>
        </section>
    );
}

export default Portfolio;