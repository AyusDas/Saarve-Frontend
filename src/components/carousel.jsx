import React from 'react'
import Card from './card';

const Carousel = ({SlideData}) => {
    return (
        <div className="flex flex-1 gap-5 mt-5">
            {SlideData.map((slide) => (
                <Card img={slide.img} title={slide.title}/>
            ))}
        </div>
    )
};

export default Carousel;
