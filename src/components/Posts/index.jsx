import { useContext, useEffect } from 'react';
import PostsContext from '../../contexts/PostsProvider/context';
import Div from '../Div';
import H1 from '../H1';
import { loadPosts } from '../../contexts/PostsProvider/actions';

const Posts = () => {
  const postsContext = useContext(PostsContext);
  const {
    postsState: { posts },
    postsDispatch,
  } = postsContext;

  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);

  return (
    <Div>
      {posts.map((post) => {
        return (
          <Div key={post.id}>
            <H1>{post.title}</H1>
          </Div>
        );
      })}
    </Div>
  );
};

export default Posts;
