import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="grid-landing">
                <Cell col={12}>
                    <img
                    src="https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/p720x720/64683539_689694851480702_832093619463651328_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=431VYw91d6UAX9FVM68&_nc_ht=scontent.fbbi1-1.fna&_nc_tp=6&oh=537771697e6e900c911cad5f3c2119a5&oe=5ECA8A17"
                    alt="rashmi"
                    className="image"
                    />
                </Cell>
                <div className="banner-text">
                    <h1>Full Stack Developer</h1>


                    <hr/>
                    <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | Node Js | Express | MongoDB</p>
                    <div className="social-links">
                        {/*LinkedIn*/}
                        <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                            <li className=" fa fa-linkedin-square" aria-hidden="true"></li>
                        </a>
                         {/*Github*/}
                         <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                            <li className=" fa fa-github-square" aria-hidden="true"></li>
                        </a>
                         {/*Freecodecamp*/}
                         <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                            <li className=" fa fa-free-code-camp" aria-hidden="true"></li>
                        </a>
                         {/*YouTube*/}
                         <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                            <li className=" fa fa-youtube-square" aria-hidden="true"></li>
                        </a>
                        
                    </div>
                </div>
             </Grid>
             </div>
        )
    }
}

export default LandingPage;