import { useContext, useRef } from 'react';
import { GlobalContext } from '../../contexts/AppContext';
import actions from '../../store/actions';

const P = () => {
  const inputRef = useRef();
  const context = useContext(GlobalContext);
  const {
    state: { body, counter },
    dispatch,
  } = context;

  return (
    <>
      <p
        onClick={() =>
          dispatch({
            type: actions.INCREMENT_COUNTER,
            payload: { counter: counter, value: inputRef.current.value },
          })
        }
      >
        {body}
      </p>
      <input ref={inputRef} type="text" />
    </>
  );
};

export default P;
