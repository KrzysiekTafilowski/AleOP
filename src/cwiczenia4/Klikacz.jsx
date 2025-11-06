import React, {useEffect, useState} from 'react';

const Klikacz = () => {
    const [ilosc, setIlosc] = useState(0);
    useEffect(() => {
        console.log(`Efekt został urocjomojiy . Klinkniet ${ilosc} razy`);
    }, [ilosc]);
    return (
        <>
            <h1>Klikacz</h1>
            <h2>Kliknięto {ilosc} razy</h2>
            <button onClick={() => setIlosc(prev => prev+1)}>Poiwksz</button>
        </>
    );
};

export default Klikacz;