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

                <div className="right" >
                    <Heading title='About Me'/>
                    <p data-aos="fade-down-left">I'm Dilshan Gamage, a Computer Science undergraduate at the University of Kelaniya, specializing in Artificial Intelligence. I am passionate about AI, software development, and problem-solving. My journey involves building smart applications, exploring machine learning, and developing scalable full-stack solutions. I'm always eager to learn and innovate. Welcome to my portfolio!</p>
                    <button data-aos="fade-down-left">Download CV</button>
                </div>

            </div> 
        </section>
        <hr data-aos="fade-down"/>
    </>
  )
}
