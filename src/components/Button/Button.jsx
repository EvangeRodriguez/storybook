import  React  from 'react'; 
import PropTypes  from 'prop-types';
import "./Button.css"

// LE DAMOS FUNCIONALIDADES A LOS BOTONES. 

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" ");

const Button = ({ children, type })=> { 
    return <button className ={getStyles(type)}> {children} 
    </button>
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["primary", "secondary", "tertiary", ])
}

export default Button; 