import React, { useState, useCallback } from 'react';

// Child component — re-renders only if props change
const Child = React.memo(({ onAlert }) => {
  console.log('👶 Child rendered');
  return (
    <div style={styles.child}>
      <button style={styles.button} onClick={onAlert}>
        👋 Say Hello
      </button>
    </div>
  );
});

export default function UseCallbackStyledExample() {
  const [count, setCount] = useState(0);

  // useCallback to avoid re-creating this function
  const handleGreet = useCallback(() => {
    alert('Hello from the Child!');
  }, [count]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌟 useCallback Example</h1>

      <div style={styles.counterBox}>
        <p style={styles.text}>Count: {count}</p>
        <button style={styles.button} onClick={() => setCount(count + 1)}>
          ➕ Increase Count
        </button>
      </div>

      <Child onAlert={handleGreet} />
    </div>
  );
}

// Simple inline styles (can be replaced with Tailwind or CSS)
const styles = {
  container: {
    padding: '2rem',
    background: '#f9fafb',
    fontFamily: 'sans-serif',
    borderRadius: '1rem',
    width: '400px',
    margin: '2rem auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center'
  },
  counterBox: {
    marginBottom: '2rem',
    textAlign: 'center'
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem'
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    background: '#4f46e5',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer'
  },
  child: {
    textAlign: 'center'
  }
};
