import React, {useEffect} from 'react';

const PierwszeRysowanie = () => {
    useEffect(() => {
        console.log("Komponent został urochomiony tyko ras");
    }, []);
    return (
        <>
            <h1>Piuwrsze Ruswoanie</h1>
        </>
    );
};

export default PierwszeRysowanie;