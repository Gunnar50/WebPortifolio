"use client"
import React, {useState} from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from "next/navigation"
import {RiMoonFill, RiSunLine} from "react-icons/ri"
import {IoMdMenu, IoMdClose} from "react-icons/io"
import {BiAtom} from "react-icons/bi"
import {Link as ScrollLink} from "react-scroll/modules"
import Link from "next/link"


interface NavItem {
    label: string
    page: string
  }

const NAV_ITEMS = [
{
    label: "Home",
    page: "home",
},
{
    label: "About",
    page: "about",
},
{
    label: "Projects",
    page: "projects",
},
{
    label: "Contact",
    page: "contact",
},
]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const pathname = usePathname()
    const [navbar, setNavbar] = useState(false)
    return (
        <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
            <div className='justify-between md:items-center md:flex'>
                <div>
                    <div className="flex items-center justify-between py-3 md:py-3 md:block">
                        <div className='md:py-3 md:block'>
                            <h2 className='text-2xl font-bold'>
                                <ScrollLink smooth={true} to="home" className='scroll-link'>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <BiAtom size="3rem" className='py-2.5'/> <span>Gustavo Passarella</span>
                                    </div>
                                </ScrollLink>
                            </h2>
                        </div>
                        <div className='md:hidden'>
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                        </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <div className='md:flex md:space-x-6 space-y-8 md:space-y-0'>
                        {NAV_ITEMS.map((item, idx) => {
                            return (
                            <ScrollLink
                                key={idx}
                                to={item.page}
                                className={
                                "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 scroll-link"
                                }
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={() => setNavbar(!navbar)}
                            >
                                {item.label}
                            </ScrollLink>
                            )
                        })}
                    </div>
                </div>
                </div>
                
            </div>
        </header>
    )
}

export default Navbar