import logo from '../../logo.svg';
import './Home.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../../components/Button';

function Home() {
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
    reverse ? setReverseClass('Home-logo-reverse') : setReverseClass('');
  }, [reverse]);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className={`Home-logo ${reverseClass}`} alt="logo" />

        <h1>Counter: {counter}</h1>

        <span>{reverseButton}</span>

        <span>{incrementButton}</span>
      </header>
    </div>
  );
}

export default Home;
