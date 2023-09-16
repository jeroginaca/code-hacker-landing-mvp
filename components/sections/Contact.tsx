import Image from 'next/image'
import React from 'react'
import { ContactForm } from '../component'

const Contact = () => {
  return (
    <div className="contact-image w-full h-[587px] mt-24 flex flex-col items-center justify-center">
        <div className=" shadow-lg rounded-lg p-24 bg-white flex flex-col justify-center items-center">
          <div className="flex justify-center items-center ">
                <Image 
                        src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                        width={50}
                        height={50}
                        alt="logo"
                />
                <h3 className='text-[36px] font-bold'>PONETE EN CONTACTO</h3>
            </div>
                <p className="text-center">
                Dejanos tus datos y te contactaremos <br/> para concretar una reunión
                </p>

                <ContactForm />
        </div>
    </div>
  )
}

export default Contact