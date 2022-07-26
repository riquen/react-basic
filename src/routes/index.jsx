import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from '../templates/Home/Home';
import App from '../templates/App/App';
import Menu from '../components/Menu';
import Posts from '../templates/Posts';
import Page from '../templates/Page';
import MyHook from '../templates/MyHook';
import AppContext from '../contexts/AppContext';
import Separate from '../templates/Separate';
import PostsProvider from '../contexts/PostsProvider';
import CounterProvider from '../contexts/CounterProvider';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Menu>
        <>
          <Link to="/">App</Link>
          <Link to="/home">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/page">Page</Link>
          <Link to="/my-hook">My Hook</Link>
          <Link to="/separate">Separate</Link>
        </>
      </Menu>
      <AppContext>
        <PostsProvider>
          <CounterProvider>
            <Routes>
              <Route index path="/" element={<App />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/posts" element={<Posts />} />
              <Route exact path="/page" element={<Page />} />
              <Route exact path="/my-hook" element={<MyHook />} />
              <Route exact path="/separate" element={<Separate />} />
            </Routes>
          </CounterProvider>
        </PostsProvider>
      </AppContext>
    </BrowserRouter>
  );
};

export default MainRoutes;
