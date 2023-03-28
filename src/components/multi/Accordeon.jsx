import React from 'react';

const Accordeon = (props) => {
    const deployAccordeon = (e) => {
        console.log(e.style.transform);
        e.style.transform === 'rotate(180deg)'
            ? (e.style.transform = 'rotate(0deg)')
            : (e.style.transform = 'rotate(180deg)');
        e.parentNode.nextSibling.classList.toggle('display');
    };

    return (
        <div className="accordeon">
            <div className="accordeon--top">
                {props.title}
                <i
                    className="fa-solid fa-chevron-up"
                    onClick={(e) => deployAccordeon(e.target)}
                ></i>
            </div>

            {props.title === 'Description' && (
                <div className="accordeon--bottom accordeon--bottom__description">
                    {props.description}
                </div>
            )}

            {props.title === 'Équipements' && (
                <div className="accordeon--bottom accordeon--bottom__description">
                    <ul>
                        {props.equipments.map((equipment) => (
                            <li>{equipment}</li>
                        ))}
                    </ul>
                </div>
            )}

            {props.isAbout && (
                <div className="accordeon--bottom accordeon--bottom__description">
                    {props.textAbout}
                </div>
            )}
        </div>
    );
};

export default Accordeon;
