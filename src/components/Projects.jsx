import { Link } from 'react-router-dom'
import React from 'react'
import '../index.css'
import subl from '../assets/images/subl.jpg'

function Projects() {
    return (
        <>
            <div id="projects">
                <br />
                <h4>Projects:</h4>

                <ul>
                    <li><Link i to="https://github.com/stillthskin/Andapp"><img src={subl}/> </Link>Android App</li>
                    <li><Link i to="https://github.com/stillthskin/blockchain"><img src={subl}/> </Link>Blockchain Project</li>
                    <li><Link i to="https://github.com/stillthskin/Robotdodge"><img src={subl}/> </Link>Robot Dodge Game</li>
                </ul>
            </div>
        </>
    )
}

export default Projects
