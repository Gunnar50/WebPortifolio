"use client"
import React, { useEffect, useState } from 'react';
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

function notFound() {
	return (
		<div className='mt-48'>
			404 Project not found.
		</div>
	)
}

function projectFound(project: ProjectType) {
	return (
		<div className='mt-48'>
			Project Found
			
			<h3>{project.title}</h3>
			<p>{project.description}</p>
		</div>
	)
}

function ProjectPage({params}: any) {
	const projectId = params.projectid;
	const [project, setProject] = useState<ProjectType | null>(null);

	const getProjectById = () => {
		for (let i = 0; i < projects.length; i++) {			
			if( projects[i].id === parseInt(projectId)) {
				setProject(projects[i]);
			}
		}
	}

	useEffect(() => {
		getProjectById();
	}, []);
	

	return project ? projectFound(project) : notFound();
}



export default ProjectPage