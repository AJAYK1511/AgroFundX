import { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit feedback
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <div>
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Type your feedback here..."
          style={styles.textarea}
        />
        <br />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

// Inline styles
const styles = {
  textarea: {
    width: '100vw',
    height: '150px',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Feedback;
