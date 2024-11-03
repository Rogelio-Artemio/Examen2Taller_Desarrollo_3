import React, { useState } from 'react';
import './EstilosCompra.css';
import './FormularioCompra.jsx';

const FormularioFinalizarCompra = () => {
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [tipoEntrega, setTipoEntrega] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [compraExitosa, setCompraExitosa] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (aceptaTerminos) {
            setCompraExitosa(true);
        } else {
            alert('Debe aceptar los términos y condiciones');
        }
    };

    return (
        <div className="formulario-informacion">
            {compraExitosa ? (
                <h3>¡Compra Exitosa!</h3>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h3>Información de Compra</h3>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="email electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <select
                        value={tipoEntrega}
                        onChange={(e) => setTipoEntrega(e.target.value)}
                        required
                    >
                        <option value="" disabled>Seleccione tipo de entrega</option>
                        <option value="Entrega a domicilio">Entrega a domicilio</option>
                        <option value="Recogida en tienda">Recogida en tienda</option>
                    </select>
                    <div className="terminos-condiciones">
                        <input
                            type="checkbox"
                            checked={aceptaTerminos}
                            onChange={() => setAceptaTerminos(!aceptaTerminos)}
                        />
                        <label htmlFor="terminos">Acepto los términos y condiciones</label>
                    </div>
                    <button type="submit" className="comprar-btn">Confirmar Compra</button>
                </form>
            )}
        </div>
    );
};


export default FormularioFinalizarCompra;
