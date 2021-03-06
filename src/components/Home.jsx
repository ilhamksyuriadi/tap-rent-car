import React from 'react';
import './Home.scss';
import { Element } from 'react-scroll';
import MainHome from './homeView/MainHome';
import SecondHome from './homeView/SecondHome';
import ThirdHome from './homeView/ThirdHome';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';

const btnBack = {
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    position: 'absolute',
    marginTop: '-23%',
    left: '0',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: 'none',
    outline: 'none',
    marginLeft: '20px',
    opacity: '50%',
    transition: '0.5s'
};

const btnNext = {
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    position: 'absolute',
    marginTop: '-23%',
    right: '0',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: 'none',
    outline: 'none',
    marginRight: '20px',
    opacity: '50%',
    transition: '0.5s'
};

const arrow = {
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const dotGroup = {
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    position: 'absolute',
    left: '50%',
    width: '80px',
    marginTop: '-60px',
    marginLeft: '-40px',
    display: 'flex',
    justifyContent: 'space-between'
}

const dot = {
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all', // 'ms' is the only lowercase vendor prefix
    outline: 'none',
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    border: 'none',
    opacity: '40%',
}

const Home = () => {
    return (
        <Element id="home" className="home-layout">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                className="home-carousel"
                totalSlides={3}
                orientation={"horizontal"}
                infinite={true}
                interval={4000}
                isPlaying={true}
                playDirection={'forward'}
            >
                <Slider className="carousel-wrapper">
                    <Slide index={0}>
                        <MainHome></MainHome>
                    </Slide>
                    <Slide index={1}>
                        <SecondHome></SecondHome>
                    </Slide>
                    <Slide index={2}>
                        <ThirdHome></ThirdHome>
                    </Slide>
                </Slider>
                <ButtonBack style={btnBack}>
                    <img style={arrow} src={`../assets/logo/back.png`} alt=""/>
                </ButtonBack>
                <ButtonNext style={btnNext}>
                    <img style={arrow} src={`../assets/logo/next.png`} alt=""/>
                </ButtonNext>
                <div style={dotGroup}>
                    <Dot style={dot} slide={0}></Dot>
                    <Dot style={dot} slide={1}></Dot>
                    <Dot style={dot} slide={2}></Dot>
                </div>
            </CarouselProvider>
        </Element>
    )
}

export default Home;