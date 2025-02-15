import React from 'react'
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="heroContainer">
                <h3 data-aos="fade-down">Hello I'm</h3>
                <h1>
                    <Typewriter options={{strings: ['Dilshan Gamage', 
                                                    'Software Engineer', 
                                                    'Specialized in AI', 
                                                    'Full-Stack Developer', 
                                                    'Enjoy your stay!'],
                                        autoStart: true,
                                        loop: true
                                    }}/>
                </h1>
                <p data-aos="fade-up">Hi, I'm Dilshan Gamage, an undergraduate Software Engineer specializing in AI and Full-Stack Development. I love building smart systems and creating smooth digital experiences. I'm always learning and exploring new technologies. Welcome to my portfolio—feel free to explore my work and connect. Enjoy your stay!</p>
                <button className='primaryBtn' data-aos="fade-down">Download CV</button>
            </div>
        </section>
    </>
  )
}
