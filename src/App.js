import React from 'react';
import logo from './logo.svg';
//import { BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from 'react-router-dom'
import './App.css';
//import Home from './component/Home'
//import About from './component/About'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './conponents/main'
function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Title" scroll>
                <Navigation>
                    <Link to ="/resume">Resume</Link>
                    <Link to ="/aboutme">About Me</Link>
                    <Link to ="/projects">Projects</Link>
                    <Link to ="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <Link to ="/resume">Resume</Link>
                    <Link to ="/aboutme">About Me</Link>
                    <Link to ="/projects">Projects</Link>
                    <Link to ="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
