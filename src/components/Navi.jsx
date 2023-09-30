import React from 'react'
import { useState } from 'react'
import '../index.css'


function Navi() {
    //const sidenavigation = document.getElementById("sidenavi");
    const [sidenavi, setsidenavi] = useState(false);
    //sidenavi ? sidenavigation.style.display("none") : sidenavigation.style.display("none")

    const [theme, settheme] = useState(true);
    function showhidemenu() {
        //sidenavi = true;
        setsidenavi(!sidenavi);
        alert("The navi Button clicked" + sidenavi);
        console.log("The navi Button clicked");

    }
    function changeTheme() {
        settheme(!theme);
        alert("The arrow fungtion of click works");
        console.log("The arrow fungtion of click works");
    }
    return (
        <>
            <div className='navi'>
                <a href='home'><i className='fa fa-home'></i></a>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#home'>Projects</a></li>
                    <li><a href='#home'>Contact</a></li>
                    <li><a href='#home'>About</a></li>


                </ul>
                <button id='' onClick={changeTheme}><i className={theme ? "fa fa-moon-o" : "fa fa-spinner fa-spin"}></i></button>
                <button id='togglemenu' onClick={showhidemenu}><i className={sidenavi ? 'fa fa-bars ' : 'fa fa-bars'}></i></button>

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


export default Navi
