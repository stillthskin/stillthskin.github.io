import React from 'react'
import { useState } from 'react'
import '../index.css'


function Navi() {
    const [sidenavi, setsidenavi] = useState(false);

    const [theme, settheme] = useState(false);
    function showhidemenu() {
        //sidenavi = true;
        setsidenavi(!sidenavi);
        //alert("The navi Button clicked" + sidenavi);
        console.log("The navi Button clicked");
    }
    function changeTheme() {
        theme ? document.querySelector("body").setAttribute('theme', 'light') : document.querySelector("body").setAttribute('theme', 'dark');
        //alert("The arrow fungtion of click works");
        settheme(!theme);
        console.log("The arrow fungtion of click works");
    }
    return (
        <>
            <div className='navi'>
                <a href='home'><i className='fa fa-home'></i></a>
                <ul>
                    <li><a href='#home'><i className='fa fa-home'></i> Home</a></li>
                    <li><a href='#projects'><i className="fa fa-github"></i> Projects</a></li>
                    <li><a href='#contact'><i className='fa fa-envelope'></i> Contact</a></li>
                    <li><a href='#about'><i className='fa fa-info'></i> About</a></li>
                </ul>
                <button id='' onClick={changeTheme}><i className={theme ? "fa fa-moon-o" : "fa fa-sun-o"}></i></button>
                <button id='togglemenu' onClick={showhidemenu}><i className={sidenavi ? 'fa fa-times' : 'fa fa-bars'}></i></button>

            </div >
            <br />
            <div id='sidenavi' className={`sidenavi ${sidenavi ? 'sidenavi-active' : ''}`}>
                <ul>
                    <li><a href='#home'><i className='fa fa-home'></i> Home</a></li>
                    <li><a href='#home'><i className="fa fa-github"></i> Projects</a></li>
                    <li><a href='#home'><i className='fa fa-envelope'></i> Contact</a></li>
                    <li><a href='#home'><i className='fa fa-info'></i> About</a></li>
                </ul>
            </div >
        </>
    )
}


export default Navi
