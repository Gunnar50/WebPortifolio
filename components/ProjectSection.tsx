"use client"
import React, {useState} from "react"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"

// Define a type for your projects
type ProjectType = {
	id: number,
	title: string,
	description: string,
	image: string,
	tags: string[],
	github: string,
	link: string,
	readMoreLink: string,
  };


const projects: ProjectType[] = [
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

// Define a type for the ProjectModal props
type ProjectModalProps = {
	project: ProjectType,
	onClose: () => void,
  };

// New Modal Component

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
	return (
	  <div className="fixed inset-0 z-50 overflow-y-auto" key={project.id}>
		<div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
		  <div className="fixed inset-0 transition-opacity">
			<div className="absolute inset-0 bg-black opacity-90"></div>
		  </div>
		  <div
			className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full transition-opacity transform ease-out duration-500"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-headline"
		  >
			<div className="relative pb-4">
			  <img src={project.image} alt={project.title} width={500} className="w-full object-cover"/>
			  <button 
				className="absolute top-0 right-0 m-2 bg-white rounded-full p-1 drop-shadow-md leading-none text-black hover:text-gray-500 transition focus:outline-none"
				onClick={onClose}
			  >
				<AiOutlineClose size={20}/>
				
			  </button>
			</div>
			<div className="px-4 pt-4 pb-8">
			  <h3 className="text-xl leading-6 font-medium text-gray-900">{project.title}</h3>
			  <p className="mt-2 text-base leading-5 text-gray-500">{project.description}</p>
			</div>
		  </div>
		</div>
	  </div>
	);
  };



export default function ProjectsSection() {
	const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

	function openProject(project: ProjectType) {
		document.body.classList.add("modal-open");
		setSelectedProject(project);
	}

	function closeProject() {
		document.body.classList.remove("modal-open");
		setSelectedProject(null);
	}

	
	return (
		<section id="projects">
				<h1 className="my-10 text-center font-bold text-4xl">
					Projects
					<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
					{projects.map((project: ProjectType) => {
							return (
								<SlideUp offset="-300px 0px -300px 0px" key={project.id}>
									<div className="flex flex-col rounded bg-gray-800 animate-slideUpCubiBezier animation-delay-2 transition-transform hover:-translate-y-2"
										key={project.id}
										onClick={() => openProject(project)}
										>
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
					{/* If a project is selected, show the modal */}
					{selectedProject && <ProjectModal project={selectedProject} onClose={closeProject} />}
				</div>
		</section>
	)
} 


