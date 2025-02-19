import React from 'react'
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <> 
        <section className="hero">
            <div className="heroContainer">
                <h2 data-aos="fade-down">Hello I'm</h2>
                <h1>
                  <Typewriter 
                    options={{
                        strings: [
                            'Dilshan Gamage', 
                            'Software Engineer', 
                            'AI Specialist', 
                            'Full-Stack Developer', 
                            'Passionate About Machine Learning & UI/UX'
                        ],
                        autoStart: true,
                        loop: true
                    }} 
                  />

                </h1>
                <p data-aos="fade-up">Hi, I'm Dilshan Gamage, a passionate Computer Science undergraduate at the University of Kelaniya, specializing in Artificial Intelligence. I focus on Full-Stack Development, Machine Learning, and UI/UX design. I love building intelligent and scalable applications that solve real-world problems. Innovation and continuous learning drive me forward. Welcome to my portfolio—explore my work and feel free to connect!</p>
                
                <a href="https://github.com/dlshn" target="_blank" rel="noopener noreferrer">
                  <button className='primaryBtn' data-aos="fade-down">Explore My Work</button>
                </a>

            </div>
        </section>
        <hr data-aos="fade-down"/>
    </>
  )
}
