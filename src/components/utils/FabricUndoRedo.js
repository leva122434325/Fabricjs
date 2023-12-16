import React, { useContext } from 'react';
import { FabricContext } from '../../context/FabricContext';
import { IoArrowUndoOutline, IoArrowRedoOutline } from 'react-icons/io5';

export const FabricUndoRedo = () => {
  const { canvas } = useContext(FabricContext);

  const history = [];

  const undo = () => {
    if (canvas._objects.length > 0) {
      history.push(canvas._objects.pop());
    }
    canvas.renderAll();
  };

  const redo = () => {
    if (history.length > 0) {
      canvas.add(history.pop());
    }
  };

  return (
    <>
      <button onClick={undo} className="sidebar-rendoUndo-btn">
        <IoArrowUndoOutline />
      </button>
      <button onClick={redo} className="sidebar-rendoUndo-btn">
        <IoArrowRedoOutline />
      </button>
    </>
  );
};
