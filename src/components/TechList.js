import {Grid} from '@material-ui/core'
import TechCard from './TechCard.js';
import react from '../assets/react.svg';
import javascript from '../assets/javascript.svg';
import rails from '../assets/rails.svg';
import ruby from '../assets/ruby.svg';
import reactrouter from '../assets/react-router.svg';
import redux from '../assets/redux.svg';
import html from '../assets/html-5.svg';
import css from '../assets/css-3.svg';
import postgresql from '../assets/postgresql.svg';
import git from '../assets/git-icon.svg';
import heroku from '../assets/heroku-icon.svg';
import netlify from '../assets/netlify.svg';
import github from '../assets/github-icon.svg';
import semantic from '../assets/semantic-ui.svg';
import material from '../assets/material-ui.svg';

function TechList(){

    const techCards = [
        {name:"React", logo: react},
        {name:"JavaScript", logo: javascript},
        {name:"Rails", logo: rails},
        {name:"Ruby", logo: ruby},
        {name:"React Router", logo: reactrouter},
        {name:"Redux", logo: redux},
        {name:"HTML", logo: html},
        {name:"CSS", logo: css},
        {name:"PostgreSQL", logo: postgresql},
        {name:"Git", logo: git},
        {name:"Heroku", logo: heroku},
        {name:"Netlify", logo: netlify},
        {name:"Github", logo: github},
        {name:"Semantic UI", logo: semantic},
        {name:"Material UI", logo: material}
    ]

    const cardsToDisplay = techCards.map(techCard => {
        return <TechCard key={techCard.name} techCard={techCard}/>
    })




    return(
        <div>
            <h1>Technologies I Work With</h1>
            <Grid container spacing={3}>
                {cardsToDisplay}

            </Grid>

        </div>
    );
}

export default TechList;