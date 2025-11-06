import React, {useEffect, useState} from 'react';

const StatusSieci = () => {
    const [status, setStatus] = useState(navigator.onLine);
    useEffect(() => {
        window.addEventListener('online', () =>setStatus(false));
        window.addEventListener('offline', () =>setStatus(true));
        return () => {
            window.removeEventListener('online',()=>setStatus(false));
            window.removeEventListener('offline',()=>setStatus(true));
        }
    }, [navigator.onLine]);
    return (
        <>
            <h2>Status sieci</h2>
            {
                status === true  ?  <p style={{color:"green"}}>Jesteś online esa </p> : <p style={{color:"red"}}>Jesteś ofline esa</p>
            }
        </>
    );
};

export default StatusSieci;