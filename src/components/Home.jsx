import React from 'react';
import './Home.scss';
import { Element } from 'react-scroll';
import MainHome from './homeView/MainHome';
import SecondHome from './homeView/SecondHome';
import ThirdHome from './homeView/ThirdHome';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';

const Home = () => {
    return (
        <Element id="home" className="home-layout">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                className="home-carousel"
                totalSlides={2}
                orientation={"horizontal"}
                infinite={true}
                interval={5000}
                // isPlaying={true}
                playDirection={'forward'}
                // lockOnWindowScroll={true}
                totalSlides={3}
                // orientation={"vertical"}
                // visibleSlides={1}
            >
                <Slider>
                    <Slide index={0}>
                        {/* <h1>First</h1> */}
                        <MainHome></MainHome>
                    </Slide>
                    <Slide index={1}>
                        {/* <h1>Second</h1> */}
                        <SecondHome></SecondHome>
                    </Slide>
                    <Slide index={2}>
                        <ThirdHome></ThirdHome>
                    </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </Element>
    )
}

export default Home;