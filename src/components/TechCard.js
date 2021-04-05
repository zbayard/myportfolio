import {Grid} from '@material-ui/core'

function TechCard({techCard}){
    return(
        <div>
            <Grid>
                <img className='tech-card' src={techCard.logo} alt={techCard.name}></img>
            </Grid>

        </div>
    );
}

export default TechCard;