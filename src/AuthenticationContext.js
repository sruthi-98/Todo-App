import React, { createContext, useContext, useReducer } from 'react';

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({reducer, initialState, children}) => (
    <AuthenticationContext.Provider value={useReducer(reducer, initialState)}>
                {children}
           </AuthenticationContext.Provider>
)

export const useAuthenticationValue = useContext(AuthenticationContext);