function WorkCard({ title, description, image }) {
	return (
		<div class="work-card">
			<img class="card-img" alt={description} src={image} />
			<div class="overlay">
				<h2 class="overlay-text">{title}</h2>
			</div>
		</div>
	);
}

export default WorkCard;
