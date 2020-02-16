import React, {createContext, useState} from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');

    const auth = (props) => {
        setToken(props);
        setIsAuth(true);
    };

    return (
        <AuthContext.Provider value={{auth, isAuth, token}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;