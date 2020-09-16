import React, { useState } from 'react';
import './Gallery.scss';
import ViewImage from './ViewImage';

export default function Gallery() {
    const [state,setState] = useState({
        show: false,
        image: ''
    })

    const handleOpenImage = (img) => {
        const new_state = {
            show: true,
            image: img
        }
        setState(new_state)
    }

    const handleCloseImage = () => {
        const new_state = {
            show: false,
            image: ''
        }
        setState(new_state);
    }

    return (
        <div className="gallery-layout">
            {
                state.show ? <ViewImage img={state.image} closeImage={handleCloseImage}></ViewImage> : <span></span>
            }
            <h2>Galeri Mobil</h2>
            <div className="content">
                <img onClick={() => handleOpenImage('galeri/1.jpeg')} src={`../assets/galeri/1.jpeg`} alt=""/>
                <img onClick={() => handleOpenImage('galeri/2.jpeg')} src={`../assets/galeri/2.jpeg`} alt=""/>
                <img onClick={() => handleOpenImage('galeri/3.jpeg')} src={`../assets/galeri/3.jpeg`} alt=""/>
                <img onClick={() => handleOpenImage('galeri/4.jpeg')} src={`../assets/galeri/4.jpeg`} alt=""/>
                <img onClick={() => handleOpenImage('galeri/5.jpeg')} src={`../assets/galeri/5.jpeg`} alt=""/>
                <img onClick={() => handleOpenImage('galeri/6.jpeg')} src={`../assets/galeri/6.jpeg`} alt=""/>
            </div>
        </div>
    )
}
