import React from 'react';
import './styles/app.scss';
import { Sidebar } from './components/Sidebar';
import Canvas from './components/Canvas';
import { FabricContextProvider } from './context/FabricContext';

function App() {
  return (
    <div className="app">
      <FabricContextProvider>
        <Sidebar />
        <Canvas />
      </FabricContextProvider>
    </div>
  );
}

export default App;
