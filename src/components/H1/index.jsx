import P from 'prop-types';

const H1 = ({ children }) => {
  return <h1>{children}</h1>;
};

H1.propTypes = {
  children: P.oneOfType([P.array, P.string]),
};

export default H1;
