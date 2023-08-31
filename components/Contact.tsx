import Image from "next/image"
import Link from "next/link"
import React from "react"
import { AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai"
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs"
import SlideUp from "./SlideUp"

const email = "gustavo.passarella@hotmail.com"
const phoneNumber = "+447580577781"

const ContactItems = [
    {
        id:0,
        label: "Call",
        description: phoneNumber,
        link: "tel:+447580577781",
        icon: AiOutlinePhone,
    },
    {
        id:1,
        label: "Email",
        description: email,
        link: `mailto:${email}`,
        icon: AiOutlineMail,
    },
    {
        id:2,
        label: "WhatsApp",
        description: phoneNumber,
        link: `https://wa.me/${phoneNumber}`,
        icon: AiOutlineWhatsApp,
    },
]


export default function ContactSection() {


return (
    <section id="contact" className="my-16 text-center p-10 text-white">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <div className="flex flex-col md:flex-row md:justify-between items-center md:space-x-0">
            {ContactItems.map((item) => (
                <div className="flex flex-col items-center text-left mb-8 md:mb-0 md:w-1/3" key={item.id}>
                <h4 className="font-semibold uppercase text-gray-400 mb-4">{item.label}</h4>
                <a href={item.link} target="_blank" className="flex items-center space-x-2 text-lg text-gray-300 hover:text-white transition-all link-item" rel="noreferrer">
                <item.icon size={24} />
                <span>{item.description}</span>
                </a>
            </div>
            ))}
            

            {/* <div className="flex flex-col items-center text-left mb-8 md:mb-0 md:w-1/3">
                <h4 className="font-semibold uppercase text-gray-400 mb-4">Email</h4>
                <a href={`mailto:${myEmail}`} target="_blank" className="flex items-center space-x-2 text-lg text-gray-300 hover:text-white transition-all link-item">
                <AiOutlineMail size={24} />
                <span>{myEmail}</span>
                </a>
            </div>

            <div className="flex flex-col items-center text-left md:w-1/3">
                <h4 className="font-semibold uppercase text-gray-400 mb-4">WhatsApp</h4>
                <a href={`https://wa.me/${myPhone}`} target="_blank" className="flex items-center space-x-2 text-lg text-gray-300 hover:text-white transition-all link-item">
                <AiOutlineWhatsApp size={24} />
                <span>{myPhone}</span>
                </a>
            </div> */}
        </div>
    </section>
    );
}

