import React, {useEffect, useState} from 'react';

const LicznikZProgiem = () => {
    const [licznik,setLicznik] = useState(0);
    const [komunikat, setKomunikat] = useState("");
    useEffect(() => {
        if(licznik > 10 ){
            setKomunikat("Przekroczono limit cwelu");
        }
        console.log(`Klikniec jest ${licznik}`)
    }, [licznik]);
    return (
        <>
            <h1>Progowy licznik</h1>
            <button onClick={() => setLicznik(prev => prev+1)}>Zwieksz</button>
            {
                komunikat && <p style={{color:"red"}}>{komunikat}</p>
            }
        </>
    );
};

export default LicznikZProgiem;