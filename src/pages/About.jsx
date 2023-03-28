import React from 'react';
import Banner from '../components/about/Banner';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Accordeon from '../components/multi/Accordeon';
import textAbout from "../data/about.json"

const About = () => {
    return (
        <>
            <Header />
            <Banner />
            <Accordeon key="reliability" title="Fiabilité" isAbout={true} textAbout={textAbout.reliability}/>
            <Accordeon key="respect" title="Respect" isAbout={true} textAbout={textAbout.respect}/>
            <Accordeon key="service" title="Service" isAbout={true} textAbout={textAbout.service}/>
            <Accordeon key="security" title="Sécurité" isAbout={true} textAbout={textAbout.security}/>
            <Footer />
        </>
    );
};

export default About;
