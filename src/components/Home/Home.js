import React from 'react'

import './Home.css'
import Navbar from './Toolsbar/Navbar/Navbar'
import Toolsbar from './Toolsbar/Toolsbar';
import Slider from './Slider/Slider';
import Features from './Features/Features';
import About from './About/About';
import Services from './Services/Services';
import SkillSet from './SkillSet/SkillSet';
import Team from './Team/Team';
import Contact from './Contact/Contact';

import Blogs from './Blogs/Blogs';
import ProjectSummary from './ProjectSummary/ProjectSummary';
import Projects from './Projects/Projects';
import Leadership from './Leadership/Leadership';

function Home() {
    return (
        <div>
            <div className="nav-header">
            <Toolsbar></Toolsbar>
            <Navbar></Navbar>
            <Slider></Slider>
        </div>
        <Features></Features>
        <About></About>
        <Services></Services>
        <Projects></Projects>
        <Leadership></Leadership>
        <ProjectSummary></ProjectSummary>
        <SkillSet></SkillSet>
        <Team></Team>
        <Contact></Contact>
        <Blogs></Blogs>
        
        </div>
    )
}

export default Home
