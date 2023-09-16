import React from 'react'
import { Conviertete, FAQs, FooterComponent } from '../component'

const Footer = () => {
  return (
    <div className='bg-[#06062B] flex flex-col justify-center items-center'>
      <FAQs/>
      <Conviertete />
      <FooterComponent/>
    </div>
  )
}

export default Footer