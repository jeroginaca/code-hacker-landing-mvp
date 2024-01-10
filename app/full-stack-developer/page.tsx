import { Navbar, Techs } from '@/components/component'
import HeroFullStack from '@/components/component/HeroFullStack'
import TechsWebDesign from '@/components/component/TechsWebDesign'
import { Contact2, Footer, Programa } from '@/components/sections'
import React from 'react'

const page = () => {
  return (
    <div className="">
      <Navbar />
      
        <HeroFullStack />
        <TechsWebDesign />
      <Programa />

      <Contact2 />
      <Footer />
    </div>
  )
}

export default page