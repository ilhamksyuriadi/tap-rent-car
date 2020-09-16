import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer-layout">
            <div className="content">
                <div className="contact-layout">
                    <div className="contact">
                        <div className="content-wrapper">
                            {/* <div className="content" >
                                <div>
                                    <img src={`../assets/logo/location.png`} alt=""/>
                                </div>
                                <p>TAP RENTCAR, Jl Gas Alam RT 04 RW 05 Curug, Depok (samping toko kaca sembilan sinar)</p>
                            </div>
                            <div className="content" >
                                <div>
                                    <img src={`../assets/logo/location.png`} alt=""/>
                                </div>
                                <p>Jl Pondok Pesantren Nurul Huda Kp. Rumbut RT 06 RW 09 No. 16A (samping pesantren nurul huda)</p>
                            </div> */}
                            <div className="content" >
                                <img src={`../assets/logo/phone-call.png`} alt=""/>
                                <p>0812 8037 9725 (Call only)</p>
                            </div>
                            <a className="content clickable-content" 
                            href="https://wa.me/6289686889359" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <img src={`../assets/logo/whatsapp-greyscale.png`} alt=""/>
                                <p>0822 6548 3157 (WA only)</p>
                            </a>
                            <a className="content clickable-content" 
                            href="https://instagram.com/sewamobildepok" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <img src={`../assets/logo/instagram.png`} alt=""/>
                                <p>sewamobildepok</p>
                            </a>
                            <a className="content clickable-content" 
                            href="https://fb.me/sewamobildepok" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <img src={`../assets/logo/facebook.png`} alt=""/>
                                <p>sewamobildepok</p>
                            </a>
                            <a className="content clickable-content"
                            href="mailto:sewamobildepok@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                <img src={`../assets/logo/email.png`} alt=""/>
                                <p>sewamobildepok@gmail.com</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about-layout">
                    <div className="bio-wrapper">
                        <h4>Tentang Kami</h4>
                        <div className="bio">
                            <div>
                                <img src={`../assets/bagus.png`} alt=""/>
                            </div>
                            <p>
                                Sudah sejak 2012, Bagus mengoperasikan TAP Rent Car. 
                                Bertempat di Kelapa Dua dan Gas Alam, Depok, kini TAP 
                                Rent Car sudah mencakup penyewaan mobil dan antar 
                                jemput untuk wilayah Jabodetabek hingga Bandung.
                            </p>
                        </div>
                        {/* <div className="socmed">
                            <a href="https://fb.me/sewamobildepok" target="_blank" rel="noopener noreferrer">
                                <img src={`../assets/logo/facebook.png`} alt=""/>
                            </a>
                            <a href="https://instagram.com/sewamobildepok" target="_blank" rel="noopener noreferrer">
                                <img src={`../assets/logo/instagram.png`} alt=""/>
                            </a>
                        </div> */}
                    </div>
                </div>
                <div className="location-layout">
                    <div className="location">
                        <div className="location-wrapper">
                            <img src={`../assets/logo/location.png`} alt=""/>
                            <p>TAP RENT CAR, Jl Gas Alam RT 04 RW 05 Curug, Depok (samping toko kaca sembilan sinar)</p>
                        </div>
                    </div>
                    <div className="location">
                        <div className="location-wrapper">
                            <img src={`../assets/logo/location.png`} alt=""/>
                            <p>Jl Pondok Pesantren Nurul Huda Kp. Rumbut RT 06 RW 09 No. 16A (samping pesantren nurul huda)</p>
                        </div>
                    </div>
                    {/* <div className="" >
                        <div>
                            <img src={`../assets/logo/location.png`} alt=""/>
                        </div>
                        <p>TAP RENTCAR, Jl Gas Alam RT 04 RW 05 Curug, Depok (samping toko kaca sembilan sinar)</p>
                    </div>
                    <div className="" >
                        <div>
                            <img src={`../assets/logo/location.png`} alt=""/>
                        </div>
                        <p>Jl Pondok Pesantren Nurul Huda Kp. Rumbut RT 06 RW 09 No. 16A (samping pesantren nurul huda)</p>
                    </div> */}
                </div>
            </div>
            <div className="footer">
                <p>Tap Rent Car @2020</p>
            </div>
        </div>
    )
}
