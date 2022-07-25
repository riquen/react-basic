import P from 'prop-types';

export const Menu = ({ children }) => {
  return <nav>{children}</nav>;
};

Menu.propTypes = {
  children: P.element.isRequired,
};
