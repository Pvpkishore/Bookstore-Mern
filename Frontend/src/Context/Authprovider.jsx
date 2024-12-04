import React, { createContext, useContext, useState, } from 'react'

export const AuthContext = createContext()

function Authprovider({ children }) {
    const intialAuthuser = localStorage.getItem("Users");
    const [authuser, setAuthuser] = useState(
        intialAuthuser ? JSON.parse(intialAuthuser) : null
    )
    return (
        <AuthContext.Provider value={[authuser, setAuthuser ]}>
            {children}
        </AuthContext.Provider>
    )
}

export default Authprovider

export const useAuth = () => useContext(AuthContext)