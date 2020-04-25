import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import rash from './../assest/rash2.jpeg'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }} className="header-image">
                            <img
                                src={rash}
                                alt="avatar"
                                style={{ height: '300px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Rashmi Tirkey </h2>
                        <h4 style={{ color: 'grey' }}>About Me</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>
                            I have 1.5 years experience as a software developer.
                            I am able to handle multiple tasks on a daily basis,
                            always energetic and eager to learn new skills,
                            flexible in my working hours, being able to work evenings and weekends,
                            motivated to do exercise before work to get fit and healthy.
                    </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Kanan Vihar Phase-2, Patia, Bhubaneswar, 751024 </p>
                        <h5>Phone</h5>
                        <p>9337XXXXXX</p>
                        <h5>Email</h5>
                        <p>tirkeyrashmi42@gmail.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col resume-wrapper" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2016}
                            endYear={2018}
                            schoolName="KiiT University | Patia, Bhubaneshwar, Odisha"
                            description="MCA (Computer Application)"
                            marks={"7.76/10"}

                        />
                        <Education
                            startYear={2012}
                            endYear={2015}
                            schoolName="Nirmala Collage | Ranchi , Jharkhand"
                            description="BCA (Computer Application)"
                            marks={"71.3/100"}

                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={"Oct 2018"}
                            endYear={"Sep 2019"}
                            jobName="Maastrix Solution (Software Engineer)"
                            jobDescription="Worked as a PHP developer and used Phalcon  and Laravel framework | |
                            Database created and managed | |
                            Backend code Integrated with frontend | |
                            Integrated Google Map API in Frondend | |
                            Unit Testing "
                        />
                        <Experience
                            startYear={"Oct 2019"}
                            endYear={"Present"}
                            jobName="Obpoo Solution. (Software Engineer)"
                            jobDescription="Worked as a PHP and javaScript developer and used Laravel framework | |
                             Developed User and Admin dashboard End to End | |
                             Worked on AJAX for Some API calling | |
                             Implemented QR Code Scanner | |
                             Unit Testing"
                            />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="PHP"
                            progress={90}
                        />
                        <Skills
                            skill="Javascript"
                            progress={60}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={60}
                        />
                        <Skills
                            skill="React/Redux"
                            progress={40}
                        />
                        <Skills
                            skill="C /Java language"
                            progress={30}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;