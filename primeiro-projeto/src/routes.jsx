





import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Contato from './pages/Contato'
import Senha from './pages/senha'


function Ancor() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/contato' element={<Contato/>} />
                <Route path='/senha' element={<Senha/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Ancor;