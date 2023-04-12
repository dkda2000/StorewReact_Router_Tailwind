
const Contact = () => {
  
    return (
      <form className="tarjeta bg-pink-200flex w-full max-w-sm space-x-3">
       <div className="mb-8 w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-pink-200 rounded-lg shadow-lg dark:bg-gray-800">
          <div className="mb-6 text-2xl text-center font-bold text-gray-800 dark:text-white">
              Contáctanos!
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                      <input type="text" id="contact-form-name" className=" rounded-lg border flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:ring-pink-500" placeholder="Nombre"/>
                      </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                      <div className=" relative ">
                          <input type="text" id="contact-form-email" className=" rounded-lg border flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent focus:ring-pink-500" placeholder="Email"/>
                          </div>
                      </div>
                      <div className="col-span-2">
                          <label className="text-gray-700" for="name">
                              <textarea className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:ring-pink-500" id="comment" placeholder="Ingresa tu comentario" name="comment" rows="5" cols="40">
                              </textarea>
                          </label>
                      </div>
                      <div className="col-span-2 text-right">
                          <button type="submit" className="py-2 px-4 font-medium text-white bg-pink-500 hover:bg-pink-700 w-full transition ease-in duration-200 uppercase text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                              Enviar
                          </button>
                      </div>
                  </div>
              </div>
          </form>
  
  
        )
      
  }

  export default Contact