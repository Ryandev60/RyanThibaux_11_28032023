import React from 'react';
import Banner from '../components/home/Banner';
import Cards from '../components/home/Cards';
import Header from '../components/layout/Header';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Cards />
        </>
    );
};

export default Home;
