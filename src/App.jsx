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


const Layout = ({ children }) => {
  return (
    <>
      <Header />
        { children }
      <Footer />
    </>
  )
};



function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>

        <Routes>
          {/* Componentes con Header y Footer, que se renderizarán cuando las rutas coincidan con la url actual */}
          <Route path='/' element={ <Layout><Inicio /></Layout> } />
          <Route path='/juegos' element={ <Layout><Juegos /></Layout>  } />

          {/* Componentes sin Header ni Footer */}
          <Route path='/panel-admin' element={ <PanelAdmin /> } />
          <Route path='/registro' element={  <Registro />} />
          <Route path='/iniciar-sesion' element={ <IniciarSesion /> } />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
