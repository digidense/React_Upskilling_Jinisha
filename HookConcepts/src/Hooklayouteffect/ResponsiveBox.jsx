import React, { useState, useLayoutEffect } from 'react';
import './chatbox.css';


function AutoCenterModal() {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (open) {
      // Lock scroll and change background
      document.body.style.overflow = 'hidden';
      document.body.style.background = '#f9f9f9';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.background = 'white';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.background = 'white';
    };
  }, [open]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Auto Center Modal</h1>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '10px 20px',
          background: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Open Modal
      </button>

      {open && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
              width: '300px',
              textAlign: 'center'
            }}
          >
            <h2>Modal Title</h2>
            <p>This modal is centered and locks the background scroll.</p>
            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: '1rem',
                padding: '8px 16px',
                background: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AutoCenterModal;
