import React, {useEffect, useState} from 'react';

const Zegar = () => {
    const [czas, setCzas] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() =>{
            setCzas(new Date().toLocaleTimeString());
            console.log("Zegar został urochomiony")
        });
        return () => clearInterval(timer);
        }, []);
    return (
        <>
            <h1>Zegar</h1>
            <h2>{czas}</h2>
        </>

    );
};

export default Zegar;