import P from 'prop-types';

const Posts = ({ children }) => {
  return <div>{children}</div>;
};

Posts.propTypes = {
  children: P.node.isRequired,
};

export default Posts;
