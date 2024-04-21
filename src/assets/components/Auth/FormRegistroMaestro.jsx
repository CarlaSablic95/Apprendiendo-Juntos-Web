import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  Maestra  from "./images/maestra.png";
import MostrarContrasenia from "./images/ver.png";
import OcultarContrasenia from "./images/ocultar.png";
import { db } from "../firebaseConfig/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
// Importando los módulos de Firebase
import { app } from "../firebaseConfig/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '@splidejs/react-splide';

const auth = getAuth(app);
const usuarios = collection(db, "usuarios");

const FormRegistroMaestro = () => {
  const navigate = useNavigate();
    // Estado para controlar la imagen de perfil
  const [ selectedImage, setSelectedImage ] = useState(null);

  const [form, setForm] = useState({
    avatar: null,
    nombre: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    // errores para el formulario
    errorNombre: "",
    errorEmail: "",
    errorPassword: "",
  });

  const [mostrarPass, setMostrarPass] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleMostrarPass = () => {
      setMostrarPass(!mostrarPass);
  }

  // SELECCION DE AVATAR

  const handleImageClick = (imagen) => { //
      setSelectedImage(imagen);
      console.log("imagen ", imagen);
      setForm(prevState => ({
        ...prevState,
        avatar: imagen
      }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm(prevState => ({
        ...prevState,
        [id]: value
    }));

    if (id === "nombre") {
        setErrors(prevState => ({
            ...prevState,
            errorNombre: ""
        }))
    } 
    
    if (id === "email") {
        setErrors(prevState => ({
            ...prevState,
            errorEmail: ""
        }))
    } else if (id === "password") {
        setErrors(prevState => ({
            ...prevState,
            errorPassword: ""
        }))
    }
}

  // FORMULARIO
  const handleForm = (e) => {
    e.preventDefault();

    const { nombre, email, password } = form;

    const avatar = selectedImage;

    // Validación de los campos
    if (!nombre.trim()) {
      setErrors(prevState => ({
        ...prevState,
        errorNombre: "El nombre es requerido"
      }));
    }

    if (!email.trim()) {
      setErrors(prevState => ({
        ...prevState,
        errorEmail: "El email es requerido"
      }));
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setErrors(prevState => ({
        ...prevState,
        errorEmail: "El email no tiene un formato válido"
      }));
    }

    if (!password.trim()) {
      setErrors(prevState => ({
          ...prevState,
          errorPassword: "La contraseña es requerida"
      }))
  } else if (password.length < 8) {
      setErrors(prevState => ({
          ...prevState,
          errorPassword: "La contraseña debe tener al menos 8 caracteres"
      }));
  } 

    // Funcion existente Object.values()
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!hasErrors) {
      setLoading(true);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
              const user = userCredential.user;
              console.log("CREDENCIAL DE USUARIO: ", user);
  
              try {
                  const docRef = await addDoc(collection(db, "usuarios"), {
                      uid: user.uid,
                      nombre: nombre,
                      avatar: selectedImage
                  });
                  
                  setForm(prevState => ({
                      ...prevState,
                      avatar: selectedImage,
                      nombre: nombre,
                      email: email,
                      password: password
                  }));
                  
                  console.log("ÉXITO: Documento guardado con ID ", docRef.id);
                  // Guardo el nombre en localStorage
                  localStorage.setItem("nombreUsuario", nombre);
                  localStorage.setItem("avatarUsuario", selectedImage);

                  navigate("/");

              } catch (error) {
                  console.log("Error al añadir documento: ", error);
              }
          }).catch((error) => {
              const errorMessage = error.message;
              console.log("MENSAJE DE ERROR", errorMessage);
              console.log("ERROR", error);
          }).finally(() => {
              setLoading(false);
          });
  }
  };

  return (
    <section className="container-fluid">
      <div className="fondo-form row justify-content-evenly align-items-center">
        <div className="col-12 col-md-4">
          <h1 className="text-white">Registro para admin</h1>
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
          <div className="card my-5">
            <div className="title-card bg-primary py-3">
              <p className="text-center text-white mb-0">Registro</p>
            </div>
            <form className="py-4 px-4 px-md-5" onSubmit={handleForm}>
              <p className="mb-2">Elegir avatar:</p>
              {/* A cada div que contiene el avatar, le agrego una clase CSS condicionalmente dependiendo si elegí el avatar. Uso "plantillas literales" y "operador ternario" */}
              <div className="mb-4 d-flex justify-content-evenly align-items-center">
                <div className="rounded-circle shadow-sm border-2">
                  <img
                    src={ Maestra }
                    alt="Imagen del maestro"
                    className={`rounded-circle img-maestro shadow-sm border-2 ${selectedImage === Maestra ? "border border-success" : ""}`} onClick={ () => handleImageClick(Maestra) }
                    style={{ width: "70px" }}
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${errors.errorNombre && "is-invalid"}`}
                    name="nombre"
                    id="nombre"
                    placeholder="Juan"
                    onChange={ handleInputChange }
                  />
                  <small className="text-danger">{errors.errorNombre}</small>
                  <label htmlFor="nombre">
                    Nombre <span className="text-danger">*</span>{" "}
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className={`form-control ${errors.errorEmail && "is-invalid"}`}
                    id="email"
                    name="email"
                    placeholder="juan_gomez@gmail.com"
                    onChange={ handleInputChange }
                  />
                  <small className="text-danger">{errors.errorEmail}</small>
                  <label htmlFor="email">
                    Email <span className="text-danger">*</span>
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div className="form-floating">
                <input type={ mostrarPass ? "text" : "password"} className={`form-control position-relative ps-3 ${ errors.errorPassword ? "is-invalid" : ""}`}
                    id="password" placeholder="Contraseña"
                    onChange={ handleInputChange } />
                  <small className="text-danger">{errors.errorPassword}</small>
                  {  mostrarPass ? <span className="position-absolute icono-ojo"><img src={ MostrarContrasenia } onClick={ handleMostrarPass }  alt="ícono de ojo" /></span> : <span className="position-absolute icono-ojo"><img src={ OcultarContrasenia } onClick={ handleMostrarPass }  alt="ícono de ojo tachado" /></span> }

                  <label htmlFor="contrasenia">
                    Contraseña <span className="text-danger">*</span>
                  </label>
                </div>
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center">
                <button
                  type="submit"
                  className="btn btn-primary mb-3"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="loader"></span>{" "}
                      <span>Creando cuenta</span>
                    </>
                  ) : (
                    "Crear cuenta"
                  )}
                </button>
                <span>
                  Si ya tenés cuenta.{" "}
                  <Link to="/iniciar-sesion" className="mb-3">
                    Iniciá sesión
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormRegistroMaestro;
