import React from 'react';

const Rating = (props) => {

    const calcRate = (number) => {
        return number > props.rating ? 'empty' : 'fill';
    };
    return (
        <div className="appartment-rating">
            <i className={`fa-solid fa-star ${calcRate(1)}`}></i>
            <i className={`fa-solid fa-star ${calcRate(2)}`}></i>
            <i className={`fa-solid fa-star ${calcRate(3)}`}></i>
            <i className={`fa-solid fa-star ${calcRate(4)}`}></i>
            <i className={`fa-solid fa-star ${calcRate(5)}`}></i>
        </div>
    );
};

export default Rating;
