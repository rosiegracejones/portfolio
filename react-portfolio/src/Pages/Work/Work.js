import React, { useState } from "react";
import projects from "../../Projects/Projects";
import Masonry from "react-masonry-css";
import ProjectDetails from "../../Components/ProjectDetails/ProjectDetails";
import { HashLink } from "react-router-hash-link";

function Work() {
	const [selectedProject, setSelectedProject] = useState(null); // Step 1: State to hold the selected project information

	const breakpointColumns = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1,
	};

	const handleThumbnailClick = (project) => {
		setSelectedProject(project);
	};

	return (
		<>
			{selectedProject && <ProjectDetails project={selectedProject} />}
			<div className="card-container">
				<Masonry
					breakpointCols={breakpointColumns}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{projects.map((item, index) => (
						<div
							key={index}
							className="thumbnail-container"
							onClick={() => handleThumbnailClick(item)}
						>
							<HashLink smooth to="/#project-info">
								<img
									className="thumbnail"
									src={item.thumb}
									alt={item.title}
									loading="lazy"
								/>
								<div className="thumbnail-overlay">
									<h2>{item.title}</h2>
								</div>
							</HashLink>
						</div>
					))}
				</Masonry>
			</div>
		</>
	);
}

export default Work;
