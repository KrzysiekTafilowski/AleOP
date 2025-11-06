import React, {useState} from 'react';

const Counter = () => {
    const [licznik, setLicznik] = useState(0);
    const [tekst, setTekst] = useState("")
    let isLoggedin = true;
    return (
        <div>
            <button onClick={() => setLicznik(licznik+1)}>
                Kliknięto: {licznik} razy
            </button>
            <input type="text" value={tekst} onChange={(e) => setTekst(e.target.value)}/>
            <h4>{tekst}</h4>
            <p>{isLoggedin ? <h6>zalogowaned</h6> : <h6>Niezalogowaned</h6>}</p>

        </div>
    );
};

export default Counter;