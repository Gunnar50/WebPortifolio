"use client"
import Image from 'next/image'
import React from 'react'
import { HiArrowDown } from "react-icons/hi"
import { Link as ScrollLink } from "react-scroll/modules"

export default function HeroSection() {
  return (
    
    <section id="home">
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
            
            <div className="md:mt-2 md:w-1/2">
                <Image src="/profile.png" alt="" width={300} height={300} priority className="rounded-full shadow-2xl"/>
            </div>
            <div className="md:mt-2 md:w-3/5">
                <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl section-title">Hi, I&#39;m Gustavo!</h1>
                <p className="text-lg mt-4 mb-6 md:text-2xl">
                    I&#39;m a{" "}
                    <span className="font-semibold text-teal-600">
                    Cyber Security Graduate{" "}
                    </span>
                    with a passion for technology, coding and development - based in London, UK
                    <br></br>
                    {/* Currently working as 
                      <span className='font-bold'> Python</span>, 
                      <span className='font-bold'> MySQL</span> and 
                      <span className='font-bold'> Game Development</span> tutor. */}
                </p>
                <a href="/Gustavo_Passarella_CV_SE-2023.pdf" download className="text-neutral-100 font-semibold px-6 py-3 bg-teal-900 rounded shadow hover:bg-teal-700 transition">
                    Download CV
                </a>
            </div>
        </div>
         <div className="flex flex-row items-center text-center justify-center ">
            <ScrollLink
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            >
          <HiArrowDown size={35} className="animate-bounce scroll-link" />
        </ScrollLink>
      </div>
    </section>
  )
}
