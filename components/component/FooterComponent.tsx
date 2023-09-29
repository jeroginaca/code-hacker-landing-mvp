import Image from 'next/image'
import React from 'react'

const FooterComponent = () => {
  return (
   <div className="contenedor w-full pb-24">
    <div className=" flex flex-col md:flex-row justify-between w-full items-start">
        <div className=" flex flex-col items-center justify-center">
          <Image 
            src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694868306/logo-full_rr2nl7.png"
            width={300}
            height={119}
            alt='logo'
          />
          <p className="text-white">Una nueva forma de estudiar Full Stack Developer</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <p className="font-semibold text-white">Usefull Links</p>
            <ul>
              <li className="text-white font-extralight">
                Algo
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Usefull Links</p>
            <ul>
              <li className="text-white font-extralight">
                Algo
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Usefull Links</p>
            <ul>
              <li className="text-white font-extralight">
                Algo
              </li>
            </ul>
          </div>
        </div>

        
        </div>
        <div className="h-[1px] w-[90%] mx-auto bg-white/50 my-6"/>

        <div className=" flex flex-col md:flex-row justify-between w-full items-start">
          <p className="text-white/70">
            CodeHacker Academy 2023
          </p>
          <p className="text-white/70">
            Redes
          </p>

        </div>
        </div>
  )
}

export default FooterComponent