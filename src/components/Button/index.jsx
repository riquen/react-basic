import P from 'prop-types';

const Button = ({ type, children, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: P.string.isRequired,
  children: P.node.isRequired,
  onClick: P.func.isRequired,
};

export default Button;
