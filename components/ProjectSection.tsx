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
  },
  {
    id: 1,
    title: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/2.png",
    tags: ["Mongo", "Express", "React"],
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    id: 2,
    title: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/3.jpg",
    tags: ["Mongo", "Express", "React"],
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
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
  },
 
]

// export default function ProjectsSection() {
//   return (
//     <section>
//         <h1 className="my-10 text-center font-bold text-4xl">
//           Projects
//           <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//         </h1>
//         <div className="grid-container">
//           {projects.map((project) => {
//               return (
//                 <div className="blog-card" key={project.id}>
//                 <img className="img" src={project.image} />
//                   <div className="title-content">
//                     <h3 className="header-three header-three-title">{project.title}</h3>
//                     <hr className="w-20 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
//                   </div>
//                   <div className="card-info">{project.description}</div>
//                   <div>
//                     <div className="title-content">Stack</div>
//                     <div className="tag-list">
//                       {project.tags.map((t, i) => {
//                         return <div className="tag" key={i}>{t}</div>;
//                       })}
//                     </div>
//                   </div>
//                   <div className="utility-list">
//                   <Link href={project.github} target="_blank">
//                          <BsGithub
//                           size={40}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         />
//                       </Link>
//                       <Link href={project.link} target="_blank">
//                         <BsArrowUpRightSquare
//                           size={40}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         />
//                       </Link>
//                     {/* <a className="external-links" href={project.github}>Code</a>
//                     <a className="external-links" href={project.link}>Source</a> */}
//                   </div>
//                 </div>
//               );
//           })}

//         </div>

//     </section>
//   )
// }

export default function ProjectsSection() {
  return (
    <section className="px-4 py-10 bg-gray-900 text-white">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded-full"></hr>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 bg-gray-800 p-4" key={project.id}>
              <img className="w-full h-64 object-cover" src={project.image} alt={project.title} />
              <div className="py-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <hr className="w-20 h-1 mx-auto my-4 bg-teal-500 border-0 rounded-full" />
                <p className="text-gray-500">{project.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">Stack</h4>
                  <ul className="flex flex-wrap justify-center mt-2">
                    {project.tags.map((t, i) => (
                      <li key={i} className="mr-2 mb-2 bg-gray-700 px-2 py-1 rounded-md">{t}</li>
                    ))}
                  </ul>
                </div>
                <ul className="flex justify-around mt-10">
                  <Link href={project.github}>
                    <BsGithub size={40} className="hover:-translate-y-1 transition-transform cursor-pointer text-white" />
                  </Link>
                  <Link href={project.link}>
                    <BsArrowUpRightSquare size={40} className="hover:-translate-y-1 transition-transform cursor-pointer text-white" />
                  </Link>
                </ul>
              </div>
            </div>
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

