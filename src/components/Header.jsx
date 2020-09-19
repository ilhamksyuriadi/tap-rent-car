import React, { useState } from 'react';
import './Header.scss';
import Logo from '../assets/logo/taprentcar_logo.png';
import { Link, animateScroll } from 'react-scroll';

export default function NavBar() {
    const [state, setState] = useState({
        toggle: false
    })

    const scrollToTop = () => {
        animateScroll.scrollToTop();
        // if (!state.toggle) {
            handleLinkClick()
        // }
    }

    const handleToggleClick = () => {
        // let width = window.screen.width;
        let menu = document.getElementById("navigation")
        // console.log(typeof width)
        if (state.toggle) {
            setState({toggle: false})
            menu.style.left = "100%"
        } else {
            setState({toggle: true})
            menu.style.left = "0%"
        }
    }

    const handleLinkClick = () => {
        // let width = window.screen.width;
        let menu = document.getElementById("navigation")
        setState({toggle: false})
        menu.style.left = "100%"
    }

    return (
        <header>
            <img className="logo" src={Logo} alt="logo" onClick={scrollToTop}/>
            <nav id="navigation">
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
                            onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
                        >
                        Galeri
                        </Link>
                    </li>
                </ul>
            </nav>
            <span className="hamburger">
                {
                    state.toggle 
                    ? <img onClick={handleToggleClick} className="hamburger-logo" src={'../assets/logo/close.png'} alt=""/>
                    : <img onClick={handleToggleClick} className="hamburger-logo" src={'../assets/logo/square.png'} alt=""/>
                }
                {/* <img className="hamburger-logo" src={'../assets/logo/square.png'} alt=""/> */}
                {/* <img className="hamburger-logo" src={'../assets/logo/close.png'} alt=""/> */}
                {/* <p className="hamburger-close">&#10006;</p> */}
            </span>
        </header>
    )
}
