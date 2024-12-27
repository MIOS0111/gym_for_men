import React from 'react';

function Person(props) {
    return(
        <div className="person">
            <img className='img_card' src={props.image} alt="нет фото"/>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Person