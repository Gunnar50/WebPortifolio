
import React, { useState } from 'react';
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
	const projectId = parseInt(params.projectid);
	const project = projects.find(proj => proj.id === projectId);

	return project ? projectFound(project) : notFound();
}



export default ProjectPage