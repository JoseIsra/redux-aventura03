import React, { useState } from 'react';
import './Sidebar.css';
export const Sidebar = () => {

    const [input, setInput] = useState('');

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h3>Crea tus canales aquí </h3>
            </div>
        <div className="sidebar__form">
            <form>
                <input 
                onChange={(e)=> setInput(e.target.value)}
                type="text" placeholder="nombre..." />
                <button>Crear</button>
            </form>
        </div>

            <div className="sidebar__content">
                {/* aqui se renderizaran los canales */}
                <h3>UNO</h3>
                <h3>DOA</h3>
                <h3>TRES</h3>
            </div>

        </div>
    )
}
