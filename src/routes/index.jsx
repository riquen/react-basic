import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import App from '../templates/App/App';
import Menu from '../components/Menu';
import Posts from '../templates/Posts';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Menu>
        <>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </>
      </Menu>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route exact path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
