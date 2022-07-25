import P from 'prop-types';

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    title: P.string.isRequired,
    body: P.string.isRequired,
  }),
};

export default Post;
