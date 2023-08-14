import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    const userSingIn = (data) => {
        console.log(data);
        const options = {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        fetch(`${import.meta.env.VITE_BASE_URL}/user`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    
    const userLogIn = (data) => {
        console.log(data);
        const options = {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: 'include'
        };
        fetch(`${import.meta.env.VITE_BASE_URL}/user/login`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setUser(response)
            })
            .catch(err => console.error(err));
    }

    const authInfo = { user, setUser, userSingIn, userLogIn }
    console.log('user:', user);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
