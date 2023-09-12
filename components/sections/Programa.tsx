import Link from 'next/link'
import React from 'react'

const Programa = () => {
  return (
    <>

        <div className="contenedor w-full gradient-bg p-[5rem] rounded-[20px]">
            <div className="programa-title lg:ml-[5rem] lg:mb-[2rem]">
                <h2 className="text-[36px] lg:text-[48px] uppercase font-bold">Programa</h2>
                <p className='text-[12px] lg:text-[16px]'>Duración: 16 semanas (480 horas)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start justify-start">
                <div className="unidad-1 flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                        <img src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1688054309/CodeHacker/Logo_b8dza1.png" alt="" className="w-[80px]" />
                        <h3 className='text-[36px] font-bold'>Unidad 1</h3>
                    </div>
                        <ul>
                            <li><Link href="#">Figma</Link></li>
                            <li><Link href="#">HTML5</Link></li>
                            <li><Link href="#">CSS3</Link></li>
                            <li><Link href="#">Git / Github</Link></li>
                            <li><Link href="#">Chat GPT</Link></li>
                            <li><Link href="#">Linked In</Link></li>
                        </ul>
                </div>
                <div className="unidad-1 flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                        <img src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1688054309/CodeHacker/Logo_b8dza1.png" alt="" className="w-[80px]" />
                        <h3 className='text-[36px] font-bold'>Unidad 2</h3>
                    </div>
                        <ul>
                            <li><Link href="#">Flex Box y CSS Grid</Link></li>
                            <li><Link href="#">Tailwind CSS</Link></li>
                            <li><Link href="#">Terminal (Linea de comandos)</Link></li>
                            <li><Link href="#">Javascript</Link></li>
                            <li><Link href="#">The DOM</Link></li>
                        </ul>
                </div>
                <div className="unidad-1 flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                        <img src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1688054309/CodeHacker/Logo_b8dza1.png" alt="" className="w-[80px]" />
                        <h3 className='text-[36px] font-bold'>Unidad 3</h3>
                    </div>
                        <ul>
                            <li><Link href="#">React APPs:</Link></li>
                            <li><Link href="#">Movie APP</Link></li>
                            <li><Link href="#">Todo List</Link></li>
                            <li><Link href="#">Restaurant Landing Page</Link></li>
                            <li><Link href="#">Youtube Clone</Link></li>
                            <li><Link href="#">Spotify Clone</Link></li>
                            <li><Link href="#">Portfolio 3D</Link></li>
                        </ul>
                </div>
                <div className="unidad-1 flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                        <img src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1688054309/CodeHacker/Logo_b8dza1.png" alt="" className="w-[80px]" />
                        <h3 className='text-[36px] font-bold'>Unidad 4</h3>
                    </div>
                        <ul>
                            <li><Link href="#">NextJS Full Stack APPs:</Link></li>
                            <li><Link href="#">Prompt Sharing</Link></li>
                            <li><Link href="#">Car Hub</Link></li>
                            <li><Link href="#">Twitter Clone</Link></li>
                            <li><Link href="#">Blog</Link></li>
                        </ul>
                </div>
            </div>

        </div>

        </>
  )
}

export default Programa