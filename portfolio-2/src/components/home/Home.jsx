import React from 'react'
import { Hero } from './Hero'
import { About } from '../pages/About'
import { Skills } from '../pages/Skills'
import { Contact } from '../pages/Contact'

export const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      
    </>
  )
}
