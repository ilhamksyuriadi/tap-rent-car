import React from 'react';
import './Category.scss';

export default function Category() {
    return (
        <div className="category-layout">
            <h2>Berbagai Pilihan Mobil Sesuai Kebutuhanmu</h2>
            <div className="category-content">
                <div className="category-wrapper">
                    <img src={`../assets/steering-wheel-greyscale.png`} alt=""/>
                    <h3>Sehari-hari</h3>
                    <p>
                        Berbagai macam membeli untuk keperluan harian, dapat lepas kunci!
                    </p>
                </div>
                <div className="category-wrapper">
                    <img src={`../assets/wedding-greyscale.png`} alt=""/>
                    <h3>Pernikahan</h3>
                    <p>
                        Butuh mobil mewah untuk acara pernikahan mu? Kami sediakan berbagai pilihan!
                    </p>
                </div>
                <div className="category-wrapper">
                    <img src={`../assets/sun-umbrella-greyscale.png`} alt=""/>
                    <h3>Liburan</h3>
                    <p>
                        Nyari mobil buat liburan rame-rame? Liburan ke puncak, Bogor, Bandung, Yuk!
                    </p>
                </div>
                <div className="category-wrapper">
                    <img src={`../assets/bus-greyscale.png`} alt=""/>
                    <h3>Bus/Elf</h3>
                    <p>
                        Pergi berombongan? Bisa sewa bus/elf sekaligus supirnya!
                    </p>
                </div>
            </div>
        </div>
    )
}
