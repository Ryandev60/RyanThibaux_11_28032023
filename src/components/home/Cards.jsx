import React from 'react';
import Card from './Card';
import apartments from '../../data/apartments.json';

const Cards = () => {
    const buildCard = apartments.map((apartment) => (
        <Card
            key={apartment.id}
            id={apartment.id}
            cover={apartment.cover}
            title={apartment.title}
        />
    ));
    return <section className="cards">{buildCard}</section>;
};

export default Cards;
