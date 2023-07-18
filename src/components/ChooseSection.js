import React from 'react'
function ChooseSection() {
    return (
        <div className='choose-section'>
            <div className="choose" id="escoger">
                <div className="choose-text">
                    <h1 className="choose-h">Por qué elegirnos?</h1>
                    <p className="choose-p">Somos la mejor veterinaria de Perez Zeledon.
                        Ademas de tener mucha experiencia y seguridad en el cuido de mascotas.</p>
                </div>
                <div className='choose-image'>
                    <img src={require("../images/pets.png")} className="choose-img"></img>
                </div>
            </div>
        </div>


    )
}

export default ChooseSection
