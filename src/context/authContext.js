import React, {createContext, useContext} from 'react';
import {supabase} from '../supabase/credencial_supabase';

export const authContext=createContext(null);

 export const useAuth=()=>{
     return useContext(authContext);

 }
export function AuthProvider({children}) {
const signup=(email,password)=>{
    console.log(email,password);
}

    return(
        <authContext.Provider value={{signup}}>
            {children}
        </authContext.Provider>
    )
}
//Ejemplo para user context, la linea de abajo es un ejemplo de lo unico que se deve importar
//import {useAuth} from '../context/authContext';