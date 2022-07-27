import { createContext, useReducer } from 'react';
import globalState from './data';
import P from 'prop-types';
import reducer from '../../store/reducers';

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: P.element,
};

export default AppContext;
