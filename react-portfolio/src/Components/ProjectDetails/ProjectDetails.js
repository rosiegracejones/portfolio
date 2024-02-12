import ImageSlider from "../ImageSlider/ImageSlider";

function ProjectDetails({ project }) {
	return (
		<div>
			<div class="project-info" id="project-info">
				<div className="project-description">
					<h3>{project.title}</h3>
					{project.description}
				</div>
				{project.type === "Animation" && (
					<video loop muted controls autoPlay>
						<source src={project.video} type="video/mp4" />
					</video>
				)}
				{project.type === "Image" && (
					<img alt={project.alt} src={project.image} />
				)}

				{project.type === "Series" && <ImageSlider project={project} />}
			</div>
		</div>
	);
}

export default ProjectDetails;
