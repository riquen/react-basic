import { useReducer } from 'react';
import globalState from './data';
import P from 'prop-types';
import reducer from '../../store/reducers';
import GlobalContext from './context';

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: P.element.isRequired,
};

export default AppContext;
