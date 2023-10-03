import React from 'react'
import '../index.css'

function Footer() {
    var moth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dateVariable = new Date();
    var year = dateVariable.getFullYear();
    var month = dateVariable.getMonth();
    var full_year = moth[month] + " " + year;
    //document.getElementById("copydate").innerHTML = full_year;
    //setTimeout(function () { date_time(); }, 1000);
    return (
        <>
            <footer className="foot">
                <div className="social">
                    Find me on my social media:<br />
                    <ul>
                        <li><a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.linkedin.com"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com"><i className="fa fa-codepen" aria-hidden="true"></i>
                        </a></li>
                    </ul>
                </div>
                <p className="copywright"><b>©<span id="copydate">{full_year}</span></b> <b>Kenda</b>. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer
