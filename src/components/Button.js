import PropTypes from 'prop-types';
import './Calculator.css';

function Button({ symbol }) {
  return <div className="button-wrapper">{symbol}</div>;
}

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Button;
