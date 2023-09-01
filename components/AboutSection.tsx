import React from "react"

const skills = [
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Jupyter Notebooks",
  "Django",
  "NodeJS",
  "ExpressJS",
  "Pygame",
  "Game Development",
  "Object-Oriented Programming",
  "Kali Linux",
  "Cryptography",
  "Network Archtecture",
  "Cloud Computing",
]

const frontend_skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
]

const backend_skills = [
  "Python",
  "Django",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Prisma",
]

const general_skills = [
  "Python",
  "Java",
  "Git",
  "GitHub",
  "Game Development",
  "Object-Oriented Programming",
  "Windows OS",
  "Linux OS",
  "Cryptography",
  "Network Archtecture",
  "Network Protocols",
  "Cisco Devices",
  "Cloud Computing",
]

export default function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-20">
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
            Furthermore, my knowledge of Fullstack Development with React, TypeScript and NodeJS  solidifies my foundation in software engineering.
            </p>
            <br />
            <p>
              I have a passion for{" "}
              <span className="font-bold text-teal-500">technology</span> and a desire to always push the limits of what is
              possible. I am excited to see where it can take me and I am
              open to new opportunities, let&apos;s have a chat.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-4">My Skills</h1>
            <h1 className="text-xl font-bold mb-4">Backend</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {backend_skills.map((skill, idx) => (
                  <p
                    key={idx}
                    className="bg-gray-700 px-4 py-2 mr-2 mt-2 text-gray-200 rounded font-semibold scroll-link hover:bg-teal-700 transition"
                  >
                    {skill}
                  </p>
                )
              )}
            </div>

            <h1 className="text-xl font-bold mb-4 mt-10">Frontend</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {frontend_skills.map((skill, idx) => (
                  <p
                    key={idx}
                    className="bg-gray-700 px-4 py-2 mr-2 mt-2 text-gray-200 rounded font-semibold scroll-link hover:bg-teal-700 transition"
                  >
                    {skill}
                  </p>
                )
              )}
            </div>

            <h1 className="text-xl font-bold mb-4 mt-10">General Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {general_skills.map((skill, idx) => (
                  <p
                    key={idx}
                    className="bg-gray-700 px-4 py-2 mr-2 mt-2 text-gray-200 rounded font-semibold scroll-link hover:bg-teal-700 transition"
                  >
                    {skill}
                  </p>
                )
              )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

