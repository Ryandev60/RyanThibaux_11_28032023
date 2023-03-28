import React from 'react';
import Carousel from '../components/appartment/Carousel';
import Main from '../components/appartment/Main';
import Header from '../components/layout/Header';
import appartments from '../data/apartments.json';

const Appartment = () => {
    const params = new URL(document.location).searchParams;
    const appartmentId = params.get('id');

    const searchSelectedAppartment = () => {
        const test = appartments.filter(
            (appartment) => appartment.id === appartmentId
        );
        return test[0];
    };

    const selectedAppartment = searchSelectedAppartment();

    return (
        <>
            <Header />
            <Carousel carouselImg={selectedAppartment.pictures} />
            <Main
                title={selectedAppartment.title}
                location={selectedAppartment.location}
                hostName={selectedAppartment.host.name}
                hostPicture={selectedAppartment.host.picture}
                rating={selectedAppartment.rating}
                tags={selectedAppartment.tags}
            />
        </>
    );
};

export default Appartment;
