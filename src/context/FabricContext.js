import React, { useCallback, createContext, useState, useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { initAligningGuidelines } from '../components/handlers/aligning_guidelines';

export const FabricContext = createContext([]);

export const FabricContextProvider = ({ children }) => {
  const canvasEl = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [activeObject, setActiveObject] = useState(null);
  const [svgCode, setSvgCode] = useState('');

  const addSvgCode = () => {
    if (canvas) {
      let tosvg = JSON.stringify(canvas.toSVG());
      setSvgCode(tosvg);
      console.log(tosvg);
    }
  };

  const initCanvas = useCallback((el) => {
    let c = new fabric.Canvas(el);
    initAligningGuidelines(c);
    c.renderAll();
    setCanvas(c);
  }, []);

  useEffect(() => {
    if (canvas) {
      canvas.on('mouse:wheel', function (opt) {
        var delta = opt.e.deltaY;
        var zoom = canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        canvas.setZoom(zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });
    }
  }, [canvas]);

  const value = {
    svgCode,
    addSvgCode,
    canvasEl,
    canvas,
    initCanvas,
    activeObject,
    setActiveObject,
  };

  return <FabricContext.Provider value={value}>{children}</FabricContext.Provider>;
};
