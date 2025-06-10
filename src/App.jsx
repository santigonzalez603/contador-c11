import 'bootstrap/dist/css/bootstrap.min.css'
import Informacion from './components/Informacion'
import Contador from './components/Contador';

function App() {
  //Aqui va la logica del componente
  const comision = 'c11'
  return (
  //Aqui puedo agregar algo de logica
   <main className="container my-5">
    {/*Aqui se agrega el maquetado html*/}
    <h1>Hola Mundo</h1>;
   <Informacion comisionProps={comision} anio={2025}/>
   <Contador></Contador>
     </main>
     );
}
 
export default App
