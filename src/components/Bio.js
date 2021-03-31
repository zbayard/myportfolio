import {Button} from '@material-ui/core'
import profilepic from '../assets/profilepic.JPG'


function Bio(){
    return(
        <div>
            <h1>Zach Bayard</h1>
            <img src={profilepic} alt='Zach Bayard'></img>
            <p>Put more info about me here im a bla bla bla cool ass dude hire me</p>
            <Button variant='contained' color='primary' target='_blank' href='https://drive.google.com/file/d/1CZ5l8ghR1yetLYs8gJSGVAwUeDnlTQP3/view?usp=sharing'>Resume</Button>

        </div>
    );
}

export default Bio;