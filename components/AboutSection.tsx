import React from "react"
import { Link as ScrollLink } from "react-scroll/modules"

const skills = [
  { skill: "Python" },
  { skill: "Java" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MySQL" },
  { skill: "PostgreSQL" },
  { skill: "MongoDB" },
  { skill: "Jupyter Notebooks" },
  { skill: "Django" },
  { skill: "NodeJS" },
  { skill: "ExpressJS" },
  { skill: "Pandas" },
  { skill: "NumPy" },
  { skill: "Pygame" },
  { skill: "Game Development" },
  { skill: "Object-Oriented Programming" },
  { skill: "Kali Linux" },
  { skill: "Cryptography" },
  { skill: "Network Archtecture" },
  { skill: "Cloud Computing" },
]

export default function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Gustavo and I am a
              <span className="font-bold"> highly ambitious</span>,
              <span className="font-bold"> self-motivated</span>, and
              <span className="font-bold"> driven</span> person
              based in London, UK.
            </p>
            <br />
            <p>
              I have recently graduated from London Metropolitan University
              with a BSc(Hons) in <span className="font-bold">Computer Networking & Cyber Security</span>.
            </p>
            <br />
            <p>
            I have used my <span className="font-bold text-teal-500">Python skills to develop a vulnerability-testing toolkit</span>{" "} 
            for my final year project, designed with user-friendly reports and recommendations. This project can be found in the projects section.
            </p>
            <br />
            <p>
            I am currently working as Python, SQL database, and Game Development at FunTech where I teach children and young
            adults computer science and software engineering concepts.
            Furthermore, my knowledge of C# and C++ solidifies my foundation in software development.
            </p>
            <br />
            <p>
              I have a passion for{" "}
              <span className="font-bold text-teal-500">technology</span> and a desire to always push the limits of what is
              possible. I am excited to see where it can take me and I am
              open to new opportunities, let's have a chat.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-700 px-4 py-2 mr-2 mt-2 text-gray-200 rounded font-semibold scroll-link hover:bg-teal-700 transition"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

