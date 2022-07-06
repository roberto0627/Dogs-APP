import React from 'react';
import { Link } from 'react-router-dom';
import './inicio.css'

export function Inicio() {
    return (
        <div className='IniCointainter'>
            <div className='textIni'>
            </div>
            <div className='blue-bar'></div>
            <div className="titulo-home-container">
                <p className="titulo-home">Dogs!</p>
            </div>
            <p className="subtitulo-home">Welcome!</p>
            <Link to='/home'>
                <button className='btnIni'>See more</button>
            </Link>
        </div>
    )
};

