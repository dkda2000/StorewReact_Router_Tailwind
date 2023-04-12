import  React from 'react';
import './App.css';

import Header from './components/Layout/Header';
import Contenido from './components/Layout/Content';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div>
        <Header/>
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="w-48 h-2 mb-12 bg-pink-500 dark:bg-white"></span>
        </div>
        <Contenido/>
        <Footer/>
    </div>
  );
}

export default App;
