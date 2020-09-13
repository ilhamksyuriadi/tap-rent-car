import React, { useState } from 'react';
import './CarList.scss';
import CarCard from './CarCard';
import { CarState } from '../config/CarState';

export default function CarList() {
    const [state] = useState(CarState)

    const daily_car = state.daily_car.map(car => {
        return <CarCard img={car.img} name={car.name} />
    })

    const wedding_car = state.wedding_car.map(car => {
        return <CarCard img={car.img} name={car.name} />
    })

    const holiday_car = state.holiday_car.map(car => {
        return <CarCard img={car.img} name={car.name} />
    })

    const group_car = state.group_car.map(car => {
        return <CarCard img={car.img} name={car.name} />
    })

    return (
        <div className="carlist-layout">
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
        </div>
    )
}
