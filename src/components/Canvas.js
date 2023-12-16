import React, { useContext, useLayoutEffect } from 'react';
import { FabricContext } from '../context/FabricContext';
import '../styles/canvas.scss';

const Canvas = () => {
  const { canvasEl, initCanvas } = useContext(FabricContext);

  useLayoutEffect(() => {
    initCanvas(canvasEl.current);
  }, [initCanvas, canvasEl]);

  return (
    <div>
      <canvas ref={canvasEl} id="fabric-canvas" width={800} height={500} />
    </div>
  );
};

export default Canvas;
