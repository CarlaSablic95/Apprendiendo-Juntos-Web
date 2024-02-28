import { useState } from 'react';
import { Link } from 'react-router-dom';
import { crearCuenta } from '../firebaseConfig/firebaseConfig';

const FormRegistroMaestro = () => {
   
    // Creo un estado para realizar seguimiento del avatar seleccionado, en principio, el valor de selectedAvatar es null
    // const [selectedAvatar, setSelectedAvatar] = useState(null);

    // // Función que llamo al hacer click en una avatar
    // const handleAvatarClick = (avatar) => { // Toma el nombre del avatar como argumento y
    //     // actualiza el estado con el nombre del avatar seleccionada
    //     setSelectedAvatar(avatar);
    //     setUsuario((prevValues) => ({
    //         ...prevValues, // ... => operador de propagación se utiliza para copiarme todas las propiedades del objeto prevUsuario y
    //         avatar: avatar // se agrega la nueva propiedad avatar al nuevo objeto. Guardo la imagen del usuario como parte del estado del usuario
    //     }))
    // };

    // Estado para el spinner
    const [loading, setLoading] = useState(false);

    // Estado para el manejo de errores en el formulario
    const [error, setError] = useState({
        nombre:"",
        apellido:"",
        email:"",
        contrasenia:""
    })

    // Envío del formulario
    const [usuario, setUsuario] = useState({ // Inicializo los valores
        // avatar: null,
        nombre:"",
        apellido:"",
        email:"",
        contrasenia:"",
    });

    // Destructuración
    const { nombre, apellido, email, contrasenia } = usuario;

    // Función para manejar los cambios en los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log("VALUE:" + value); // Carla
        // console.log("NAME:" + name); // nombre
        setUsuario({ 
            ...usuario,
            [name]: value
            // avatar: selectedAvatar 
        });
    };

// Detengo el envío del formulario (comportamiento por default del formulario) para el manejo de errores
const handleForm = async (e) => {
    e.preventDefault();

    // Declarar newErrors, objeto que contiene todos los errores de cada campo
    let newErrors = {};

    // Validación de los campos
    if(!nombre.trim()) {
        newErrors.nombre = "El nombre es obligatorio";
    } 

    if(!apellido.trim()) {
        newErrors.apellido = "El apellido es obligatorio";
    }    

    if(!email.trim()) {
        newErrors.email = "El email es obligatorio";
    } else if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        newErrors.email = "El email no tiene un formato válido";
    }

    if(!contrasenia.trim()) {
        newErrors.contrasenia = "La contraseña es obligatoria";
    } else if(contrasenia.length < 6 || contrasenia.length > 6) {
        newErrors.contrasenia = "La contraseña debe contener 6 caracteres";
    }

    // if(!avatar) {
    //     newErrors.avatar = "Seleccioná un avatar";
    // } 
    
    setError(newErrors);

    // Funcion existente Object.values()
    const hasErrors = Object.values(newErrors).some(error => error !== "");

    if(!hasErrors) {
        setLoading(true);
        setTimeout(async () => { // La función setTimeout() no es asincrónica por naturaleza
         
            console.log("Form enviado:", usuario);
            setLoading(false);
         
        // Guardo los datos en Firestore, dentro de una colección llamada usuarios
            try {
               await crearCuenta(usuario);
            } catch (e) {
                console.log(e)
            } 

            // Redireccionar al panel de administración
            location.replace("./");

        }, 800);
    } else {
        console.log("Hay errores de validación:", newErrors);
    }
};

    return (
            <form className="py-4 px-5" onSubmit={ handleForm }>
                {/* <p className="mb-0">Elegir avatar: <span className="text-danger">*</span></p>
                <small className="mb-5">Es obligatorio</small> */}
                {/* A cada div que contiene el avatar, le agrego una clase CSS condicionalmente dependiendo si elegí el avatar. Uso "plantillas literales" y "operador ternario" */}
              {/*   <div className="mb-4 d-flex justify-content-evenly align-items-center">
                    { imagenes.map((imagen) => (
                        <div key={ imagen.id } classname={`rounded-circle shadow-sm border-2 ${selectedAvatar === imagen.url ? "border border-success" : ""}`} onClick={ () => handleAvatarClick(imagen.url) }>
                            <img src={ imagen.url } alt="Avatar de maestros" className="rounded-circle img-maestro border"  />
                        </div>
                    ))

                    }
                    
                </div> */}
            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="text" className={ `form-control ${ error.nombre && "is-invalid" }` }
                    name="nombre" id="floatingInputName" placeholder="Juan" value={ nombre } onChange={ handleInputChange } />
                    <small className="text-danger">{ error.nombre }</small>
                    <label htmlFor="floatingInputName">Nombre <span className="text-danger">*</span> </label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="text" className={ `form-control ${ error.apellido && "is-invalid" }` } id="floatingInputSurname"
                    name="apellido" placeholder="Gomez" value={ apellido } onChange={ handleInputChange } />
                    <small className="text-danger">{ error.apellido }</small>
                    <label htmlFor="floatingInputSurname">Apellido <span className="text-danger">*</span></label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating mb-3">
                    <input type="email" className={ `form-control ${ error.email && "is-invalid" }` } id="floatingInputEmail" name="email"
                    placeholder="juan_gomez@gmail.com" value={ email } onChange={ handleInputChange } />
                    <small className="text-danger">{ error.email }</small>
                    <label htmlFor="floatingInputEmail">Email <span className="text-danger">*</span></label>
                </div>
            </div>

            <div className="mb-3">
                <div className="form-floating">
                    <input type="password" className={ `form-control ${ error.contrasenia && "is-invalid" }` } id="floatingPassword" name="contrasenia"
                    placeholder="Contraseña" value={ contrasenia } onChange={ handleInputChange } />
                    <small className="text-danger">{ error.contrasenia }</small>
                    <label htmlFor="floatingPassword">Contraseña <span className="text-danger">*</span></label>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <button type="submit" className="btn btn-primary mb-3" disabled={ loading }>{ loading ? <><span className="loader"></span> <span>Enviando</span></> : "Crear cuenta" }</button>
                <Link to="/iniciar-sesion" className="mb-3">Ya tengo una cuenta</Link>
            </div>
            </form>
    )
}

export default FormRegistroMaestro;