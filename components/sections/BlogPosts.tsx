import Image from 'next/image'
import React from 'react'

const BlogPosts = () => {
  return (
    <>
    <div className="contenedor">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
        <div
          className="md:col-span-3 w-full h-full flex flex-col items-start justify-center p-12 "
        >
          
              <p className="gradient-subtitle font-semibold ">Animate a dar un gran paso</p>
              <h2 className='mt-[10px] mb-[1rem] text-[28px] md:text-[36px] font-bold '>Comienza sin conocimientos y conviertete en un experto</h2>
          <p
            className="font-light text-[16px] opacity-70 leading-[210%]"
          >
            En CodeHacker comenzamos <span className="font-bold">desde cero</span>, y te damos toda lo que necesitas para conseguir un empleo bien pago y con proyección. Empieza tu carrera como <span className="font-bold">Full Stack Developer</span> hoy mismo.
          </p>
          <button className="cta-2 text-[20px] mt-[2rem] md:mt-[3rem] py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]">Consultar</button>
        </div>
        <div
          className="md:col-span-2  w-full h-full flex flex-col items-center justify-center p-12 "
        >
          <Image
            src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1688123225/CodeHacker/remote-meeting-man-working-from-home-during-coronavirus-covid-19-quarantine-remote-office-concept_pxvvvp.png"
            alt=""
            width={417}
            height={371}
          />
          
        </div>
        <div
          className="md:col-span-2  w-full h-full md:row-start-2 flex flex-col-reverse items-center justify-center  p-12 "
        >
          <Image
            src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1688123225/CodeHacker/woman-attending-online-class_w8iu2n.png"
            alt=""
            width={417}
            height={371}
          />
        </div>
        <div
          className="md:col-span-3 w-full h-full flex flex-col items-start justify-center p-12 "
        >
          
              <p className="gradient-subtitle font-semibold ">Podes contar con nosotros siempre</p>
              <h2 className='mt-[10px] mb-[1rem] text-[28px] md:text-[36px] font-bold '>Mentorias personalizadas 1 a 1 de por vida</h2>
          <p
            className="font-light text-[16px] opacity-70 leading-[210%]"
          >
            Te acompañamos durante tus estudios y también <span className="font-bold"> después de graduarte</span>, ya que asesoramos tu búsqueda de empleo y siempre podrás necesitar una mano.
          </p>
          <button className="cta-2 text-[20px] mt-[2rem] md:mt-[3rem] py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px]">Consultar</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default BlogPosts