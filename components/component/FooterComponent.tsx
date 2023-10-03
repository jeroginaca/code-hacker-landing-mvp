import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterComponent = () => {
  return (
   <div className="contenedor w-full pb-24">
    <footer className="flex flex-col text-black-100">
          <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image 
                src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694868306/logo-full_rr2nl7.png"
                width={300}
                height={119}
                alt='logo'
              />
              <p className="text-base text-white/40 ml-12">
                   2023 <br /> Code Hacker Academy &copy;
              </p>
            </div>

            <div className="footer__links">
            {footerLinks.map((link) => (
                <div className="footer__link" key={link.title}>
                      <h3 className="font-bold text-white">{link.title}</h3>
                      {link.links.map((item) => (
                        <Link key={item.title} href={item.url} className="text-gray-500">
                          {item.title}
                        </Link>
                      ))}
                </div>
            ))}
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100/10 text-white/40 sm:px-16 px-6 py-10">
            <p>2023 Carhub. CodeHacker Academy</p>
            <div className="footer__copyrights-link">
                <Link href="/" className="text-gray-500">
                    Política de Privacidad
                </Link>
                <Link href="/" className="text-gray-500">
                    Terminos de Uso
                </Link>
            </div>
        </div>
   </footer>
    {/* <div className=" flex flex-col md:flex-row justify-between w-full items-start">
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
            <p className="font-semibold text-white">Redes</p>
            <ul>
              <li className="text-white font-extralight">
                Instagram
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Contacto</p>
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

        </div> */}
        </div>
  )
}

export default FooterComponent