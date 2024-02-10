function WorkCard({title, description, image}) {
    return (
      <div class="work-card">
       <img alt={description} src={image}/>
         <h2>{title}</h2>
      </div>
    );
  }
  
  export default WorkCard;