import { createRef, useContext } from 'react';
import Div from '../../components/Div';
import H1 from '../../components/H1';
import Input from '../../components/Input';
import Paragraph from '../../components/P';
import AppContext from '../../contexts/AppContext';
import GlobalContext from '../../contexts/AppContext/context';
import actions from '../../store/actions';
import './App.css';

const App = () => {
  const inputRef = createRef();
  const context = useContext(GlobalContext);
  const {
    state: { title, counter, body },
    dispatch,
  } = context;

  return (
    <AppContext>
      <Div>
        <H1>
          {title} {counter}
        </H1>
        <Paragraph
          onClick={() =>
            dispatch({
              type: actions.INCREMENT_COUNTER,
              payload: { counter: counter, value: inputRef.current.value },
            })
          }
        >
          {body}
        </Paragraph>
        <Input ref={inputRef} type="text" />
      </Div>
    </AppContext>
  );
};

export default App;
