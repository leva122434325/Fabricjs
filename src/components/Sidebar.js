import React, { useState, useContext } from 'react';
import '../styles/sidebar.scss';
import { Modal } from '../widgets/Modal';
import FabricRect from './objects/FabricRect';
import { FabricTriangle } from './objects/FabricTriangle';
import { FabricCircle } from './objects/FabricCircle';
import { FabricImage } from './objects/FabricImage';
import { FabricTextBox } from './objects/FabricText';
import { FabricContext } from '../context/FabricContext';
import { FabricUndoRedo } from './utils/FabricUndoRedo';

export const Sidebar = () => {
  const { addSvgCode, svgCode } = useContext(FabricContext);
  const [showModal, setShowModal] = useState(false);

  const handleSaveClick = () => {
    addSvgCode();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <FabricTextBox />
        <FabricRect />
        <FabricCircle />
        <FabricTriangle />
        <FabricImage />
      </div>
      <div className="sidebar-rendoUndo">
        <div className="sidebar-modal">
          {showModal && <Modal svgCode={svgCode} onClose={closeModal} />}
          <button className="sidebar-modal-btn" onClick={handleSaveClick}>
            save
          </button>
        </div>
        <div>
          <FabricUndoRedo />
        </div>
      </div>
    </div>
  );
};
