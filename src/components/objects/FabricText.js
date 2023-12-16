import React, { useContext } from 'react';
import { fabric } from 'fabric';
import { TfiText } from 'react-icons/tfi';
import { FabricContext } from '../../context/FabricContext';

export const FabricTextBox = () => {
  const { addSvgCode, canvas } = useContext(FabricContext);

  const addTextBox = () => {
    const textBox = new fabric.Textbox('Add your text here', {
      width: 200,
      top: 10,
      left: 10,
      fontSize: 24,
      fontWeight: 'normal',
      fontStyle: 'normal',
      textAlign: 'left',
      fontFamily: 'arial',
      textDecoration: 'normal',
      fill: '#000000',
      shadow: 'green -5px -5px 3px',
    });
    canvas.add(textBox);
    addSvgCode();
  };
  return (
    <>
      <button onClick={addTextBox} className="sidebar-container-btn">
        <TfiText className="sidebar-container-icon" /> Text
      </button>
    </>
  );
};
