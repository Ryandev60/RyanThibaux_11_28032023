import React from 'react';
import Banner from '../components/home/Banner';
import Cards from '../components/home/Cards';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Cards />
            </main>

            <Footer />
        </>
    );
};

export default Home;
