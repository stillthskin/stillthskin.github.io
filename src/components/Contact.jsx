import React from 'react'
import { useRef } from 'react';
import { sendmail } from './mail'


function Contact() {
    var myform = useRef();
    function sendmail() {
        
        var params = {
            name: myform.current.name.value,
            email: myform.current.email.value,
            message: myform.current.message.value,
        }
        alert(params.name+" and "+params.email+" says "+params.message);
        const service_id = "service_o80g188";
        const template_id = "template_meed5oh";
        const public_key = "jnfSL9hIpXqmATE3I";
    
        emailjs.send(service_id, template_id, params, public_key)
            .then(
                res => {
                    myform.current.name.value = "";
                    myform.current.email.value = "";
                    myform.current.message.value = "";
                    alert("Meaage sent successfully");
    
                })
            .catch((err) => console.log(err));
    };
    

    function showtips() {
        //const tipform = document.getElementById("tipform");
        /*
        const tipform = useRef();

        if(tipform.current.style.display=="none"){
            tipform.current.style.display=="block";
        }
       else{
        tipform.current.style.display=="none";
        }
        */
    }
    return (
        <>
            <h4>FAQs:</h4>
            <div className='contact'>
                <form method='post' ref={myform}>
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
