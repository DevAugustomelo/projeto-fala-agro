





import '../carrossel/carro.css'

import img1 from './imgs-sel/evento.png'
import img2 from './imgs-sel/negocio.png'
import img3 from './imgs-sel/noticia.png'




export default function Carrossel() {



    return (
        <div className="slider">
        <div className="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>

            <div className="slide first">
                <img src={img1} alt="Imagem 1"/>
            
            </div>
            <div className="slide">
                <img src={img2} alt="Imagem 2"/>
            </div>
            <div className="slide">
                <img src={img3} alt="Imagem 3"/>
            </div>

            <div className = "navigation-auto">
                <div className = "auto-btn1"></div>
                <div className = "auto-btn2"></div>
                <div className = "auto-btn3"></div>
            </div>
        </div>
        
        <div className = "manual-navigation">
            <label htmlFor="radio1" className = "manual-btn"></label>
            <label htmlFor="radio2" className = "manual-btn"></label>
            <label htmlFor="radio3" className = "manual-btn"></label>
        </div>
    
        
    </div>
    
    )
}


