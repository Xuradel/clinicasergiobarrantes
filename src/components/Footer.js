import './Footer.css'

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer__addr">
                <h1 class="footer__logo">Clínica Sergio Barrantes</h1>

                <h2>Contacto</h2>

                <address>
                Nos encontramos 25 metros norte de la Upiav en San José, San Isidro de El General.<br />

                    <a class="footer__btn" href="mailto:example@gmail.com">Email</a>
                </address>
            </div>

            <ul class="footer__nav">
                <li class="nav__item">
                    <h2 class="nav__title">Veterinaria</h2>

                    <ul class="nav__ul">
                        <li>
                            <a href="#">Nosotros</a>
                        </li>

                        <li>
                            <a href="#">Contacto</a>
                        </li>

                        <li>
                            <a href="#">Ayuda</a>
                        </li>
                    </ul>
                </li>

                <li class="nav__item nav__item--extra">
                    <h2 class="nav__title">Servicios</h2>

                    <ul class="nav__ul nav__ul--extra">
                        <li>
                            <a href="#">Consultas</a>
                        </li>

                        <li>
                            <a href="#">Vacunación</a>
                        </li>

                        <li>
                            <a href="#">Cirugía</a>
                        </li>

                        <li>
                            <a href="#">Odontología</a>
                        </li>

                        <li>
                            <a href="#">Cuidado</a>
                        </li>

                        <li>
                            <a href="#">Terapia</a>
                        </li>
                    </ul>
                </li>

                <li class="nav__item">
                    <h2 class="nav__title">Legal</h2>

                    <ul class="nav__ul">
                        <li>
                            <a href="#">Política de privacidad</a>
                        </li>

                        <li>
                            <a href="#">Términos y condiciones</a>
                        </li>

                        <li>
                            <a href="#">Mapa</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div class="legal">
                <p>&copy; 2023 Clínica Sergio Barrantes. Todos los derechos reservados.</p>

                <div class="legal__links">
                    <span>Hecho con <span class="heart">♥</span> para nuestras mascotas.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;