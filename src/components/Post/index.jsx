import P from 'prop-types';

const Post = ({ post, onClick }) => {
  return (
    <div>
      <h1 onClick={() => onClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    title: P.string.isRequired,
    body: P.string.isRequired,
  }),
  onClick: P.func,
};

export default Post;
