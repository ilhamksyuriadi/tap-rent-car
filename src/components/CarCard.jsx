import React from 'react';
import './CarCard.scss';

export default function CarCard({img, name}) {
    return (
        <div className="card-layout">
            <img src={`../assets/car/${img}`} alt=""/>
            <h4>{name}</h4>
        </div>
    )
}
