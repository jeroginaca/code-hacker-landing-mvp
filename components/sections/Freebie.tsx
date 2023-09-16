import Image from 'next/image'
import React from 'react'

const Freebie = () => {
  return (
    <div className="w-full py-12 mt-10 freebie">
      <div className="contenedor">
      <div className="flex flex-col justify-center items-center">
              <h2 className=' mb-[1rem] text-[28px] md:text-[36px] font-bold text-white mt-4'>¿Quieres una <span className="gradient-title">prueba gratis?</span>
</h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div
          className=" w-full h-full flex flex-col items-start justify-center p-12 "
        >
          <p className="gradient-subtitle font-semibold ">Comienza hoy mismo</p>
              <h2 className='mt-[10px] mb-[1rem] text-[28px] md:text-[36px] font-bold text-white'>Curso Gratuito de Web Designer</h2>
          <p
            className="font-light text-[16px] leading-[210%] text-white"
          >
            Comienza desde cero construiremos tu primer Portfolio profesional.
          </p>
            <p className="font-bold pt-4 pb-2 text-white">
            Aprenderás sobre: 
            </p>
            <ul className="list-style-none text-white font-extralight">
            <li> 👉 Como armar la estructura de una web </li>
            <li>👉 Diseñarla en Figma   </li>
            <li>👉 Maquetearla en HTML y CSS    </li>
            <li>👉 Crear un repositorio con Git y Github   </li>
            <li>👉 Publicarla gratis en Github Pages </li>
            </ul>
            
            <p className="font-bold pt-4 pb-2 text-white">
            Incluye: 
            </p>
            
            <ul className="list-style-none text-white font-extralight">
            <li> 👉 4 Videos </li>
            <li>👉 Guía paso a paso   </li>
            </ul>

          <button className="cta-2 text-[20px] mt-[2rem] md:mt-[3rem] py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]">Comenzar</button>

        </div>
        
        <div
          className=" w-full h-full flex flex-col items-center justify-center mt-8 lg:mt-0 mb-2 lg:mb-0"
        >
          <Image
            src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694853771/curso_gratis_previa_ld7pvy.png"
            alt=""
            width={417}
            height={371}
          />

        </div>
      </div>
    </div>
    </div>
  )
}

export default Freebie