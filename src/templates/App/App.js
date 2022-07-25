import logo from '../../logo.svg';
import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../../components/Button';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const [reverseClass, setReverseClass] = useState('');

  const handleClick = useCallback(() => {
    setReverse((rev) => !rev);
  }, []);

  const handleIncrement = useCallback(() => {
    setCounter((count) => count + 1);
  }, []);

  const reverseButton = useMemo(() => {
    return (
      <Button type="button" onClick={handleClick}>
        Reverse
      </Button>
    );
  }, [handleClick]);

  const incrementButton = useMemo(() => {
    return (
      <Button type="button" onClick={handleIncrement}>
        Increment
      </Button>
    );
  }, [handleIncrement]);

  useEffect(() => {
    reverse ? setReverseClass('App-logo-reverse') : setReverseClass('');
  }, [reverse]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Counter: {counter}</h1>

        <span>{reverseButton}</span>

        <span>{incrementButton}</span>
      </header>
    </div>
  );
}

export default App;
