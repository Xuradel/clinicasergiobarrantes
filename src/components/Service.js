import React from 'react'
import { Link } from 'react-router-dom';

function Service() {

    return (
        <div className='service-section'>
            <h1 className='service-title'>
                Algunos de nuestros servicios
            </h1>
            <div className="previews">
                <div className="service-card1">
                    <div className="service-card-text">
                        <h2>Consultas y exámenes de rutina</h2>
                    </div>
                </div>
                <div className="service-card2">
                    <div className="service-card-text">
                        <h2>Vacunación y prevención</h2>
                    </div>
                </div>
                <div className="service-card3">
                    <div className="service-card-text">
                        <h2>Cirugía y procedimientos</h2>
                    </div>
                </div>
            </div>
            <div className='more-button'>
                <a href="#" className='nav-link'><Link to='/services' className='nav-link'>
                    <button class="cta">
                        <span class="hover-underline-animation">Toca para conocer nuestros mas de nuestros servicios </span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                        </svg>
                    </button></Link></a>
            </div>

        </div>
    )
}

export default Service
