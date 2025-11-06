import React from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";



function Glowny(){
    const navigate = useNavigate()
    const kliknij = () =>{
        navigate("/login")
    }
    return(
        <>
            <h2>Strona Główna</h2>
            <button onClick={kliknij}>Do logowania</button>
        </>
    );
}

function Loguj() {
    const navigate = useNavigate()
    const kliknij = () =>{
        navigate("/dashboard")
    }

    return(
        <>
            <h2>Logowanie</h2>
            Login:<input type="text"/>
            Hasło:<input type="text"/>
            <button onClick={kliknij}>Loguj</button>
        </>
    );
}

function About() {
    return <h2>O</h2>
}

function Dashboard(){
    return(
        <>
            <h2>Zalogowano</h2>
        </>
    )
}
const ZadaniaRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Glowny/>}></Route>
                    <Route path="/login" element={<Loguj/>}></Route>
                    <Route path="/dashboard" element={<Dashboard/>}></Route>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/old-about" element={navigate("/about")}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default ZadaniaRouter;