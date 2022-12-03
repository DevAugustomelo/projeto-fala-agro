





import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../imgs/logo-header.svg'
import  './footer.css'



function Footer () {
    return (
        <footer className="footer">

                <div id="logoAgro">

                    <a href="https://falaagro.com/" target={'_blank'}>
                        <img src={logo} alt="falaAgro"/>
                    </a>
                </div>
            <ul className="social-list">
                <li><a href="https://www.facebook.com/falaagroapp"><FaFacebook/></a></li>
                <li><a href="https://www.instagram.com/falaagroapp/"><FaInstagram/></a></li>
                <li><a href="https://www.linkedin.com/company/fala-agro"><FaLinkedin/></a></li>
            </ul>
            <p id="copy" className="copy-right" style={{fontSize: "15px"}}><span>Fala Agro - Todos os direitos reservados</span><br /> &copy; 2022</p>
        </footer>
    )

}

export default Footer;