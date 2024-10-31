import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const login = (userToken) => {
        setToken(userToken);
        localStorage.setItem("token", userToken);
    };
    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };
    const isAuthenticated = !!token;

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) setToken(storedToken);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    console.log("context", context)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};