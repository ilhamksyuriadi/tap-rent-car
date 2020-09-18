import React, { useState } from 'react';
import './CarList.scss';
import CarCard from './CarCard';
import { CarState } from '../config/CarState';
import ViewImage from './ViewImage';
import { Element } from 'react-scroll';

export default function CarList() {
    const [state,setState] = useState({
        ...CarState,
        show: false,
        image: ''
    })

    const handleOpenImage = (img) => {
        const new_state = {
            ...state,
            show: true,
            image: `car/${img}`
        }
        setState(new_state)
    }

    const handleCloseImage = () => {
        const new_state = {
            ...state,
            show: false,
            image: ''
        }
        setState(new_state);
    }

    const daily_car = state.daily_car.map((car,index) => {
        return  (
            <span key={index} onClick={() => handleOpenImage(car.img)}>
                <CarCard img={car.img} name={car.name} />
            </span>
        )
    })

    const wedding_car = state.wedding_car.map((car,index) => {
        return  (
            <span key={index} onClick={() => handleOpenImage(car.img)}>
                <CarCard img={car.img} name={car.name} />
            </span>
        )
    })

    const holiday_car = state.holiday_car.map((car,index) => {
        return  (
            <span key={index} onClick={() => handleOpenImage(car.img)}>
                <CarCard img={car.img} name={car.name} />
            </span>
        )
    })

    const group_car = state.group_car.map((car, index) => {
        return  (
            <span key={index} onClick={() => handleOpenImage(car.img)}>
                <CarCard img={car.img} name={car.name} />
            </span>
        )
    })

    return (
        <Element id="harga" className="carlist-layout">
            {
                state.show ? <ViewImage img={state.image} closeImage={handleCloseImage}></ViewImage> : <span></span>
            }
            <div className="full-width">
                <div className="head">
                    <h3>Mobil Sehari-hari</h3>
                </div>
                <div className="car">
                    { daily_car }
                </div>
            </div>
            <div className="half-width-body">
                <div className="half-width-wrapper">
                    <div className="half-width">
                        <div className="head">
                            <h3>Mobil Pernikahan</h3>
                        </div>
                        <div className="car">
                            {wedding_car}
                        </div>
                    </div>
                    <div className="half-width">
                        <div className="head">
                            <h3>Mobil Liburan</h3>
                        </div>
                        <div className="car">
                            {holiday_car}
                        </div>
                    </div>
                    <div className="half-width">
                        <div className="head">
                            <h3>Mobil Rombongan</h3>
                        </div>
                        <div className="car">
                            {group_car}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cta-wrapper">
                <div className="cta">
                    <h3>Berminat? Telfon kami di 081280379725, WhatsApp di 082265483157 atau</h3>
                    <a target="_blank" href="https://wa.me/6289686889359" rel="noopener noreferrer">
                       <img src={`../assets/logo/whatsapp.png`} alt=""/> Klik Disini!
                    </a>
                </div>
                <div className="terms">
                    <p><span className="red">*</span> Kontak langsung untuk harga</p>
                    <p><span className="red">*</span> Terdapat paket lepas kunci, antar / jemput, sewa supir</p>
                </div>
            </div>
        </Element>
    )
}
