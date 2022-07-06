import React, {createContext, useContext} from 'react';

export const authContext=createContext(null);

 export const useAuth=()=>{
     return useContext(authContext);

 }
export function AuthProvider({children}) {
    const user={
        login:true,
        admin:false
    }
    const cadena='Probando Cadena';
    return(
        <authContext.Provider value={{user,cadena}}>
            {children}
        </authContext.Provider>
    )
}
//Ejemplo para user context, la linea de abajo es un ejemplo de lo unico que se deve importar
//import {useAuth} from '../context/authContext';