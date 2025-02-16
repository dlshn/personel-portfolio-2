import React from 'react'
import { Heading } from '../common/Heading'
import { skill } from '../data/Skill_Data'

export const Skills = () => {
  return (
    <>
    <section className="skills">
        <div className="container">
            <Heading title="My Skills" data-aos="fade-down"/>
            <div className="content">
                {skill.map((item,i)=>{
                    return (
                        <div className='box' key={i} data-aos="flip-left">
                            <i>{item.icon}</i>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </div>
                    );
                }
                )}
            </div>
        </div>
    </section>
    <hr data-aos="fade-down"/>
    </>
  )
}
