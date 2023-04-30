import Footer from "./Footer";
import { useMediaQuery } from 'react-responsive'
import { Routes, Route, Link } from 'react-router-dom';
import Contact from "./Contact";

const Homepage = () => {
    const mobile = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <>
            <div className="home">
                {!mobile ?
                    <img src={require("../images/vetPC.png")} className="home-background"></img> :
                    <img src={require("../images/vetMobile.png")} className="home-background"></img>}
                <div className="text-zone">
                    <p className="vet-title">Veterinaria.</p>
                    <h1 className="vet-h">
                        Cuidando tus mascotas por nuestros veterinarios profesionales.
                    </h1>
                    <p className="vet-p">Veterinaria Barrantes está aquí para traerle amor, salud y felicidad a sus mascotas.
                        Estamos para darle la mejor experiencia posible.
                    </p>

                    <a href="#escoger" className="contact-link">
                        <button class="contactButton"> Comenzar
                            <div class="iconButton">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                            </div>
                        </button></a>
                    <div className="perks">
                        <h1 className="perk1">10K+<br /><span><p className="perk-p">Clientes</p></span></h1>
                        <h1 className="perk2">55<br /><span><p className="perk-p">Años</p></span></h1>
                        <h1 className="perk3">1k+<br /><span><p className="perk-p">Atendidos</p></span></h1>
                    </div>
                </div>
                <div className="home-image-zone">
                    {/* <img src={require("../images/def.png")} className="home-image"></img> */}
                </div>
            </div>
            <div className="reviews">
                <div className="reviews-elements">
                    {mobile ?
                        null :
                        <img src={require("../images/reviews.png")} className="review-img"></img>}
                </div>
            </div>
            <div className="choose" id="escoger">
                <div className="choose-text">
                    <h1 className="choose-h">Por qué elegirnos?</h1>
                    <p className="choose-p">Somos la mejor veterinaria de Perez Zeledon.
                        Ademas de tener mucha experiencia y seguridad en el cuido de mascotas.</p>
                </div>
                <img src={require("../images/choose.png")} className="choose-img"></img>
            </div>
            <Routes>
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Homepage;

