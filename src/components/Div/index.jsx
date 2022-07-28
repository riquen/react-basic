import P from 'prop-types';

const Div = ({ children }) => {
  return <div>{children} </div>;
};

Div.propTypes = {
  children: P.node.isRequired,
};

export default Div;
