import React from 'react'
import '../index.css'
import subl from '../assets/images/subl.jpg'

function Projects() {
    return (
        <>
            <div id="projects">
                <br />
                <h3>Projects:</h3>

                <ul>
                    <li><a href=""><img src={subl} />Project I</a></li>
                    <li><a href="#"><img src={subl} />Project II</a></li>
                    <li><a href="#"><img src={subl} />Project III</a></li>
                </ul>
            </div>
        </>
    )
}

export default Projects
