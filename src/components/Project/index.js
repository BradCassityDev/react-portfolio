import React from 'react';

function Project({project}) {
    const {filename, title, link, gitHubLink} = project;

    return (
        <div className="card bg-dark">
            <img 
                src={require(`../../assets/images/projects/${filename}.PNG`).default} 
                className="card-img-top" 
                alt={title} 
                key={title}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a href={link} className="btn primary-button" target="_blank">View Project</a>
            </div>
        </div>
    );
}

export default Project;