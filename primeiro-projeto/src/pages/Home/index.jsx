





import '../Home/home.css'
import '../../index.css'

import Carrossel from '../../componentes/carrossel/carrossel';
import Donwloadiv from '../../componentes/downloadiv';
import Footer from '../../componentes/footer/footer';
import Links from '../../componentes/Links';
import NavBar from '../../componentes/menu-horizontal/navBar';
import { FiSearch } from "react-icons/fi";

import bg from '../../componentes/imgs/bg_falaAgro.png'

function Home() {

  const mensagem = "Desafio FalaAgro"
 

  return (
    <div className='app'>


      <div><NavBar/></div>
      

      
      <div className='links'><Links/></div>

      <h1 className='shadow' style={{color:'#7FE613', fontSize: '5em'}}>{mensagem}</h1>

      <section id='carro' className='carro'>
        <p className='slideRight'>Do AGRO, para o AGRO, pelo AGRO.</p>
        <div id='box'>
          <Carrossel/>
        </div>
      </section>
      <p className='slideLeft' style={{color: '#3D221B', fontWeight: 'bold'}}>O app que dá voz ao agro.</p>

      <div id='download'>
        <Donwloadiv/>        
      </div>
      
      
      <section className='bg'>
       
        <h4 style={{fontSize:"2em"}}>Pesquise seu tema favorito.</h4>

        <div className='input-box'>
          <input type="text" placeholder='Escreva seu Tema aqui...' />
          <button><FiSearch/></button>
        </div>

        
        <img src={bg} alt="bg-image" />

      </section>


      <section id='newsletter' className="news">

        <p className='slideRight'>Inscreva-se na nossa Newsletter</p>
        <h1 className='slideLeft'>Seja o Primeiro a saber sobre as novidades do setor Rural.</h1>
        
        <div className='input-email'>
          <input type="text" placeholder='Seu melhor email aqui...' />
        </div>
          <button id='btn-enviar'>Enviar</button>
      </section>


      
      <div className='footer'> <Footer/> </div>
      
     
    </div>
  )
}

export default Home