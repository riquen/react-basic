import P from 'prop-types';

const Paragraph = ({ children, onClick }) => {
  return <p onClick={onClick}>{children}</p>;
};

Paragraph.propTypes = {
  children: P.node.isRequired,
  onClick: P.func,
};

export default Paragraph;
