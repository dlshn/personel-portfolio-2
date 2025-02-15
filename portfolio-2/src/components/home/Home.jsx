import React from 'react'
import { Hero } from './Hero'
import { About } from '../pages/About'
import { Skills } from './Skills'
import { Contact } from './Contact'

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
