import React from 'react';
import './Header.scss';
import Logo from '../assets/logo/taprentcar_logo.png';
import { Link, animateScroll } from 'react-scroll';

export default function NavBar() {
    const scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    return (
        <header>
            <img src={Logo} alt="logo" onClick={scrollToTop}/>
            <nav>
                <ul>
                    {/* <li><a href="#home">Home</a></li> */}
                    <li>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-75}
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="kategori"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-75}
                        >
                        Kategori
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="harga"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-75}
                        >
                        Harga
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="galeri"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-75}
                        >
                        Galeri
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
