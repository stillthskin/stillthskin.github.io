import React from 'react'
import '../index.css'

function Footer() {
    var moth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dateVariable = new Date();
    var year = dateVariable.getFullYear();
    var month = dateVariable.getMonth();
    return (
        <>
            <div className='copyright'>
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
                    <br />

                </div>
                <p>&copy;{moth[month] + "," + year}</p>
            </div>

        </>
    )
}

export default Footer
