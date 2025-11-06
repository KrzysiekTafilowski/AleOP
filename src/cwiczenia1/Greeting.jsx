import React from 'react';

const Greeting = (props) => {
    return (
        <div>
            <h3>Cześć, {props.imie} - wiek:{[props.wiek]}</h3>
        </div>
    );
};

export default Greeting;