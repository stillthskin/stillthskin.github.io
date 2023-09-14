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
                <button id=''><i className={theme ? "fa fa-car fa-2x" : "fa fa-spinner fa-spin"}></i></button>
                <button id='togglemenu'><i className={sidenavi ? 'fa fa-bars ' : 'fa fa-bars'}></i></button>

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
function showsidenavi() {
    console.log("The navi Button clicked");
}
export default Navi
