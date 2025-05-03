import { useEffect, useState } from 'react';

const ColorCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState('#ff0000');

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setColor(`hsl(${Math.random() * 360}, 100%, 50%)`);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: pos.y,
        left: pos.x,
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: color,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        mixBlendMode: 'difference', // Optional: makes it pop against light/dark
      }}
    />
  );
};

export default ColorCursor;
