import React from 'react'
import { useState } from 'react'
import '../index.css'

function Navi() {
    const [sidenavi, showsidenavi] = useState(false);
    const [theme, toggletheme] = useState(true);
    return (
        <>
            <h2>Hello world</h2>
            <div className='navi'>
                <a href='home'>Home</a>
                <ul>
                    <li><a href='home'>1</a></li>
                    <li><a href='home'>2</a></li>
                    <li><a href='home'>3</a></li>
                    <li><a href='home'>4</a></li>


                </ul>
                <button id=''><i className={theme ? " fa-solid fa-sun" : "fa-solid fa-moon"}></i></button>
                <button id='togglemenu'>---</button>

            </div >
            <div className='sidenavi'>
                <ul>
                    <li><a href='home'>1</a></li>
                    <li><a href='home'>2</a></li>
                    <li><a href='home'>3</a></li>
                    <li><a href='home'>4</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navi
