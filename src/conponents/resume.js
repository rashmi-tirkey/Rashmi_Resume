import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img
                        src="https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/p720x720/64683539_689694851480702_832093619463651328_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=431VYw91d6UAX9FVM68&_nc_ht=scontent.fbbi1-1.fna&_nc_tp=6&oh=537771697e6e900c911cad5f3c2119a5&oe=5ECA8A17"
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                    </div>
                    <h2 style={{paddingTop: '2em'}}>Rashmi Kumari </h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Address</h5>
                    <p>1 Hacker Way Menlo Park, 94025</p>
                    <h5>Phone</h5>
                    <p>(123) 456-7890</p>
                    <h5>Email</h5>
                    <p>someone@example.com</p>
                    <h5>Web</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education
                    startYear={2002}
                    endYear={2006}
                    schoolName="My University"
                    schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <Education
                        startYear={2007}
                        endYear={2009}
                        schoolName="My 2nd University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Experience</h2>
                    <Experience
                    startYear={2009}
                    endYear={2012}
                    jobName="First Job"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <Experience
                        startYear={2012}
                        endYear={2016}
                        jobName="Second Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Skills</h2>
                    <Skills
                        skill="javascript"
                        progress={100}
                        />
                        <Skills
                        skill="HTML/CSS"
                        progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                            />
                            <Skills
                            skill="React"
                            progress={25}
                        />
                </Cell>
            </Grid>
      </div>
        )
    }
}

export default Resume;