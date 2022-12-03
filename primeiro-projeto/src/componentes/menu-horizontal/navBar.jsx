







import {Link} from 'react-router-dom'
import logo from '../imgs/logo-header.svg'
import './nav-bar.css'

function NavBar () {
    return (
        <div>

        
            <nav>
                <div className='logoAgro'>
                    <a href="https://falaagro.com/" target={'_blank'}><img width={230} height={45} src={logo} alt="falaAgro" /></a>
                </div>

                <ul className='nav-list'>
                    
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#carro">App</a></li>
                        {/* <li><Link to='#dowload'>Download</Link></li> */} 
                        <li><a href='#download'>Download</a></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <li><a href="#newsletter">Newsletter</a></li>
                    
                </ul>

            </nav>
        </div>
    )

}

export default NavBar