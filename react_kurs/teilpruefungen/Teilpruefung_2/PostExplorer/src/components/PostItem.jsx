import { Link } from 'react-router-dom';
import './PostItem.css';

function PostItem({ post }) {
  return (
    <li className="post-item">
      <Link to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
    </li>
  );
}

export default PostItem;
