import {Card} from 'semantic-ui-react'

function TechCard({techCard}){
    return(
       
            <Card id='tech-card' raised image={techCard.logo}/>

        
    );
}

export default TechCard;

{/* <img className='tech-card' src={techCard.logo} alt={techCard.name}></img> */}