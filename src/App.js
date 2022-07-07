import React from "react";
import './App.css';
import {useAuth} from './context/authContext';
import {Link, Route, Routes} from 'react-router-dom';
import Login from "./components/login";
import Registrar from "./components/Registrar";
import Home from "./components/Home";
import {supabase} from "./supabase/credencial_supabase";

function App() {
    const authcontex=useAuth();
    const {user}=authcontex;
    async function salir() {
        try{
            const {error} = await supabase.auth.signOut();
            error?console.log(error):console.log('se ha cerrado sesión');
        }catch (e) {
            console.log(e.message);
        }


    }
    //aqui en el console log s eve claro el ejemplo de contexto
    //console.log(authcontex);
    //console.log(user);
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#"  to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" href="#" to={'/login'}>Login</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" href="#" to={'/registrar'}>Registrar</Link>
                        </li>
                    </ul>
                    <button className='btn btn-primary' onClick={salir}>Salir</button>
                </div>
            </div>

        </nav>
        <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/registrar'} element={<Registrar/>}/>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'*'} element={<h1>Ruta erronea!!!!</h1>}/>
        </Routes>
    </div>

  );
}

export default App;
