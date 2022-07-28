import Div from '../../components/Div';
import Posts from '../../components/Posts';
import PostsProvider from '../../contexts/PostsProvider';

const Separate = () => {
  return (
    <PostsProvider>
      <Div>
        <Posts />
      </Div>
    </PostsProvider>
  );
};

export default Separate;
