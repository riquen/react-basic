import P from 'prop-types';
import { useReducer } from 'react';
import PostsContext from './context';
import data from './data';
import reducer from './reducer';

const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};

export default PostsProvider;
