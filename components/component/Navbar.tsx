import Image from 'next/image'
import Link from 'next/link'
import { NavLinks, NavLinksResp } from '.'

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between items-center  z-10 text-white fixed w-[100%] pl-[0.5rem] pr-[1.7rem] md:px-[3rem] pt-[7px]">
        <Link href="/">
          <Image 
            src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
            width={95}
            height={95}
            alt="logo"
          />
        </Link>

        <NavLinks />

        <Link href="#contact"><button className="hidden md:flex text-[20px]  py-[12px] px-[30px] font-bold tracking-[.10em] rounded-[15px] bg-transparent">Contacto</button></Link> 
         
        <NavLinksResp />
      </div>

    </>
  )
}

export default Navbar