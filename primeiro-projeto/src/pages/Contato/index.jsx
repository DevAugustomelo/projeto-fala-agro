



import NavBar from '../../componentes/menu-horizontal/navBar';
import Footer from '../../componentes/footer/footer';

import {FaDownload,FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {BiWorld} from 'react-icons/bi'
import logo from '../../componentes/imgs/logo-header.svg'

import './contato.css'

export default function Contato() {
    return (
        <div className='box-contato'>
            <div className='nav'><NavBar/></div>

            <div className='logo-links'>
                {/* <img src="https://falaagro.com/wp-content/uploads/2021/10/Links@2x-300x51.png" alt="logo-links" /> */}
                
            </div>
            
            <div className='itens-btn'>
            
                <button id='btn1'> <a href="https://falaagro.com/pre-registro/"><FaDownload className='icone'/> Baixe o App </a></button>
            
                <button id='btn2'> <a href="https://www.instagram.com/falaagroapp/"><FaInstagram className='icone'/> Instagram </a></button>
                <button id='btn3'> <a href="https://www.facebook.com/falaagroapp"><FaFacebook className='icone'/> Facebook</a></button>
                <button id='btn4'> <a href="https://www.linkedin.com/company/fala-agro"><FaLinkedin className='icone'/> Linkedin</a></button>
                <button id='btn5'> <a href="https://falaagro.com/"><BiWorld className='icone'/> Acesse o Site</a></button>

            </div>

            <Footer/>
            
        </div>
    );
}