function ProjectCard({project}){
    return(
        <div>
            <h1>{project.name}</h1>
            <img className='project-cards' src={project.image} alt={project.name}></img>
        </div>
    );
}

export default ProjectCard;