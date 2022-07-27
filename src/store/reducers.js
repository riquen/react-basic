import actions from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER: {
      return {
        ...state,
        counter: action.payload?.counter + 1,
        body: action.payload?.value,
      };
    }
  }
  return { ...state };
};

export default reducer;
