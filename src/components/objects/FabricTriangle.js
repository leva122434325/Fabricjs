import React, { useContext } from 'react';
import { fabric } from 'fabric';
import { FiTriangle } from 'react-icons/fi';
import { FabricContext } from '../../context/FabricContext';

export const FabricTriangle = () => {
  const { addSvgCode, canvas } = useContext(FabricContext);

  const AddTriangle = () => {
    const triangle = new fabric.Triangle({
      width: 100,
      height: 100,
      fill: 'blue',
      left: 50,
      top: 50,
    });
    canvas.add(triangle);
    addSvgCode();
  };
  return (
    <>
      <button onClick={AddTriangle} className="sidebar-container-btn">
        <FiTriangle className="sidebar-container-icon" />
        Triangle
      </button>
    </>
  );
};
