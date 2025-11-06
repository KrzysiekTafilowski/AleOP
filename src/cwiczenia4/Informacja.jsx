import React, {useEffect} from 'react';


const Informacja = ({wiadomosc, licznik}) => {
    useEffect(() => {
        console.log(`nowa Wiadomosc to ${wiadomosc}`)
    }, [wiadomosc]);

    return(
        <>
            <h1>{wiadomosc}</h1>
        </>
    );

};

export default Informacja;