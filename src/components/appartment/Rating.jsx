import React from 'react';

const Rating = (props) => {

    const calcRate = (number) => {
        return number > props.rating ? 'empty' : 'fill';
    };
    return (
        <div className="appartment-rating">

            <img src={`./images/star-${calcRate(1)}.png`} alt="Étoiles de notation" />
            <img src={`./images/star-${calcRate(2)}.png`} alt="Étoiles de notation" />
            <img src={`./images/star-${calcRate(3)}.png`} alt="Étoiles de notation" />
            <img src={`./images/star-${calcRate(4)}.png`} alt="Étoiles de notation" />
            <img src={`./images/star-${calcRate(5)}.png`} alt="Étoiles de notation" />
            
        </div>
    );
};

export default Rating;
