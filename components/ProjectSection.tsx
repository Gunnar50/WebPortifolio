"use client"
import { default as Image } from 'next/image'
import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BsArrowLeft, BsArrowRight, BsArrowUpRightSquare, BsGithub } from "react-icons/bs"
import projectsData from "./projects.json"
import SlideUp from "./SlideUp"

// Define the projects type
type ProjectType = {
	id: number,
	title: string,
	description: string,
	mainImage: string,
	thumbnail: string,
	tags: string[],
	github: string,
	link: string,
	filter: string,
	type: string,
  };


const projects: ProjectType[] = projectsData;

// Define a type for the ProjectModal props
type ProjectModalProps = {
	project: ProjectType,
	onClose: () => void,
	onNext: () => void,
	onPrevious: () => void,
  };

// New Modal Component

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNext, onPrevious }) => {

	return (
	  <div className="fixed inset-0 z-50 overflow-y-auto transition-opacity ease-out duration-300" key={project.id}>
		<div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
		  <div className="fixed inset-0 transition-opacity">
			<div className="absolute inset-0 bg-black opacity-90"></div>
		  </div>
		  <div
			className="inline-block align-middle bg-slate-100 rounded-lg text-left overflow-hidden shadow-xl transform transition-opacity my-8 max-w-6xl w-full ease-out duration-500"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-headline"
		  >
			<div className="relative">
				<div className="px-28 py-10">
					{/* PROJECT TITLE */}
					<h3 className="text-5xl font-bold text-slate-900 mb-2">{project.title}</h3>
					
					<div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:flex-row md:text-left'>
						{/* PROJECT DESCRIPTION */}
						<div className="md:w-2/3 ">
							<p className="text-gray-800 text-lg mt-5">{project.description}</p>
						</div>

						<div className="text-center md:w-1/3 md:text-left px-5">
							{/* TECHNOLOGIES USED */}
							<h4 className="text-lg text-black font-bold">Technologies</h4>
							<div className="mt-3 mb-6">
								{project.tags.map((t, i) => {
									return <span key={i} className="m-1 text-md text-white bg-gray-600 px-2 py-1 rounded">{t}</span>;
								})}
							</div>

							{/* GITHUB AND DEMO LINKS */}
							<div className={`my-4 flex ${project.link && project.github ? "justify-around" : "justify-center"}`}>
								{project.github && (
									<Link href={project.github} target="_blank">
										<div className="flex flex-col items-center group/item">
											<BsGithub size={40} className="text-black transition-transform  group-hover/item:-translate-y-1 cursor-pointer"/>
											<span className="text-black">GitHub</span>
										</div>
									</Link>
								)}
								
								{project.link && (
									<Link href={project.link} target="_blank">
										<div className="flex flex-col items-center group/item">
											<BsArrowUpRightSquare size={40} className="text-black transition-transform group-hover/item:-translate-y-1 cursor-pointer"/>
											<span className="text-black">Live Demo</span>
										</div>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
				<Image src={project.mainImage} alt={project.title} width={1400} height={300} className="w-full object-cover"/>
				<button 
					className="absolute top-0 right-0 m-2 bg-white rounded-full p-1 drop-shadow-md leading-none text-black hover:text-gray-500 transition focus:outline-none"
					onClick={onClose}
				>
					<AiOutlineClose size={20}/>
					
				</button>
				<div className="flex justify-center my-3">
					<div className='w-20 text-center mr-5 cursor-pointer' onClick={onPrevious}>
					<BsArrowLeft size={50} className="text-black inline-block"/>
					<span className='text-black'>Previous</span>
					</div>
					<div className='w-20 ml-5 text-center cursor-pointer' onClick={onNext}>
					<BsArrowRight size={50} className="text-black inline-block" />
					<span className='text-black'>Next</span>
					</div>

				</div>
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

	const findSelectedProjectIndex = () => {
		return projects.findIndex(project => project.id === selectedProject?.id);
	  };

	const showNextProject = () => {
		const selectedIndex = findSelectedProjectIndex();
		const nextIndex = (selectedIndex + 1) % projects.length; // Loop back to the first project after the last one
		setSelectedProject(projects[nextIndex]);
	  };
	  
	  const showPreviousProject = () => {
		const selectedIndex = findSelectedProjectIndex();
		const previousIndex = (selectedIndex - 1 + projects.length) % projects.length; // Loop back to the last project after the first one
		setSelectedProject(projects[previousIndex]);
	  };

	
	return (
		<section id="projects">
				<h1 className="my-10 text-center font-bold text-4xl">
					Projects
					<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
					{projects.map((project: ProjectType) => (
								<SlideUp offset="-300px 0px -300px 0px" key={project.id}>
									<div className="cursor-pointer group flex flex-col rounded bg-gray-800 animate-slideUpCubiBezier animation-delay-2 transition-transform overflow-hidden"
										key={project.id}
										onClick={() => openProject(project)}
										>
										{/* PROJECT IMAGE THUMBNAIL */}
										<Image src={project.thumbnail} alt={project.title} width={1400} height={1400}  className="w-full object-cover transition group-hover:scale-105"/>
										<div className="px-4 py-4 flex-grow flex flex-col justify-between">
											<div className='text-center'>
												{/* PROJECT TITLE */}
												<h3 className="text-2xl font-semibold text-center text-white mb-2">{project.title}</h3>

												{/* PROJECT TYPE */}
												<span className="text-gray-400 block mb-2">{project.type}</span>
												
											</div>
											
										</div>
									</div>
								</SlideUp>
					))}
					{/* If a project is selected, show the modal */}
					{selectedProject && <ProjectModal project={selectedProject} onClose={closeProject} onNext={showNextProject} onPrevious={showPreviousProject} />}
				</div>
		</section>
	)
} 


