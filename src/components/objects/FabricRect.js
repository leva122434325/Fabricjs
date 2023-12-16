import React, { useContext } from 'react';
import { fabric } from 'fabric';
import { FabricContext } from '../../context/FabricContext';
import { BiRectangle } from 'react-icons/bi';

const FabricRect = () => {
  const { addSvgCode, canvas } = useContext(FabricContext);

  const addLine = () => {
    canvas.add(
      new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 100,
        height: 100,
      }),
    );
    addSvgCode();
  };

  return (
    <>
      <button className="sidebar-container-btn" onClick={addLine}>
        <BiRectangle className="sidebar-container-icon" />
        Rect
      </button>
    </>
  );
};
export default FabricRect;
