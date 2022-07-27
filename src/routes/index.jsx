import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from '../templates/Home/Home';
import App from '../templates/App/App';
import Menu from '../components/Menu';
import Posts from '../templates/Posts';
import Page from '../templates/Page';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Menu>
        <>
          <Link to="/">App</Link>
          <Link to="/home">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/page">Page</Link>
        </>
      </Menu>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
