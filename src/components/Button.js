import PropTypes from 'prop-types';
const Button = ({color, text, onClick}) => {

    return (
            <button  
            onClick = {onClick}
            style = {{backgroundColor:color}} 
            className = "btn"
            >
            {text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onCLick: PropTypes.func,
}
export default Button;