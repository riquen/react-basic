import { useReducer } from 'react';

const globalState = {
  title: 'Título do contexto',
  body: 'Body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementCounter':
      return { ...state, counter: action.payload + 1 };
    case 'decrementCounter':
      return { ...state, counter: action.payload - 1 };
  }
  return { ...state };
};

const Page = () => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter } = state;

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => dispatch({ type: 'incrementCounter', payload: counter })}
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: 'decrementCounter', payload: counter })}
      >
        -
      </button>
    </div>
  );
};

export default Page;
