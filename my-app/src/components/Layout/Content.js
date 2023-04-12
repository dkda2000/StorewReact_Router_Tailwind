import  React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from '../../Pages/about';
import Contact from '../../Pages/contact';
import Products from '../../Pages/products';
import Home from '../../Pages/home';
import Faq from '../../Pages/faq';
import Politics from '../../Pages/politics';
import Work from '../../Pages/work';

function Content() {
  return (
    
    <div className="contenedor items-center w-full">
        <BrowserRouter>
         <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='home' element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='products' element={<Products/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='faq' element={<Faq/>}/>
              <Route path='politics' element={<Politics/>}/>
              <Route path='work' element={<Work/>}/>
              
        </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default Content;
