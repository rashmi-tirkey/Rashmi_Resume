import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import image from './../assest/rash.jpeg'
class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="grid-landing">
                <Cell col={12}>
                    <img
                    src={image}
                    alt="rashmi"
                    className="image"
                    />
                </Cell>
                <div className="banner-text">
                    <h1>Full Stack Developer</h1>
                    <hr/>
                    <p>PHP | PHP Laravel | PHP Phalcon | PHP Codeigniter | React/Redux | JavaScript | HTML/CSS | Bootstrap | MySQL | Core Java | C Language</p>
                    <div className="social-links">
                        {/*LinkedIn*/}
                        <a href="https://www.linkedin.com/in/rashmi-tirkey/" rel="noopener noreferrer"  target="_blank">
                            <li className=" fa fa-linkedin-square" aria-hidden="true"></li>
                        </a>
                         {/*Github*/}
                         <a href="https://github.com/rashmi-tirkey/" rel="noopener noreferrer"  target="_blank">
                            <li className=" fa fa-github-square" aria-hidden="true"></li>
                        </a>
                         {/*Freecodecamp*/}
                         <a href="https://www.hackerrank.com/tirkeyrashmi42" rel="noopener noreferrer"  target="_blank">
                         <i class='fab fa-hackerrank' style={{fontSize:'52px',color: "white", paddingTop:"14px"}}  aria-hidden="true"></i>
                        </a>
                         {/*YouTube*/}
                         <a href="https://www.facebook.com/profile.php?id=100013205796982" rel="noopener noreferrer"  target="_blank">
                            <li className=" fa fa-facebook-square" aria-hidden="true"></li>
                        </a>
                        
                    </div>
                </div>
             </Grid>
             </div>
        )
    }
}

export default LandingPage;