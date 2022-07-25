import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import App from '../templates/App/App';
import { Menu } from '../components/Menu';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Menu>
        <Link to="/ ">Home</Link>
      </Menu>
      <Routes>
        <Route index path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
