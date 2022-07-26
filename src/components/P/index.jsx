import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

const P = () => {
  const context = useContext(GlobalContext);
  const {
    state: { body },
    setState,
  } = context;
  return (
    <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body}
    </p>
  );
};

export default P;
