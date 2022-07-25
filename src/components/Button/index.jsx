import P from 'prop-types';

export const Button = ({ type, children, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: P.string.isRequired,
  children: P.string.isRequired,
  onClick: P.func.isRequired,
};
