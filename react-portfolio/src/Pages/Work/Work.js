import WorkCard from "../../Components/WorkCard/WorkCard";

function Work() {
	const projects = [
		{
			title: "Project 1",
			description: "This is a description of project 1",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Project 2",
			description: "This is a description of project 2",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Project 3",
			description: "This is a description of project 3",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Project 4",
			description: "This is a description of project 4",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Project 5",
			description: "This is a description of project 5",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Project 6",
			description: "This is a description of project 6",
			image: "https://via.placeholder.com/150",
		},
	];

	return (
		<div class="card-container">
			{projects.map((project, index) => (
				<WorkCard
					title={project.title}
					description={project.description}
					image={project.image}
					key={index}
				/>
			))}
		</div>
	);
}

export default Work;
