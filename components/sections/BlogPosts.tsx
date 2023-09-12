import React from 'react'

const BlogPosts = () => {
  return (
    <>
    <div className="contenedor">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
      <div
        className="md:col-span-3 w-full h-full flex flex-col items-center justify-center p-12 "
      >
        
        <h4
          className="text-[38px] leading-[56px] tracking-[-1px] font-semibold  text-log-blue-dark"
        >
          Mejoras de rendimiento
        </h4>
        <p
          className="text-log-blue-dark  font-light text-[20px] opacity-70 leading-[28px] md:w-[70%] my-0 mx-[auto]"
        >
          Consigue
          <span className="font-bold">mejoras inmediatas para tu avatar</span>
          que te permitirán aumentar tu rendimiento en el campo de juego.
        </p>
      </div>
      <div
        className="md:col-span-2  w-full h-full flex flex-col items-center justify-center p-12 "
      >
        <img
          src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1688123225/CodeHacker/remote-meeting-man-working-from-home-during-coronavirus-covid-19-quarantine-remote-office-concept_pxvvvp.png"
          alt=""
          className="w-[417px]"
        />
        
      </div>
      <div
        className="md:col-span-2  w-full h-full md:row-start-2 flex flex-col items-center justify-center  p-12 "
      >
        <img
          src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1688123225/CodeHacker/woman-attending-online-class_w8iu2n.png"
          alt=""
          className="w-[417px]"
        />
   
      </div>
      <div
        className="md:col-span-3  w-full h-full md:row-start-2 flex flex-col items-center justify-center  p-12 "
      >
        
        <h4
          className="text-[38px] leading-[56px] tracking-[-1px] font-semibold  text-log-blue-dark"
        >
          Packs sorpresa
        </h4>
        <p
          className="text-log-blue-dark  font-light text-[20px] opacity-70 leading-[28px] md:w-[70%] my-0 mx-[auto]"
        >
          Crea un
          <span className="font-bold"
            >personaje único y conviértete en la leyenda</span
          >
          que siempre quisiste ser con nuestra amplia selección.
        </p>
      </div>
    </div>
    </div>
    </>
  )
}

export default BlogPosts