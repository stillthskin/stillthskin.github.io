import React from 'react'
import { useState,useRef } from 'react'
import prof from '../assets/images/prof.jpg'
import profls from '../assets/images/profLS.png'
import '../index.css'

function Hero() {
    const dynaIRef = useRef(null);
    const settext = () =>{
        setTimeout(()=>{
            dynaIRef.current.innerText = "Dev";

        },0);
        setTimeout(()=>{
            dynaIRef.current.innerText = "QA-Engineer";

        },4000);
        setTimeout(()=>{
            dynaIRef.current.innerText = "Pentester";

        },8000);
    }
   settext();
   setInterval(settext,12000);
    const readmorebtn = document.getElementById("read_more_btn");
    const [canread, togglecanread] = useState(false);
    //canread? readmorebtn.innerHTML = "Read More":readmorebtn.innerHTML = "Read More";
    function showmore() {
        console.log('something ' + canread);
        togglecanread(!canread);
    }
    return (
        <>
            <div id="about">
                <nav className="imgsect"><img src={prof} /></nav>
                <div className="descsect">
                    <span className="Iname">Mr. Dennis Kenda</span><br/>
                    <div className="introI"><span className="staticI">I'm a: </span><span className="dynaI" ref={dynaIRef}></span>
        
                    </div>
                    <br />
                    <p id="my_intro" className={`my_intro ${canread ? 'my_intro-active' : ''}`}><b>Professional Summary:</b><br />

                        Dedicated and detail-oriented Computer Science graduate with a Bachelor’s Degree, specializing in web development. Proficient in HTML DOM, CSS, and JavaScript, including CSS preprocessors like Sass and Less. Demonstrated hands-on experience with JavaScript libraries such as jQuery and React. My primary stack revolves around Python and the Django framework, where I leverage the power of this dynamic duo to create robust and scalable web applications.

                        Adept in handling REST, Open API, and SOAP, with collaborative experience in UI/UX design tools. Comprehensive understanding of XML and JSON data formats, utilizing Git for streamlined development processes. Familiarity with content management systems like WordPress and adept at browser testing and debugging tools.

                        Bringing a holistic perspective to the web development process, merging technical proficiency with a keen eye for design principles. Well-versed in SEO, dedicated to delivering high-quality results in fast-paced Agile environments. Strong analytical and multitasking skills, coupled with a growth mindset for continuous learning and adaptation to emerging technologies. Effective communication skills enable seamless collaboration with cross-functional teams, ensuring project success.</p>

                    <button id="read_more_btn" onClick={showmore}>|More About|</button>
                </div>
                <br/>
            </div>

        </>


    )
    
}

export default Hero
