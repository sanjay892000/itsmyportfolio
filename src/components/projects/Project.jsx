import React from 'react'
import './project.css'
import allProject from './projects.json'
import { Link } from 'react-router-dom'
function Project() {
    return (
        <section id='project-section'>
            <div className="project-title">
                <h1>my <span>Projects</span></h1>
                <h2 className='allproject'>Projects</h2>
            </div>
            <div className="project-container">
                {allProject.map((project, i) => {
                    return (
                        <Link to={`/project/${project.id}`} key={i} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt="loading..." />
                            </div>
                            <div className="project-info">
                                <h1>{project.name}</h1>
                                <p>{project.description}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Project
