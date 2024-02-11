import projects from "../../Projects/Projects";
import Masonry from "react-masonry-css";

function Work() {
	const breakpointColumns = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1,
	};
	return (
		<div class="card-container">
			<Masonry
				breakpointCols={breakpointColumns}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{projects.map((item, index) => (
					<div class="thumbnail-container">
						<img
							class="thumbnail"
							srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.image}?w=248&fit=crop&auto=format`}
							alt={item.title}
							loading="lazy"
						/>
						<div class="thumbnail-overlay">
							<h2>{item.title}</h2>
						</div>
					</div>
				))}
			</Masonry>
		</div>
	);
}

export default Work;
