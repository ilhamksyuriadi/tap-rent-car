import React from 'react';
import Home from '../components/Home';
import Category from '../components/Category';
import CarList from '../components/CarList';
import Gallery from '../components/Gallery';
// import Footer from '../components/Footer';

const Main = () => {
    return(
        <div>
            <Home></Home>
            <Category></Category>
            <CarList></CarList>
            <Gallery></Gallery>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default Main;