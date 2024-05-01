import PropTypes from "prop-types";
function Button({ text, onClickFunc, color }) {
  return (
    <button
      className={`${color} px-5 py-3 text-xl text-center rounded-lg`}
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func,
  color: PropTypes.string,
};

export default Button;
