import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Post from '../../components/Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);

  const fetchData = useCallback(async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();
    setPosts(json);
  }, []);

  const handleClick = (value) => {
    setValue(value);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    input.current.focus();
  }, [value]);

  return (
    <div className="container">
      <input
        ref={input}
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {useMemo(() => {
        return (
          posts &&
          posts.map((post) => (
            <Post key={post.id} post={post} onClick={handleClick} />
          ))
        );
      }, [posts])}

      <p>Ainda não existem posts.</p>
    </div>
  );
};

export default Posts;
