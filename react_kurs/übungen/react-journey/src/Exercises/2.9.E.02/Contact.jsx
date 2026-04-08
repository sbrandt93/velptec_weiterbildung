function Contact({ name, email, telefon }) {
  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: '#f1f3f5', // Ganz helles Grau
    color: '#222', // Tiefdunkle Schrift
    textAlign: 'left' // Text innerhalb der Karte linksbündig
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 5px 0', color: '#007bff' }}>{name}</h3>
      <div style={{ fontSize: '0.9rem' }}>
        <p style={{ margin: '2px 0' }}><strong>📧</strong> {email}</p>
        <p style={{ margin: '2px 0' }}><strong>📞</strong> {telefon}</p>
      </div>
    </div>
  );
}

export default Contact;