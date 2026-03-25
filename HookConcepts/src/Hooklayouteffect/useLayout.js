import { useState, useRef, useLayoutEffect } from 'react';

function useLayout() {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;

    // Measure on mount
    const measure = () => {
      const { offsetWidth: width, offsetHeight: height } = ref.current;
      setDimensions({ width, height });
    };

    measure();

    // Re-measure on window resize
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return [ref, dimensions];
}

export default useLayout;
