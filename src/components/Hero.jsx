import React from 'react'
import prof from '../assets/images/prof.jpg'
import profls from '../assets/images/profLS.png'
import '../index.css'

function Hero() {
    return (
        <>
            <div className='hero'>
                <div className='heroleft'>
                    <h1>Hi, My name is <span className='intro'>Vlad</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem sequi quasi quam eius consequatur aliquam dicta!
                        Quidem odio blanditiis ab! Labore quam cupiditate eius
                        ipsum recusandae vero iste consequatur velit.</p>
                </div>
                <div className='heroright'><img src={prof} /></div>


            </div>
        </>
    )
}

export default Hero
