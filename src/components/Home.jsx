import React from 'react';
import './Home.scss';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <Element id="home" className="home-layout">
            <div className="content">
                <h1>Cari Sewa Mobil?</h1>
                <p>
                    Mobil lepas kunci, mobil dengan supir, mobil
                    <br /> untuk liburan puncak dan Bandung <br />
                    semua Tap Rent Car solusinya!
                </p>
            </div>
        </Element>
    )
}

export default Home;