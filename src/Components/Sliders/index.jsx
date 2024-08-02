import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Alan from '../../assets/Alan.png';
import Harry from '../../assets/Harry.jpeg';
import Ema from '../../assets/Ema.jpeg';
import Brie from '../../assets/Brie.jpg';
import Slider from "react-slick";
import './style.scss';

function SliderComponent() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const customers = [
        {
            Image: Alan,
            name: "Alan",
            description: "jhcxjgnnkjhdjhh"
        },
        {
            Image: Ema,
            name: "Ema",
            description: ""
        },
        {
            Image: Harry,
            name: "Harry",
            description: ""
        },
        {
            Image: Brie,
            name: "Brie",
            description: ""
        }
    ];

    return (
        <Slider {...settings}>
            {customers.map((customer, index) => (
                <div className='Slides' key={index}>
                    <div className='Mapped'>
                        <img src={customer.Image} alt={customer.name} />
                        <h2>{customer.name}</h2>
                       <p>{customer.description}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default SliderComponent;
