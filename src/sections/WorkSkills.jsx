import React from 'react'
import { skills } from '../constants/constants'

export default function WorkSkills() {
  return (
    <div className='workskills'>
      <h2>My Work Skills</h2>
      <p>Development your website, a comprehensive guide to designing a website that converts visitors into customers in Flixta.</p>
      <div className='skillcont'>
        {
            skills.map((skill, index) => (
                <div className='skillcard' key={index}>
                    <img src={skill.icon} alt={skill.title} />
                    <p>{skill.title}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}
