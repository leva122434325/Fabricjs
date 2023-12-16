import React from 'react';
import { FaSkullCrossbones } from 'react-icons/fa6';
import '../styles/svgmodal.scss';

export const Modal = ({ onClose, svgCode }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-content-close" onClick={onClose}>
          <FaSkullCrossbones />
        </span>
        <span className="modal-content-text">{svgCode}</span>
      </div>
    </div>
  );
};
