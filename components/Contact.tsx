import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { AiOutlineMail, AiFillLinkedin, AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";




// export default function ContactSection() {
//     const myEmail = "your_email@gmail.com";
//     const myPhone = "1234567890";
//     const myLinkedIn = "your-linkedin-url";
  
//     return (
//       <section className="my-16 text-center bg-gray-800 text-white p-10">
//         <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
  
//         <div className="link-list">
//             <div className="link-col">
//                 <h4 className="link-title">Call</h4>
//                 <a className="link-item" href={`tel:${myPhone}`}>{myPhone}</a>
//             </div>

//             <div className="link-col">
//                 <h4 className="link-title">Email</h4>
//                 <a className="link-item" href={`mailto:${myEmail}`}>{myEmail}</a>
//             </div>

//             <div className="link-col">
//                 <h4 className="link-title">WhatsApp</h4>
//                 <a className="link-item" href={`https://wa.me/${myPhone}`}>{myPhone}</a>
//             </div>

//             <div className="link-col">
//                 <h4 className="link-title">WhatsApp</h4>
//                 <a className="link-item" href={myLinkedIn}>{myLinkedIn}</a>
//             </div>

//         </div>
        
//       </section>
//     )
//   }

  export default function ContactSection() {
    const myEmail = "gustavo.passarella@hotmail.com";
    const myPhone = "+447580577781";
  
    return (
        <section id="contact">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
    
          <div className="flex flex-col md:flex-row md:justify-between items-center md:space-x-0">
            <div className="flex flex-col items-center text-left mb-8 md:mb-0 md:w-1/3">
              <h4 className="font-semibold uppercase text-gray-400 mb-4">Call</h4>
              <a href={`tel:${myPhone}`} target="_blank" className="flex items-center space-x-2 text-lg text-gray-300 hover:text-white transition-all link-item">
                <AiOutlinePhone size={24} />
                <span>{myPhone}</span>
              </a>
            </div>
    
            <div className="flex flex-col items-center text-left mb-8 md:mb-0 md:w-1/3">
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
            </div>
          </div>
        </section>
      );
  }

