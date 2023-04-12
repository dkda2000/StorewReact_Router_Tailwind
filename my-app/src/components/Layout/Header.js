/*import { Navbar } from 'flowbite-react'
import {Outlet, Link} from 'react-router-dom';*/

const Header = () => {
  
    return (

        <header class="z-30 flex items-center w-full h-24 sm:h-32">
        <div class="container flex items-center justify-between px-6 mx-auto">
            <div class="text-3xl font-black text-gray-800 hover:text-pink-700 uppercase dark:text-white">
                <a href="/home"> Celutopia.com </a>
            </div>
            <div class="flex items-center">
                <nav class="items-center hidden  font-sen dark:text-white lg:flex">
                    
                    <a href="/about" class="flex px-6 py-2 text-lg text-gray-800 uppercase hover:text-pink-700">
                        Nosotros
                    </a>
                    <a href="/products" class="flex px-6 py-2 text-lg text-gray-800 uppercase hover:text-pink-700">
                        Productos
                    </a>
                    <a href="/contact" class="flex px-6 py-2 text-lg text-gray-800 uppercase hover:text-pink-700">
                        Contacto
                    </a>
                    
                </nav>
                <button class="flex flex-col ml-4 lg:hidden">
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                </button>
            </div>
        </div>
    </header>
/* 
<>
     <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand
  as ={Link} to="/">
    <span className="dark:text-white text-3xl font-black text-gray-800 uppercase">
    Tienda de celus
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link className="text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex" as ={Link} to="/" active={false}> Home </Navbar.Link>
    
    <Navbar.Link className="text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex " href="/about">
      Nosotros
    </Navbar.Link>
    
    <Navbar.Link className="text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex" as ={Link} to="/products"> Productos </Navbar.Link>

    <Navbar.Link className="text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex" as ={Link} to="/contact"> Contacto </Navbar.Link>

  </Navbar.Collapse>
</Navbar>


<section>

        <Outlet></Outlet>
    </section>

</> */
   
     )
      
  }

  export default Header