import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './assets/components/Header/Header';
import Inicio from './assets/pages/Inicio';
import Registro from './assets/pages/Registro';
import RegistroMaestro from './assets/components/Auth/FormRegistroMaestro';
import IniciarSesion from './assets/pages/IniciarSesion';
import Footer from './assets/components/Footer/Footer';
import Juegos from './assets/pages/Juegos';
import PanelAdmin from './assets/pages/PanelAdmin';
import CuentoSimon from './assets/pages/Actividades/Lengua/Cuentos/CuentoSimon';
import Vocales from './assets/pages/Actividades/Lengua/Vocales/Vocales';
import Consonantes from './assets/pages/Actividades/Lengua/Consonantes/Consonantes';
import Piano from './assets/pages/Actividades/Musica/Piano/Piano';


const Layout = ({ children }) => {
  return (
    <>
      <Header nombreUsuario={ localStorage.getItem("nombreUsuario") } avatarUsuario={ localStorage.getItem("avatarUsuario") } />
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
          <Route path='/cuento-simon' element={ <Layout><CuentoSimon /></Layout> } />
          <Route path='/vocales' element={ <Layout><Vocales /></Layout> } />
          <Route path='/consonantes' element={ <Layout><Consonantes /></Layout> } />
          <Route path='/piano' element={ <Layout><Piano /></Layout> } />

          {/* Componentes sin Header ni Footer */}
          <Route path='/panel-admin' element={ <PanelAdmin /> } />
          <Route path='/registro-admin' element={  <RegistroMaestro />} />
          <Route path='/registro' element={  <Registro />} />
          <Route path='/iniciar-sesion' element={ <IniciarSesion /> } />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
