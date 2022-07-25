import P from 'prop-types';

const Menu = ({ children }) => {
  return <nav>{children}</nav>;
};

Menu.propTypes = {
  children: P.element.isRequired,
};

export default Menu;
