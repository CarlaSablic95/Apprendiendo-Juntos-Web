import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './assets/components/Header/Header';
import Inicio from './assets/pages/Inicio';
import Registro from './assets/pages/Registro';
import IniciarSesion from './assets/pages/IniciarSesion';
import Footer from './assets/components/Footer/Footer';
import Juegos from './assets/pages/Juegos';
import PanelAdmin from './assets/pages/PanelAdmin';
// import { useState } from 'react';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
      {/* Header estará presente en todas las páginas de mi aplicación */}
       <Header />
        <Routes>
          {/* Componentes que se renderizarán cuando las rutas coincidan con la url actual */}
          <Route path='/' element={ <Inicio /> } />
          <Route path='/registro' element={ <Registro /> } />
          <Route path='/iniciar-sesion' element={ <IniciarSesion /> } />
          <Route path='/juegos' element={ <Juegos /> } />
          <Route path='/panel-admin' element={ <PanelAdmin /> } />
        </Routes>

         {/* Footer estará presente en todas las páginas de mi aplicación */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
