import React from 'react'
import { sendmail } from './mail'


function Contact() {

    function showtips() {
        const tipform = document.getElementById("tipform");
        alert("Tip Ok");
        tipform.style.display = "block";
    }
    return (
        <>
            <h4>FAQs:</h4>
            <div className='contact'>
                <form method='post' >
                    <input type='text' id='name' name='names' placeholder='Full Names...' required />
                    <input type='email' id='email' name='names' placeholder='Example@mail.com...' required />
                    <textarea id='message' placeholder='Your Message...'></textarea> <br />
                    <button id='submit' onClick={sendmail} type='submit'>Send</button>
                </form>
                <label>Buy Me Coffee for no reason: </label>
                <br />
                <button onClick={showtips} id='tip'></button>
                <form id='tipform' action="" method='post'>
                    <input type="text" placeholder='Phone' /> <br />
                    <input type='number' placeholder='Amont' /> <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact
