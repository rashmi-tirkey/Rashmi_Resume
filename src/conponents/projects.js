import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import image from './../assest/rash1.jpeg'
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            projectNumber: 0
        }
    }
    changeProejct = (event) => {
        this.setState({ projectNumber: event.target.value })
    }
    projectDeatils = (imagex, proName, projectAbout, description, github, liveDemo) => {
        let i = this.state.projectNumber
        return (
            <div className="project-deatils">
                <div className="select-box" >
                    <p>Total Project : {proName.length}</p>
                    <select onChange={this.changeProejct} className="select">
                        {proName.map((data, index) => {
                            return <option value={index} key={index}>{data}</option>
                        })}
                    </select>
                </div> 
                <div className="projects-grid">
                    <Card className="project-card" shadow={5} style={{ minWidth: '440', margin: 'auto' }}>
                        <CardTitle style={{ color: '#000000', height: '176px', background: `url(${imagex[i]}) center / cover` }} >{proName[i]}</CardTitle>
                        <CardText style={{ width: '100%' }}>
                            {projectAbout[i]}
                        </CardText>
                        <CardActions border>
                            <Button colored href={github[i]}>GitHub</Button>
                            <Button colored href={liveDemo[i]}>Live Demo</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="project-des" style={{ padding: "50px" }}>
                    {description[i]}
                </div>
            </div>

        )
    }
    toggleCatagories = () => {
        let proName = []
        let importedImage = [];
        let aboutProejct = []
        let description = [];
        let github = [];
        let liveDemo = [];
        if (this.state.activeTab === 0) {
            proName = ["Egrassrooter", "HomeMata"]
            importedImage = ["https://www.egrassrooter.com/frontfile/images/banner_main.jpg", "https://www.homemata.com/uploads/siteimage/15553344271555066521homemata-logo.png",];
            aboutProejct = ["This project is developed under guidlines of tech lead and manager , there ware 7 developer in this project ", "This project is developed under guidlines of tech lead and manager , there ware 7 developer in this project"]
            description = ["Egrassrooter is a subsidiary of One Kobo Technologies, aimed at revolutionizing the electioneering campaign processes in Nigeria and Africa at Large. We are leveraging on technology to ease and simplify campaigns for political parties and aspirants to monitor and evaluate their performances in a much more convenient manner for better productivity",
                "With Home Mata you are guaranteed quicker and reliable access to interior and exterior designs, artisans, and products needed to keep your home or office in perfect shape."]
            github = ["", ""]
            liveDemo = ["https://www.egrassrooter.com/", "https://www.homemata.com/"]
            return this.projectDeatils(importedImage, proName, aboutProejct, description, github, liveDemo)
        }
        else if (this.state.activeTab === 1) {
            proName = ["My Portfolio"]
            importedImage = [image];
            aboutProejct = ["This is a React Project, I have learnt many concept of react during developing"]
            description = ["This is a React Project, I have learnt many concept of react during developing, The techlonoloy used in this are : HTML, CSS, React, Router, Bootstrap etc"]
            github = ["https://github.com/rashmi-tirkey/Rashmi_Resume"]
            liveDemo = ["", ""]

            return this.projectDeatils(importedImage, proName, aboutProejct, description, github, liveDemo)
        }
        else if (this.state.activeTab === 2) {
            proName = ["Ludo Dice", "Typing Speed"]
            importedImage = ["https://www.searchpng.com/wp-content/uploads/2019/04/ludo-dice-PNG-715x715.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc97bN-u5-p5XoWGVcJsbpn4NzPirEPbGDQ72lFhMLwz3sgHj2&usqp=CAU"];
            aboutProejct = ["This is Small Plan JavaScript Project,that can be play between two users", "This is Small Plan JavaScript Project, which is will tell your typing speed"]
            description = ["This is a small game between two player, You have to click one button and random number generate for each player based on dice number this project will decide who is winner",
                "Will give you random sentence you have to type that sentence based on your input porject will show you type speed with how many word you have typed right"]
            github = ["https://github.com/rashmi-tirkey/BasicJavaScript", "https://github.com/rashmi-tirkey/TypingSpeed-JavaScript"]
            liveDemo = ["", ""]

            return this.projectDeatils(importedImage, proName, aboutProejct, description, github, liveDemo)

        } else if (this.state.activeTab === 3) {
            return (
                <div><h2>I am Learning Node...</h2></div>
            )
        }
    }
    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId,projectNumber:0 })} ripple>
                    <Tab>PHP</Tab>
                    <Tab>React</Tab>
                    <Tab>javaScript</Tab>
                    <Tab>Node</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12} style={{ paddingTop: "0" }}>
                            <div className="content">{this.toggleCatagories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;