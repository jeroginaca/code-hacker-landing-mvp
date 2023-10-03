import Image from 'next/image'
import React from 'react'
import { PaymentCard } from '../component'

const Payment = () => {
  return (
    <section id="planes" className="pt-nav">

    <div className="contenedor ">
      <div className="flex flex-col justify-center items-center mt-24">
          <p className="gradient-subtitle font-semibold ">Y ahora si la parte de</p>
          <h2 className='mt-[10px] mb-[12px] text-[28px] md:text-[36px] font-bold '>PLANES DE PAGOS</h2>
          <p>Elige el que más se adecue a tus necesidades.</p>
      </div>
      <div>

      <div
          className="freebie w-full h-auto shadow-lg rounded-[33px] md:w-[700px] mx-auto mt-8 flex flex-col items-center justify-center p-12 "
        >
          <div className="flex flex-col justify-center items-center ">
            
              <Image 
                      src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
                      width={90}
                      height={90}
                      alt="logo"
                      className=""
              />
            
              <h3 className='text-[36px] font-bold text-white'>Promo Lanzamiento</h3>
          </div>

          <p className=' text-white'>Pago único de <b>500€</b> (+IVA)
</p>
                        
          <p className="mt-4 gradient-subtitle font-semibold ">Más Info</p>
        </div>

        {/* <PaymentCard /> */}
        
      </div>
    </div>
    </section>

  )
}

export default Payment