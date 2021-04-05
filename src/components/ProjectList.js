import ProjectCard from './ProjectCard.js';
import gigbag from '../assets/gigbag.png';
import grooveplayer from '../assets/grooveplayer.png';



function ProjectList(){

    const projects = [
        {name: 'Gig Bag', image: gigbag, description: 'React app designed to enable users to browse & book local artists for private events.', techStack: 'React, Rails, PostgreSQL, JWT, Semantic UI React, Heroku, Netlify', link: 'https://gigbag.netlify.app/'},
        {name: 'Groove Player', image: grooveplayer , description: 'Animated record player app', techStack: 'Javascript, Rails, PostgreSQL, CSS, Heroku, Netlify', link: 'https://grooveplayer.netlify.app/'}
    ]

    const projectsToDisplay = projects.map(project => {
        return(<ProjectCard project={project}/>)
    }
    
)
    return(
        <div>
            <h1>My Recent Projects</h1>
            {projectsToDisplay}

        </div>
    );
}

export default ProjectList;