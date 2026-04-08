import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PostForm.css';

function PostForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: 1
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Validierung
    if (!formData.title.trim()) {
      setError('Bitte gib einen Titel ein');
      return;
    }
    if (!formData.body.trim()) {
      setError('Bitte gib einen Inhalt ein');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Fehler beim Erstellen des Posts');
      }

      await response.json();
      setSuccess(true);
      setFormData({ title: '', body: '', userId: 1 });
      
      // Nach kurzer Verzögerung zur Übersicht navigieren
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-form">
      <Link to="/" className="back-link">← Zurück zur Übersicht</Link>
      <h1>Neuen Post erstellen</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titel</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Post-Titel eingeben"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Inhalt</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Post-Inhalt eingeben"
            rows={6}
            disabled={loading}
          />
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Post erfolgreich erstellt!</div>}

        <button type="submit" disabled={loading}>
          {loading ? 'Wird erstellt...' : 'Post erstellen'}
        </button>
      </form>
    </div>
  );
}

export default PostForm;
