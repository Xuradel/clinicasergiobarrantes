import Footer from "./Footer";

const About = () => {
    return (
        <>
            <div className="about">
                <div className="side1">
                    <div className="about-text">
                        <p><span>¡Bienvenido a nuestra clínica veterinaria!</span> Somos un equipo de profesionales apasionados
                            y dedicados a brindar atención de alta calidad a todos nuestros pacientes.
                            Aquí hay información sobre nosotros:</p><br/>
                        <h1>Nuestros Veterinarios</h1>
                        <p>Nuestro equipo de veterinarios tiene una amplia formación y experiencia en el campo de
                            la medicina veterinaria. Todos nuestros veterinarios están licenciados y han recibido
                            capacitación avanzada en diversas áreas de la salud y el bienestar animal.</p><br/>
                        <h1>Nuestra Filosofía</h1>
                        <p>En nuestra clínica veterinaria, creemos en un enfoque preventivo en la atención veterinaria.
                            Animamos a los propietarios de mascotas a que realicen chequeos regulares y vacunaciones para
                            ayudar a prevenir enfermedades antes de que ocurran. En caso de que su mascota enferme,
                            ofrecemos una amplia gama de opciones de diagnóstico y tratamiento para garantizar que
                            reciba la mejor atención posible.</p><br/>
                        <h1>Nuestro Personal</h1>
                        <p>Nuestro equipo de profesionales veterinarios incluye técnicos y asistentes veterinarios
                            experimentados y compasivos, que están capacitados para brindar una atención excepcional
                            a sus mascotas.</p>
                    </div>

                    <div className="about-image">
                        <img src={require('../images/vet1.png')}></img>
                    </div>
                </div>
                <div className="side2">
                    <div className="about-text">
                        <h1>Nuestras Instalaciones</h1>
                        <p>Contamos con instalaciones modernas y equipadas con la última tecnología y equipos para brindar
                            la mejor atención posible a sus mascotas. Nos comprometemos a proporcionar un ambiente seguro y
                            cómodo para sus mascotas durante su visita con nosotros.</p><br/>
                        <h1>Nuestra Participación en la Comunidad</h1>
                        <p>Estamos orgullosos de estar activamente involucrados en la comunidad, trabajando con organizaciones
                            locales de mascotas y organizaciones benéficas para promover la salud y el bienestar de los animales.</p><br/>
                        <h1>Testimonios</h1>
                        <p>No solo tome nuestra palabra, ¡escuche lo que dicen nuestros clientes sobre sus experiencias con nosotros!
                            Visite nuestra página de testimonios para leer acerca de algunos de nuestros clientes satisfechos y sus mascotas.
                            <br />
                            Gracias por considerar nuestra clínica veterinaria para las necesidades de atención médica de su mascota.
                            ¡Esperamos conocerle a usted y a sus adorables amigos peludos.</p>
                    </div>
                    <div className="about-image">
                        <img src={require('../images/vet2.png')}></img>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default About;