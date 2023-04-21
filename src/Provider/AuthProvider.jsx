import { getAuth } from "firebase/auth";
import React, { createContext } from 'react';
import app from '../firebase/firebase.config.js';


export const AuthContext = createContext(null);


const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const user = { displayName: 'samaul' }
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