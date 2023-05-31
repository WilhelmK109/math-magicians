import PropTypes from 'prop-types';
import './Calculator.css';

function Button({ symbol, onClick }) {
  return (
    <div
      className="button-wrapper"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {symbol}
    </div>
  );
}

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
