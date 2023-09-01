"use client"
import { default as Image } from 'next/image'
import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs"
import SlideUp from "./SlideUp"

// Define the projects type
type ChallengeType = {
	id: number,
	title: string,
	description: string,
	image: string,
	tags: string[],
	github: string,

	readMoreLink: string,
  };


  const projects: ChallengeType[] = [
	{
		id: 0,
		title: "Thankful Thoughts",
		description:
			"ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
		image: "/3.jpg",
		tags: ["Mongo", "Express", "React"],
		github: "https://github.com/hqasmei/thankful-thoughts",
		readMoreLink: "",
	},
	{
		id: 1,
		title: "PlatoIO",
		description: "PlatoIO is a to do list app that built using the PERN stack.",
		image: "/2.png",
		tags: ["Mongo", "Express", "React"],
		github: "https://github.com/hqasmei/platoio",
		readMoreLink: "",
	},
	{
		id: 2,
		title: "PlatoIO",
		description: "PlatoIO is a to do list app that built using the PERN stack.",
		image: "/3.jpg",
		tags: ["Mongo", "Express", "React"],
		github: "https://github.com/hqasmei/platoio",
		readMoreLink: "",
	},
]



export default function ChallengeSection() {
	
	return (
		<section id="projects">
				<h1 className="my-10 text-center font-bold text-4xl">
					Challenges
					<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
					{projects.map((project: ChallengeType) => (
								<SlideUp offset="-300px 0px -300px 0px" key={project.id}>
									<div className="group flex flex-col rounded bg-gray-800 animate-slideUpCubiBezier animation-delay-2 transition-transform overflow-hidden"
										key={project.id}
						
										>
										<Link href={project.readMoreLink}><Image src={project.image} alt={project.title} width={500} height={300}  className="w-full object-cover transition group-hover:scale-105"/></Link>
										<div className="px-4 py-4 flex-grow flex flex-col justify-between">
											<div>
												<h3 className="text-2xl font-semibold text-center text-white mb-2">{project.title}</h3>
												
												<Link href={project.readMoreLink} className="block text-teal-500 hover:underline text-center">
													Show Project
												</Link>
												
											</div>
											
											
										
										</div>
									</div>
								</SlideUp>
					))}
				</div>
		</section>
	)
} 


