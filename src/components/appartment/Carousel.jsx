import React, { useState } from 'react';

const Carousel = (props) => {
    const carouselImg = props.carouselImg;
    const [currentImg, setCurrentImg] = useState(0);

    const changeImg = (choice) => {
        if (choice === 'after') {
            currentImg === carouselImg.length - 1
                ? setCurrentImg(0)
                : setCurrentImg(currentImg + 1);
        } else {
            currentImg === 0
                ? setCurrentImg(carouselImg.length - 1)
                : setCurrentImg(currentImg - 1);
        }
    };

    return (
        <section className="appartment-carousel">
            {carouselImg.length > 1 && (
                <>
                    <i
                        className="fa-solid fa-chevron-left appartment-carousel--arrow appartment-carousel--arrow-left"
                        onClick={() => changeImg('before')}
                    ></i>
                    <p className="appartment-carousel--number">
                        {currentImg + 1}/{carouselImg.length}
                    </p>
                    <i
                        className="fa-solid fa-chevron-right appartment-carousel--arrow appartment-carousel--arrow-right"
                        onClick={() => changeImg('after')}
                    ></i>
                </>
            )}

            <img
                src={carouselImg[currentImg]}
                alt="Carrousel"
                className="appartment-carousel--img"
            />
        </section>
    );
};

export default Carousel;
