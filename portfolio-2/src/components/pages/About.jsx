import React from 'react'
import { Heading } from '../common/Heading'

export const About = () => {
  return (
    <>
        <section className="about">
            <div className="container flex">
                <div className="left">
                    <img src="./me-img.png" alt="Dilshan-Gamage" data-aos="fade-down-right" />
                </div>

                <div className="right">
                    <Heading title='About Me'/>
                    <p data-aos="fade-down-left">
                        I'm Dilshan Gamage, a <b>Computer Science</b> undergraduate at the <b>University of Kelaniya</b>, specializing in <b>Artificial Intelligence</b>. I am passionate about AI, software development, and problem-solving. My journey involves building smart applications, exploring machine learning, and developing scalable full-stack solutions. I'm always eager to learn and innovate. 
                    </p>
                    <p data-aos="fade-down-left">
                        Born on September 17, 2000, I am a male living in Kelaniya. I attended <b>Suriyawewa National School</b> and am currently pursuing my degree with a focus on <b>AI and Full-Stack Development</b>.
                    </p>
                    <button data-aos="fade-down-left">Download CV</button>
                </div>



            </div> 
        </section>
        <hr data-aos="fade-down"/>
    </>
  )
}
