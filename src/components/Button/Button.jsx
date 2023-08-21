import  React  from 'react'; 
import PropTypes  from 'prop-types';
import "./Button.css"

// LE DAMOS FUNCIONALIDADES A LOS BOTONES. 

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" ");

//Constante Boton que recibe dos parametros children (contenido interno) y type(primario, secundario, terciario) 
const Button = ({ children, type })=> { 
    return <button className ={getStyles(type)}> {children} 
    </button>
}

//Propiedades de los botones 
Button.propTypes = {
    children: PropTypes.string.isRequired, //espera una cadena y es obligatoria 
    type: PropTypes.oneOf(["primary", "secondary", "tertiary", ]) //espera recibir el tipo de cada uno 
}

export default Button; 