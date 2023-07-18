import Footer from "./Footer";
import { useMediaQuery } from 'react-responsive'
import { Routes, Route, Link } from 'react-router-dom';
import Contact from "./Contact";
import ChooseSection from "./ChooseSection";
import Service from "./Service";
const Homepage = () => {
    const mobile = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <>
            <div className="home">
                <div className="text-zone">
                    <h1 className="vet-h">
                        Brindamos atención médica de alta calidad para tus queridas mascotas.
                    </h1>
                    <p className="vet-p">Veterinaria Barrantes está aquí para traerle amor, salud y felicidad a sus mascotas.
                        Juntos por la salud y felicidad de tus mascotas.
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
                    <img src={require('../images/dog.png')}></img>
                </div>
            </div>

            <Routes>
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <ChooseSection />
            <Service></Service>
            <Footer />
        </>
    )
}

export default Homepage;

