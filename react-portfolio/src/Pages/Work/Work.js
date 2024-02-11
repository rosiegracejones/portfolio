import WorkCard from "../../Components/WorkCard/WorkCard";
import foot from "../../Images/foot.jpg"
import swim from "../../Images/swim.jpg"
import quartet from "../../Images/quartet.jpg"
import match from "../../Images/match.jpg"
import knee from "../../Images/knee.png"
import trumpet from "../../Images/trumpet.jpg"

function Work() {
	const projects = [
		{
			title: "'Small Pleasures' Animation",
			description: "'Small Pleasures' Animation Project Still",
			image: foot,
		},
		{
			title: "Swimming Promotional Poster",
			description: "Swimming Promotional Poster",
			image: swim,
		},
		{
			title: "String Quartet Charity Event Poster",
			description: "String Quartet Charity Event Poster",
			image: quartet,
		},
		{
			title: "'Playing with Fire' Animation",
			description: "'Playing with Fire' Animation Project Still",
			image: match,
		},
		{
			title: "'Hurt' Animation",
			description: "'Hurt' Animation Project Still",
			image: knee,
		},
		{
			title: "Children's Play Cards Project",
			description: "Children's Play Cards Project - Trumpet Card",
			image: trumpet,
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
