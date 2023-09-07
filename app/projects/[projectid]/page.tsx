import { default as Image } from 'next/image';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight, BsArrowUpRightSquare, BsGithub } from 'react-icons/bs';
import projectsData from "../../../components/projects.json";

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

const ProjectNotFound = () => {
	return (
		<div className='mt-48'>
			404 Project not found.
		</div>
	)
}

type ProjectModalProps = {
	project: ProjectType,
	onNext: () => void,
	onPrevious: () => void,
  };

  const ProjectFound: React.FC<ProjectModalProps> = ({ project, onNext, onPrevious }) => {
	return (
		<div key={project.id} className="text-center animate-fadeIn animation-delay-2 py-16 sm:py-32 md:py-40 md:text-left">
			
			{/* PROJECT TITLE */}
			<h3 className="text-6xl font-bold text-slate-200 mb-2">{project.title}</h3>
					
				<div className='flex flex-col space-y-10 items-stretch justify-center md:my-10 align-top md:space-x-10 md:space-y-0 md:flex-row md:text-left'>
					{/* PROJECT DESCRIPTION */}
					<div className="md:w-2/3 ">
						<p className="text-white text-lg mt-5">{project.description}</p>
					</div>

					<div className="text-center md:w-1/3 md:text-left px-5">
						{/* TECHNOLOGIES USED */}
						<h4 className="text-lg text-white font-bold">Technologies</h4>
						<div className="mt-3 mb-6">
							{project.tags.map((t, i) => {
								return <span key={i} className="m-1 text-md text-white bg-teal-900 px-2 py-1 rounded">{t}</span>;
							})}
						</div>

						{/* GITHUB AND DEMO LINKS */}
						<div className={`my-4 flex ${project.link && project.github ? "justify-around" : "justify-center"}`}>
							{project.github && (
								<Link href={project.github} target="_blank">
									<div className="flex flex-col items-center group/item">
										<BsGithub size={40} className="text-white transition-transform  group-hover/item:-translate-y-1 cursor-pointer"/>
										<span className="text-white">GitHub</span>
									</div>
								</Link>
							)}
							
							{project.link && (
								<Link href={project.link} target="_blank">
									<div className="flex flex-col items-center group/item">
										<BsArrowUpRightSquare size={40} className="text-white transition-transform group-hover/item:-translate-y-1 cursor-pointer"/>
										<span className="text-white">Live Demo</span>
									</div>
								</Link>
							)}
						</div>
					</div>
				</div>

				<Image src={project.mainImage} alt={project.title} width={1400} height={300} className="w-full object-cover"/>
				
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
	)
}

function ProjectPage({params}: any) {
	const projectId = parseInt(params.projectid);
	const selectedProject = projects.find(proj => proj.id === projectId);

	const showNextProject = () => {
		const nextProjecId = (projectId + 1) % projects.length; // Loop back to the first project after the last one
		window.location.href = `/projects/${nextProjecId}`
	};
	  
	  const showPreviousProject = () => {
		const previousProjectId = (projectId - 1 + projects.length) % projects.length; // Loop back to the last project after the first one
		window.location.href = `/projects/${previousProjectId}`
	};

	return (
		<div className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
			{selectedProject ? <ProjectFound project={selectedProject} onNext={showNextProject} onPrevious={showPreviousProject}/> : <ProjectNotFound/>}
		</div>
	)
}



export default ProjectPage