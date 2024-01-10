import Image from 'next/image'

const HeroFullStack = () => {
  return (
    <div>
        <div className="hero-content contenedor pt-32 md:pt-14">
            <div className="flex flex-col md:flex-row h-[100vh] w-[100%]">              
                <div className="w-full md:w-1/2 lg:-mt-8 mt-0 pl-12 flex flex-col justify-center items-start">
                    <h1 className="title font-bold leading-[1.1] -ml-12 md:ml-0">
                        <span className="text-[34px] md:text-[42px] lg:text-[52px]">Curso Gratis de </span>
                        <br />
                        <span className="gradient-title-2 text-[48px] md:text-[64px] lg:text-[96px]">Web Design</span>
                        <br />
                        <span className="text-[34px] md:text-[42px] lg:text-[52px]">Para Principiantes</span>
                    </h1>
                    <Image 
                        src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1697116864/Iconos_h1pqlb.png"
                        width={324}
                        height={75}
                        alt='img'
                        className='-ml-20 md:-ml-9 mt-2'
                    />
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center ">
                   
                    <Image 
                        src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1697452271/TECHS_yfdcs0.png"
                        width={605}
                        height={605}
                        alt='img'
                    />
                    
                </div>
            </div>
        </div>
    </div>
    // <div>
    //     <div className="hero-content contenedor pt-32 md:pt-14">
    //         <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh] w-[100%]">              
    //             <div className=" lg:-mt-8 mt-0 pl-12 flex flex-col justify-center items-start">
    //                 <h1 className="title font-bold leading-[1.1] -ml-12 md:ml-0">
    //                     <span className="text-[34px] md:text-[42px] lg:text-[52px]">Curso Gratis de </span>
    //                     <br />
    //                     <span className="gradient-title-2 text-[48px] md:text-[64px] lg:text-[96px]">Web Design</span>
    //                     <br />
    //                     <span className="text-[34px] md:text-[42px] lg:text-[52px]">Para Principiantes</span>
    //                 </h1>
    //                 <Image 
    //                     src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1697116864/Iconos_h1pqlb.png"
    //                     width={324}
    //                     height={75}
    //                     alt='img'
    //                     className='-ml-20 md:-ml-9 mt-2'
    //                 />
    //             </div>
    //             <div className="flex justify-center items-center w-full ">
                   
    //                 <Image 
    //                     src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1697452271/TECHS_yfdcs0.png"
    //                     layout='fill'
    //                     alt='img'
    //                 />
                    
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default HeroFullStack