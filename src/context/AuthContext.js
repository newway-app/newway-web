import React, {createContext, useState} from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [isAuth] = useState(false);

    return (
        <AuthContext.Provider value={isAuth}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;