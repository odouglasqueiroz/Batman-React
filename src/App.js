import './App.css';
import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';
import Footer from './components/footer/footer';
import Pagament from './components/pagament/pagament';


function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/fotos' element={<Fotos />} />
        <Route path='/comentarios' element={<Comentarios />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/pagament' element={<Pagament />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
