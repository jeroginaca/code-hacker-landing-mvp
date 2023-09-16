import Image from 'next/image'
import React from 'react'

const Payment = () => {
  return (
    <div className="contenedor ">
      <div className="flex flex-col justify-center items-center mt-24">
              <p className="gradient-subtitle font-semibold ">Y ahora si la parte de</p>
              <h2 className='mt-[10px] mb-[12px] text-[28px] md:text-[36px] font-bold '>PLANES DE PAGOS</h2>
              <p>Elige el que más se adecue a tus necesidades.
</p>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center mt-10 gap-8">
        <div
          className="w-full h-auto shadow-lg rounded-[33px] md:w-[400px] flex flex-col items-start justify-center p-12 "
        >
          <div className="flex justify-center items-center ">
              <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={50}
                      height={50}
                      alt="logo"
              />
              <h3 className='text-[36px] font-bold'>Un Pago</h3>
          </div>

          <p className='ml-14'>Disfruta de un descuento exclusivo por abonar todo de un solo pago.</p>
                        
          <p className="mt-4 gradient-subtitle font-semibold ml-14">Más Info</p>
        </div>
        <div
          className="freebie w-full h-auto shadow-lg rounded-[33px] md:w-[400px] flex flex-col items-start justify-center p-12 "
        >
          <div className="flex flex-col justify-center items-center ">
            
              <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={70}
                      height={70}
                      alt="logo"
                      className="ml-24"
              />
            
              <h3 className='text-[36px] font-bold text-white'>En Cuotas</h3>
          </div>

          <p className=' text-white'>Puedes fragmentar el precio en hasta 24 cuotas, tu eliges cuantas quieres.
</p>
                        
          <p className="mt-4 gradient-subtitle font-semibold ">Más Info</p>
        </div>
        <div
          className="w-full h-auto shadow-lg rounded-[33px] md:w-[400px] flex flex-col items-start justify-center p-12 "
        >
          <div className="flex justify-center items-center ">
              <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={50}
                      height={50}
                      alt="logo"
              />
              <h3 className='text-[36px] font-bold'>Hacker Beca</h3>
          </div>

          <p className='ml-14'>Consiste en que primero estudias y cuando consigas trabajo empezas a pagar.</p>
                        
          <p className="mt-4 gradient-subtitle font-semibold ml-14">Más Info</p>
        </div>
        
      </div>
    </div>
  )
}

export default Payment