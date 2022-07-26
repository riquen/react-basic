import { createContext, useState } from 'react';
import globalState from './data';
import P from 'prop-types';

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [state, setState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: P.element,
};

export default AppContext;
