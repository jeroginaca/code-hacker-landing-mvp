"use client"

import Image from 'next/image'
import Link from 'next/link'
import { NavLinks, NavLinksResp } from '.'
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 750) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar flex justify-between items-center text-white fixed w-full md:py-1 pr-4 md:pr-0 md:px-[3rem] z-[10000] ${scrolling ? 'gradient-bg' : ''}`}>
        <Link href="/">
          <Image 
            src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
            width={80}
            height={80}
            alt="logo"
          />
        </Link>

        <NavLinks />

        <Link href="https://codehackeracademy.notion.site/Web-Designer-8c169f62d5ec4e8b857a9271d1515503?pvs=4" target="_blank" className="hidden md:flex text-[20px]  py-[12px] px-[30px] font-semibold tracking-[.10em]">Recursos Gratis</Link> 
         
        <NavLinksResp />
      </div>

    </>
  )
}

export default Navbar