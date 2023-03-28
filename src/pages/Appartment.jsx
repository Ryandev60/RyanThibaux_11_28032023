import React from 'react';
import { Navigate } from 'react-router-dom';
import Carousel from '../components/appartment/Carousel';
import Main from '../components/appartment/Main';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import appartments from '../data/apartments.json';

const Appartment = () => {
    const params = new URL(document.location).searchParams;
    const appartmentId = params.get('id');

    const searchSelectedAppartment = () => {
        const filterAppartment = appartments.filter(
            (appartment) => appartment.id === appartmentId
        );
        return filterAppartment[0];
    };

    const selectedAppartment = searchSelectedAppartment();
    if (!selectedAppartment) return <Navigate to="/error" />;

    // !selectedAppartment && window.location.assign('/error');

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
                description={selectedAppartment.description}
                equipments={selectedAppartment.equipments}
            />
            <Footer />
        </>
    );
};

export default Appartment;
