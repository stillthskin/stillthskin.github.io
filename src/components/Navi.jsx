import React from 'react'
import { useState } from 'react'
import '../index.css'


function Navi() {
    const [sidenavi, setsidenavi] = useState(false);
    const [theme, settheme] = useState(true);
    return (
        <>
            <div className='navi'>
                <a href='home'>Home</a>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#home'>Projects</a></li>
                    <li><a href='#home'>Contact</a></li>
                    <li><a href='#home'>About</a></li>


                </ul>
                <button id='' onClick={toggltheme}><i className={theme ? "fa fa-moon-o" : "fa fa-spinner fa-spin"}></i></button>
                <button id='togglemenu' onClick={showsidenavi}><i className={sidenavi ? 'fa fa-bars ' : 'fa fa-bars'}></i></button>

            </div >
            <br />
            <div id='sidenavi' className={sidenavi ? 'sidenavi show' : 'sidenavi hide'}>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#home'>Projects</a></li>
                    <li><a href='#home'>Contact</a></li>
                    <li><a href='#home'>About</a></li>
                </ul>
            </div>
        </>
    )
}
function showsidenavi() {
    console.log("The navi Button clicked");
    alert("The navi Button clicked" + sidenavi);

}
function toggltheme() {
    alert("The arrow fungtion of click works");
    console.log("The arrow fungtion of click works");
}

export default Navi
