import P from 'prop-types';

const Paragraph = ({ children, onClick }) => {
  return <p onClick={onClick}>{children}</p>;
};

Paragraph.propTypes = {
  children: P.string.isRequired,
  onClick: P.func.isRequired,
};

export default Paragraph;
