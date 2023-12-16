import React, { useContext } from 'react';
import { fabric } from 'fabric';
import { FaRegCircle } from 'react-icons/fa';
import { FabricContext } from '../../context/FabricContext';

export const FabricCircle = () => {
  const { addSvgCode, canvas } = useContext(FabricContext);

  const AddCircle = () => {
    const circle = new fabric.Circle({
      radius: 50,
      fill: 'green',
      left: 100,
      top: 100,
    });
    canvas.add(circle);
    addSvgCode();
  };

  return (
    <>
      <button onClick={AddCircle} className="sidebar-container-btn">
        <FaRegCircle className="sidebar-container-icon" />
        Circle
      </button>
    </>
  );
};
