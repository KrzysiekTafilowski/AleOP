import React, {useEffect, useState} from 'react';

const Powitanie = () => {
    const [tekst, settekst] = useState()
    useEffect(() => {
        console.log("Komponent został wyrenderowany");
    });
    return (
        <>
            <h1>{tekst}</h1>
            <button onClick={() => settekst("HELO")}>Cwel</button>
        </>
    );
};

export default Powitanie;