import React from 'react';

function Project({project}) {
    const {filename, title, link, gitHubLink} = project;

    return (
        <section>
            <p>{title}</p>
        </section>
    );
}

export default Project;