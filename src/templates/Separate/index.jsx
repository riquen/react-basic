import { useContext, useEffect, useRef } from 'react';
import PostsContext from '../../contexts/PostsProvider/context';

import Div from '../../components/Div';
import Posts from '../../components/Posts';
import H1 from '../../components/H1';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import CounterContext from '../../contexts/CounterProvider/context';
import {
  incrementCounter,
  decrementCounter,
} from '../../contexts/CounterProvider/actions';

const Separate = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const {
    postsState: { posts, loading },
    postsDispatch,
  } = postsContext;

  const counterContext = useContext(CounterContext);
  const {
    counterState: { counter },
    counterDispatch,
  } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      isMounted.current ? dispatch() : (isMounted.current = false);
    });
  }, [postsDispatch]);

  return (
    <Posts>
      <Button type="button" onClick={() => incrementCounter(counterDispatch)}>
        + Counter: {counter}
      </Button>
      <Button type="button" onClick={() => decrementCounter(counterDispatch)}>
        - Counter: {counter}
      </Button>
      <Div>
        {loading && (
          <Paragraph>
            <strong>Carregando posts...</strong>
          </Paragraph>
        )}
        {posts.map((post) => {
          return (
            <Div key={post.id}>
              <H1>{post.title}</H1>
            </Div>
          );
        })}
      </Div>
    </Posts>
  );
};

export default Separate;
