import React from 'react';

const Banner = () => {
    return (
        <section className="home-banner">
            <img
                src="./images/banner-home.png"
                alt="Chez vous, partout et ailleurs"
                className="home-banner--img"
            />
            <p className='home-banner--txt'>Chez vous, partout et ailleurs</p>
        </section>
    );
};

export default Banner;
