
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "Billeder/Fotos/420605_371193742998600_251405456_n.jpg",
    "Billeder/Fotos/935231_371193959665245_700749190_n.jpg",
    "Billeder/Fotos/936700_371193732998601_1760819839_n.jpg",
    "Billeder/Fotos/13226644_958660240918611_3434291679470295660_n.jpg"
];

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
