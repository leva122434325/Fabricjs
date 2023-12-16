import React, { useContext, useRef } from 'react';
import { fabric } from 'fabric';
import { FaImages } from 'react-icons/fa';
import { FabricContext } from '../../context/FabricContext';

export const FabricImage = () => {
  const inputRef = useRef(null);
  const { addSvgCode, canvas } = useContext(FabricContext);

  const addTextBox = () => {
    inputRef.current.click();
  };

  const onImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      fabric.Image.fromURL(reader.result, (img) => {
        img.scaleToWidth(150);
        canvas.add(img);
        addSvgCode();
      });
    };

    reader.readAsDataURL(file);
    inputRef.current.value = null;
  };

  return (
    <>
      <button onClick={addTextBox} className="sidebar-container-btn">
        <FaImages className="sidebar-container-icon" />
        Image
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png"
        onChange={onImageUpload}
        style={{ display: 'none' }}
      />
    </>
  );
};
