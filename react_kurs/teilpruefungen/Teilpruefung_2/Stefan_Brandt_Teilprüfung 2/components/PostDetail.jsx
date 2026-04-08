import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PostDetail.css';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!response.ok) {
          throw new Error('Post nicht gefunden');
        }
        
        const data = await response.json();
        setPost(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="loading">Lade Post...</div>;
  }

  if (error) {
    return <div className="error">Fehler: {error}</div>;
  }

  if (!post) {
    return <div className="error">Post nicht gefunden</div>;
  }

  return (
    <div className="post-detail">
      <Link to="/" className="back-link">← Zurück zur Übersicht</Link>
      <article>
        <h1>{post.title}</h1>
        <p className="post-meta">Post ID: {post.id} | User ID: {post.userId}</p>
        <div className="post-body">
          <p>{post.body}</p>
        </div>
      </article>
    </div>
  );
}

export default PostDetail;
