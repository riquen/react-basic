import { useCallback, useEffect, useMemo, useState } from 'react';
import Post from '../../components/Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = useCallback(async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container">
      {useMemo(() => {
        return posts && posts.map((post) => <Post key={post.id} post={post} />);
      }, [posts])}

      <p>Ainda não existem posts.</p>
    </div>
  );
};

export default Posts;
