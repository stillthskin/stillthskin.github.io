import React from 'react'
import { useState } from 'react'
import prof from '../assets/images/prof.jpg'
import profls from '../assets/images/profLS.png'
import '../index.css'

function Hero() {
    const readmorebtn = document.getElementById("read_more_btn");
    const [canread, togglecanread] = useState(false);
    function showmore() {
        console.log('something ' + canread);
        togglecanread(!canread);
    }
    return (
        <>
            <div id="about">
                <nav className="imgsect"><img src={prof} /></nav>
                <div className="descsect">
                    <h2>Mr. Dennis Kenda</h2>
                    <div className="introI"><span className="staticI">I'm a: </span><ul className="dynaI">
                        <li><span>Dev</span></li>
                        <li><span>Pentest</span></li>
                        <li><span>To Be Reviewed</span></li>
                    </ul>
                    </div>
                    <br />
                    <p id="my_intro" className={`my_intro ${canread ? 'my_intro-active' : ''}`}>Hello! I'm a web developer with a passion for creating beautiful and functional websites. I have been working in the field for several years, honing my skills in a variety of programming languages, including HTML, CSS, JavaScript, and PHP.

                        My approach to web development is focused on creating user-friendly and responsive websites that meet the unique needs of each client. I believe that good design should not only look great, but also be intuitive and easy to navigate.

                        Over the years, I have had the pleasure of working with a diverse range of clients, from small businesses to large corporations. Each project has presented its own set of challenges, and I am always excited to tackle new and exciting projects.

                        In addition to my technical skills, I am also a strong communicator and collaborator. I believe that effective communication is key to any successful project, and I am committed to keeping my clients informed and involved every step of the way.

                        When I'm not coding, you can usually find me exploring new hiking trails or trying out new recipes in the kitchen. I believe that a healthy work-life balance is essential to staying motivated and focused in my work.

                        Thank you for taking the time to learn a little bit about me. I look forward to the opportunity to work with you and help bring your website vision to life!</p>

                    <button id="read_more_btn" onClick={showmore}>Read More</button>
                </div>
            </div>

        </>


    )
}

export default Hero
