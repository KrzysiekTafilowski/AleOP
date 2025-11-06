import React from 'react';
import {BrowserRouter, Link, Route, Routes, useNavigate, useParams} from "react-router-dom";
import './ReactRouter.css';


function  Home(){
    return <h2>Strona główna</h2>
}
function  Contact(){
    const navigate = useNavigate();
    const kliknij = () => {
        navigate("/about");
    }
    return(
        <>
            <h2>Kontakt</h2>
            <button onClick={kliknij}>Przejdź do strony o nas</button>
        </>
    );
}

function  About(){
    return <h2>O</h2>
}

function  NotFound(){
    return <h2>Nie ma esz</h2>
}

function Page(){
    const {id} = useParams();
    return <h2>Użytkownik nr {id}</h2>
}
const ReactRouter = () => {
    return (
        <>
            <BrowserRouter>
                <ul>
                    <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li><Link to="/user/1">Uztykownik 1</Link></li>
                    <li><Link to="/user/2">Uztykownik 2</Link></li>
                    <li><Link to="/about">O</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*"  element={<NotFound/>}/>
                    <Route path ="/user/:id" element={<Page/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default ReactRouter;