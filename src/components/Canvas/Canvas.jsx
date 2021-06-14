import React, { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import Word from '../Word/Word';

export default function Canvas() {
  const canvasRef = useRef();

  return (
    <div>
      <Word />
      <CanvasDraw
        ref={canvasRef}
        canvasWidth={800}
        canvasHeight={600}
        lazyRadius={0}
        hideInterface={true}
      />
    </div>
  );
}
