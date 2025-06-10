import { useState } from "react";

const Contador = () => {
    //Crear un estado
    const [numero, setNumero] = useState(1)
    //let numero = 1
    //numero = 345
    //setNumero(345)
    const sumar = ()=>{
        setNumero(numero + 1)
        console.log(numero)
    }
    return (
        <section className="text-center mt-5">
            <h2>Contador</h2>
            <h3>N°: {numero}</h3>
            <button className="btn btn-primary me-3" onClick={sumar}>+</button>
            <button className="btn btn-danger">-</button>
        </section>
    );
};

export default Contador;