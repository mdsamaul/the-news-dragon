import { getAuth } from "firebase/auth";
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config.js';


export const AuthContext = createContext(null);


const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const authInfo = {
        user

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;