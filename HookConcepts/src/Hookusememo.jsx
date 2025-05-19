import React, { useState, useMemo } from 'react';

function UseMemoExample() {
  const [number, setNumber] = useState(0);
  const [other, setOther] = useState(0);

  const slowFunction = (num) => {
    console.log("⏳ Running slow function...");
    for (let i = 0; i < 1000000000; i++) {} // simulate slow work
    return num * 2;
  };

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Double: {doubleNumber}</p>

      <button onClick={() => setOther(other + 1)}>Re-render Component</button>
      <p>Other count: {other}</p>
    </div>
  );
}

export default UseMemoExample;



