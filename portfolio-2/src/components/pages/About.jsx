import React from 'react'
import { Heading } from '../common/Heading'

export const About = () => {
  return (
    <>
        <section className="about">
            <div className="container flex">
                <div className="left">
                    <img src="./me-img.png" alt="" />
                </div>

                <div className="right">
                    <Heading title='About Me'/>
                    <p>I'm Dilshan Gamage, a Computer Science undergraduate at the University of Kelaniya, specializing in Artificial Intelligence. I am passionate about AI, software development, and problem-solving. My journey involves building smart applications, exploring machine learning, and developing scalable full-stack solutions. I'm always eager to learn and innovate. Welcome to my portfolio!</p>
                    <button>Download CV</button>
                </div>

            </div>
        </section>
    </>
  )
}
