import Footer from "./Footer";
import { useMediaQuery } from 'react-responsive'


const Contact = () => {
    const mobile = useMediaQuery({ query: '(max-width: 600px)' })
    return (
        <>
            <div className="contact">
                <div className="contact-image">
                    <img src={require("../images/cat.png")}></img>
                </div>
                <div className="contact-text">
                    <h1>Ubicación</h1>
                    <p>Nos encontramos 25 metros norte de la Upiav en
                        San José, San Isidro de El General.<br/><br/>
                    </p>
                    {!mobile ? <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.584892429259!2d-83.70658872363208!3d9.369951583555965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa14eee81dabdcf%3A0xc2674bc3a192cc2c!2sCl%C3%ADnica%20Veterinaria%20Sergio%20Barrantes.%20P%C3%A9rez%20Zeled%C3%B3n.!5e0!3m2!1ses!2scr!4v1682879353154!5m2!1ses!2scr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p> :
                    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.584892429259!2d-83.70658872363208!3d9.369951583555965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa14eee81dabdcf%3A0xc2674bc3a192cc2c!2sCl%C3%ADnica%20Veterinaria%20Sergio%20Barrantes.%20P%C3%A9rez%20Zeled%C3%B3n.!5e0!3m2!1ses!2scr!4v1682879353154!5m2!1ses!2scr" width="400" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>}
                    
                    <br/><br/>
                    <h1>Teléfono</h1>
                    <p>+506 2771 0976</p><br/>
                    <p>+506 8393 2982</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;