import {Grid} from '@material-ui/core'

function TechCard({techCard}){
    return(
        <div className='tech-card'>
            <Grid>
                <img src={techCard.logo} alt={techCard.name}></img>
            </Grid>

        </div>
    );
}

export default TechCard;