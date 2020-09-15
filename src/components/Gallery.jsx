import React from 'react';
import './Gallery.scss'

export default function Gallery() {
    return (
        <div className="gallery-layout">
            <h2>Galeri Mobil</h2>
            <div className="content">
                <img src={`../assets/galeri/1.jpeg`} alt=""/>
                <img src={`../assets/galeri/2.jpeg`} alt=""/>
                <img src={`../assets/galeri/3.jpeg`} alt=""/>
                <img src={`../assets/galeri/4.jpeg`} alt=""/>
                <img src={`../assets/galeri/5.jpeg`} alt=""/>
                <img src={`../assets/galeri/6.jpeg`} alt=""/>
            </div>
        </div>
    )
}
