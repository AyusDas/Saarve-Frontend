import React from 'react'

const Card = (props) => {
    return (
        <div className="w-max h-max overflow-hidden flex flex-col items-center">
            <div>
                <img src={props.img} className="object-scale-down h-40 w-80"/>
            </div>
            <div className="py-3 font-semibold text-base">{props.title}</div>
        </div>
    )
};

export default Card;
