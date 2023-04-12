const Home = () => {
  
    return (
      /*<div>
        <h1>View Home</h1>
  
      </div>*/
    <div className="relative flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex px-6 mx-auto">
            <div className="relative flex flex-col sm:w-2/3 lg:w-2/5">
                {/* <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white">
                </span> */}
                <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                    ¿MEMORIA 
                    <span className="text-5xl sm:text-7xl">
                        INSUFICIENTE?
                    </span>
                </h1>
                    <br></br>
                    <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                    Porque con nuestros engreídos, siempre tendremos excusas para tener un celu nuevo.
                    </p>
                <div className="flex mt-8">
                    <a href="./products" className="px-4 py-2 mr-4 font-medium text-white bg-pink-500 uppercase text-center border-2 border-transparent rounded-lg text-md hover:bg-pink-700 w-full">
                        LAS FOTOS NO PUEDEN ESPERAR, LLEVAME YA!!                                        
                     </a>
                
                </div>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                <img src="/assets/HomeCats.png" alt= "¿Acaso no se lo merecen?" className="max-w-xs m-auto md:max-w-sm"/>
            </div>
        </div>
    </div>



        )
      
  }

  export default Home