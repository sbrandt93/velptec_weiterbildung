import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import './PostList.css';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Posts');
        }
        
        const data = await response.json();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading">Lade Posts...</div>;
  }

  if (error) {
    return <div className="error">Fehler: {error}</div>;
  }

  return (
    <div className="post-list">
      <h1>Posts</h1>
      <Link to="/new" className="new-post-link">Neuen Post erstellen</Link>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostList;
