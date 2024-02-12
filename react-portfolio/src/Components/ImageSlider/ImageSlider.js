import React, { useState } from "react";

function ImageSlider({ project }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Handler to go to the next image
	const nextImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
		);
	};

	// Handler to go to the previous image
	const prevImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
		);
	};

	// Select image directly by index (for thumbnails)
	const selectImage = (index) => {
		setCurrentImageIndex(index);
	};

	return (
		<div>
			<div className="slider">
				<div className="slider-nav">
					<h4 onClick={prevImage}>{"<"} Previous </h4>
					<h5>&nbsp;/&nbsp;</h5>
					<h4 onClick={nextImage}>
						{" Next"} {">"}
					</h4>
				</div>
				<div>
					<img
						onClick={nextImage}
						src={project.images[currentImageIndex].src}
						alt={project.images[currentImageIndex].alt}
					/>
				</div>
				<div className="slider-thumbnails">
					{project.images.map((image, index) => (
						<img
							key={index}
							src={image.src}
							alt={image.alt}
							onClick={() => selectImage(index)}
							style={{
								borderStyle: index === currentImageIndex && "solid",
								borderWidth: index === currentImageIndex && "0.5px",
								borderColor: index === currentImageIndex && "#acacac",
								cursor: "pointer",
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default ImageSlider;
