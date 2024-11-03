import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import './FormularioFinalizarCompra.jsx';
import './EstilosCompra.css';
import LapGamer from '../assets/images/LapGamer.png';
import lapMsi from '../assets/images/lapMsi.jpg';
import FormularioFinalizarCompra from './FormularioFinalizarCompra';

const FormularioCompra = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    //const history = useHistory(); // Hook para manejar la navegación


    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
        setTotal(total + producto.precio);
    };

    const productos = [
        { id: 1, nombre: 'Laptop Gamer', imagen: LapGamer, precio: 1500 },
        { id: 2, nombre: 'Laptop MSI', imagen: lapMsi, precio: 2000 },
    ];

    const handleComprarClick = () => {
        setMostrarFormulario(true);
        //history.push('/informacion');
    };

    return (
        <div className="contenedor-principal"> {/* Contenedor centrado */}
            <div className="formulario-compra">
                <h2>Tienda de Compras</h2>
                <div className="lista-productos">
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto">
                            <img src={producto.imagen} alt={producto.nombre} />
                            <p>{producto.nombre}</p>
                            <p>Precio: ${producto.precio}</p>
                            <button onClick={() => agregarAlCarrito(producto)}>
                                Seleccionar
                            </button>
                        </div>
                    ))}
                </div>
                <div className="carrito">
                    <h3>Carrito de Compras</h3>
                    {carrito.map((producto, index) => (
                        <p key={index}>{producto.nombre} - ${producto.precio}</p>
                    ))}
                    <h4>Total: ${total}</h4>
                    <button className="comprar-btn" onClick={handleComprarClick}>Para Comprar Llena lo Siguiente</button>
                </div>
                {mostrarFormulario && (
                    <FormularioFinalizarCompra total={total} />
                )}
            </div>
        </div>
    );
};

export default FormularioCompra;
