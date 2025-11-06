import React from 'react';

const Owoce = () => {
    const fruits = ["japórzko", "bananuch","kokos", "bananuch"]
    
    return (
        <ul>
            {
                fruits.map((owoc,index) => <li key={index}>{owoc}</li>)
            }
        </ul>
    );
};

export default Owoce;