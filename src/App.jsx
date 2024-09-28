import React, { useState } from 'react';
import CifradoCesar from './components/cifradoCesar';
import CifradoEscitala from './components/cifradoEscitala';

function App() {
  const [componenteActivo, setComponenteActivo] = useState('cesar');
  const [modoOscuro, setModoOscuro] = useState(false); 

  const toggleDarkMode = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div className={`${modoOscuro ? 'dark' : ''} min-h-screen ${modoOscuro ? 'bg-black' : 'bg-gray-100'}`}>
      <header className="bg-blue-600 dark:bg-gray-800 text-white py-4">
        <div className="flex justify-between items-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Aplicación de cifrados</h1>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            {modoOscuro ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </div>
      </header>

      <nav className="bg-blue-500 dark:bg-gray-700 p-4 flex justify-center space-x-4">
        <button
          onClick={() => setComponenteActivo('cesar')}
          className={`${
            componenteActivo === 'cesar' ? 'bg-blue-700 dark:bg-gray-800' : 'bg-blue-500 dark:bg-gray-600'
          } text-white text-lg hover:bg-blue-700 dark:hover:bg-gray-800 py-2 px-4 rounded-md transition-colors duration-200`}
        >
          Cifrado César
        </button>
        <button
          onClick={() => setComponenteActivo('escitala')}
          className={`${
            componenteActivo === 'escitala' ? 'bg-blue-700 dark:bg-gray-800' : 'bg-blue-500 dark:bg-gray-600'
          } text-white text-lg hover:bg-blue-700 dark:hover:bg-gray-800 py-2 px-4 rounded-md transition-colors duration-200`}
        >
          Cifrado Escítala
        </button>
      </nav>

      <main className="p-8">
        {componenteActivo === 'cesar' && <CifradoCesar modoOscuro={modoOscuro} />}
        {componenteActivo === 'escitala' && <CifradoEscitala modoOscuro={modoOscuro} />}
      </main>
    </div>
  );
}

export default App;
