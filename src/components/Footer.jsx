import React from 'react'
import '../index.css'

function Footer() {
    var dateVariable = Date()
    return (
        <>
            <div className='foot'>
                <nav className='left'>
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </nav>
                <nav className='right'>
                    <div className='rightL'>
                        <ul>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                            <li>2</li>
                        </ul>
                    </div>
                    <div className='rightR'>
                        <ul>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                            <li>3</li>
                        </ul>
                    </div>
                </nav>

            </div>
            {dateVariable}
        </>
    )
}

export default Footer
