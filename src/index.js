import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./components/login";
import Registrar from "./components/Registrar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {AuthProvider, useAuth} from './context/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthProvider>
    <Routes>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/registrar'} element={<Registrar/>} />
        <Route path={'*'} element={<h1>Ruta erronea!!!!</h1>}/>
        <Route path={'/'} element={<App/>} index/>
    </Routes>
          </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

