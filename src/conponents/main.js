import React from 'react'
//import { Switch } from 'react-mdl'
import { Switch,Route } from 'react-router-dom'
import LandinPage from './landingpage'
import AboutMe from './aboutme'
import Contact from './contact'
import Projects from './projects'
import Resume from './resume'
const Main = () =>(

    <Switch>
        <Route path ="/" exact component={LandinPage}/>   
        <Route path ="/aboutme" exact component={AboutMe}/>  
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)

export default Main;
