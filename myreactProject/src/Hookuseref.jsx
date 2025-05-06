import React, { useRef } from 'react';
import './hookuseref.css'; // Import your CSS file

function FocusInput() {
  const inputRef = useRef(null); // Create a ref

  const handleClick = () => {
    inputRef.current.focus(); // Access the input DOM element and call focus
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default FocusInput;
