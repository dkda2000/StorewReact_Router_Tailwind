import React from 'react';

const Tarjeta = ({Telefono}) => {
  
      return (
   
<div class="w-64 p-1 m-auto bg-white shadow-lg rounded-2xl">
    <img src={Telefono.imagen} alt="Celular" class="w-64 p-0.5 m-auto h-72"/>
    <div class="p-4 m-3 bg-pink-200 rounded-lg">
        <p class="text-xl font-bold text-gray-800 ">
            {Telefono.marca}
        </p>
        <p class="text-xs text-gray-800">
            {Telefono.modelo}
        </p>
        <div class="flex items-center justify-between ">
            <p class="text-gray-600 font-bold">
            $ {Telefono.precio.toLocaleString('es-AR')}
            </p>
            <button type="button" class="w-10 h-10 text-base font-medium text-white bg-pink-500 rounded-full hover:bg-pink-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="mx-auto" fill="white" viewBox="0 0 1792 1792">
                    <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</div>


       /* <div className="tarjeta py-6">
  <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="w-1/3" >
      <img src={Telefono.imagen} alt=""/>
    </div> 
    <div className="w-2/3 p-4">
      <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
      <p className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</p>
      <div className="flex item-center mt-2">
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
      </div>
      <div className="flex item-center justify-between mt-3">
        <h1 className="text-gray-700 font-bold text-xl">$220</h1>
        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
      </div>
    </div>
  </div>
</div> */

    /*<div className=" flex bg-white rounded-lg shadow dark:bg-gray-800 h-60 py-2">
      
      <div className="relative flex-none w-24 md:w-48">
          <img src={Telefono.imagen} alt="shopping image" className="absolute inset-0 object-cover rounded-lg"/>
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold dark:text-gray-50">
            {Telefono.marca} <br />
            {Telefono.modelo}
            </h1>
            
            <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
            $ {Telefono.precio.toLocaleString('es-AR')}
            </div>
            <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                En stock
            </div>
            
        </div>
        <br />
            <div className="flex mb-4 text-sm font-medium ">
                <button type="button" className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                Lo necesito
                </button>
            </div>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Entrega sin costo en todo el país.
                </p>
      </form>
                    </div>*/
                    
        

    );
}
export default Tarjeta