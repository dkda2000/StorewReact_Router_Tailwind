import ComponenteCard from '../components/ComponenteCard';
import Telefonos from '../srcPhones.js';

const Productos = () => {
  
    return (
    

      <div className="px-4 flex flex-wrap gap-10 items-center">
        
        {
    Telefonos.elementos.map((Telefono,i) => {
      return <ComponenteCard Telefono={Telefono}/>
    })}
  
      </div>
        )
      
  }

  export default Productos