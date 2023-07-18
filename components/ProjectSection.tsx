import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    id: 0,
    title: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/1.png",
    tags: ["Mongo", "Express", "React"],
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
    readMoreLink: "",
  },
  {
    id: 1,
    title: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/2.png",
    tags: ["Mongo", "Express", "React"],
    github: "https://github.com/hqasmei/platoio",
    link: "",
    readMoreLink: "",
  },
  {
    id: 2,
    title: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/3.jpg",
    tags: ["Mongo", "Express", "React"],
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
    readMoreLink: "",
  },
  {
    id: 4,
    title: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/1.png",
    tags: ["Mongo", "Express", "React"],
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
    readMoreLink: "",
  },
 
]



export default function ProjectsSection() {
  return (
    <section id="projects">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project) => {
              return (
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col rounded bg-gray-800 animate-slideUpCubiBezier animation-delay-2 transition-transform hover:-translate-y-2" key={project.id}>
                    <Link href={project.readMoreLink}><img src={project.image} alt={project.title} className="w-full object-cover"/></Link>
                    <div className="px-4 py-4 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-center text-white mb-2">{project.title}</h3>
                        <hr className="w-20 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
                        <div className="text-gray-400 leading-relaxed max-h-20 overflow-hidden">{project.description}</div>
                        <Link href={project.readMoreLink} className="text-teal-500 hover:underline">
                          Read more
                        </Link>
                        <div className="mt-6">
                          <div className="flex flex-wrap mt-2 justify-center mt-2">
                            {project.tags.map((t, i) => {
                              return <span key={i} className="m-1 text-sm text-white bg-gray-500 px-2 py-1 rounded">{t}</span>;
                            })}
                          </div>
                        </div>
                      </div>
                      <div className={`mt-4 mb-4 flex ${project.link ? "justify-around" : "justify-center"}`}>
                        <Link href={project.github} target="_blank">
                          <div className="flex flex-col items-center">
                            <BsGithub size={40} className="text-white transition-transform hover:-translate-y-1 cursor-pointer"/>
                            <span>GitHub</span>
                          </div>
                        </Link>
                        
                        {project.link && (
                          <Link href={project.link} target="_blank">
                            <div className="flex flex-col items-center">
                              <BsArrowUpRightSquare size={40} className="text-white transition-transform hover:-translate-y-1 cursor-pointer"/>
                              <span>Live Demo</span>
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </SlideUp>
              );
          })}
        </div>
    </section>
  )
} 




// export default function ProjectsSection() {
//   return (
//     <section id="projects">
//       <h1 className="my-10 text-center font-bold text-4xl">
//         Projects
//         <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//       </h1>

//       <div className="flex flex-col space-y-28">
//         {projects.map((project, idx) => {
//           return (
//             <div key={idx}>
//               <SlideUp offset="-300px 0px -300px 0px">
//                 <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
//                   <div className=" md:w-1/2">
//                     <Link href={project.link}>
//                       <Image
//                         src={project.image}
//                         alt=""
//                         width={1000}
//                         height={1000}
//                         className="rounded-xl shadow-xl hover:opacity-70"
//                       />
//                     </Link>
//                   </div>
//                   <div className="mt-8 md:w-1/2">
//                     <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
//                     <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-row align-bottom space-x-4">
//                       <Link href={project.github} target="_blank">
//                         <BsGithub
//                           size={30}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         />
//                       </Link>
//                       <Link href={project.link} target="_blank">
//                         <BsArrowUpRightSquare
//                           size={30}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </SlideUp>
//             </div>
//           )
//         })}
        
//       </div>
//     </section>
//   )
// }

