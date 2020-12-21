import React from 'react';

function About() {

    return (
        <section>
            <h2>About Me</h2>

            <img 
                src={require(`../../assets/images/profile-pic.png`).default}
                alt='Profile' 
                className="profile-image"
            />
            <p>I grew up with a vision of working with computers. What started with a desire to make video games expanded into wanting to design and develop software and web applications. With a 2-year degree in Computer Science and a 4-year degree in Information Systems, I was able to find areas to specialize in and use in my career path moving forward. I currently manage a team of software developers, while pursuing entrepreneurship in multiple fields. Check out some of the work that I have done on my Portfolio page. </p>
            <p>Outside of work, I am always trying to expand my knowledge of different programming languages, software, and new technologies coming to market. I am the type of person that is constantly looking for the next project to complete. I love maintaining productivity in my life, whether that is staying busy at my job or completing objectives at home. I know that there will always be more for me to learn and it makes the thought of what may come down the road very exciting. </p>
        </section>
    );
}

export default About;