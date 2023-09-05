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

function projectFound() {
	return (
		<div className='mt-48'>
			Project Found
		</div>
	)
}

function ProjectPage({params}) {
	const projectId = params.projectid;
	const [project, setProject] = useState<ProjectType | null>(null);

	const getProjectById = () => {
		for (let i = 0; i < projects.length; i++) {
			console.log(projects[i]);
			
			if( projects[i].id === parseInt(projectId)) {
				setProject(projects[i]);
			}
		}
	}

	useEffect(() => {
		getProjectById();
	}, []);
	

	return project ? projectFound() : notFound();
}



export default ProjectPage