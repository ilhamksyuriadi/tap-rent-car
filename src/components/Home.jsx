import React from 'react';
import './Home.scss';
import { Element } from 'react-scroll';
import MainHome from './homeView/MainHome';
import SecondHome from './homeView/SecondHome';
import ThirdHome from './homeView/ThirdHome';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

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
                <ButtonBack className="btn-back">
                    <img className="arrow" src={`../assets/logo/back.png`} alt=""/>
                </ButtonBack>
                <ButtonNext className="btn-next">
                    <img className="arrow" src={`../assets/logo/next.png`} alt=""/>
                </ButtonNext>
                {/* <div className="dot-group">
                    <Dot className="dot" slide={0}></Dot>
                    <Dot className="dot" slide={1}></Dot>
                    <Dot className="dot" slide={2}></Dot>
                </div> */}
            </CarouselProvider>
        </Element>
    )
}

export default Home;