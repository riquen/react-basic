import * as types from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS:
      return { ...state, posts: action.payload };
  }

  return { ...state };
};

export default reducer;
