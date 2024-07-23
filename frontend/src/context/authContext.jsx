import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (formData, role) => {
        let endpoint;

        // ENDPOINTS DETERMINATION
        if (role === "User") {
            endpoint = "/api/v1/user/login";
        }
        else if (role === "Driver") {
            endpoint = "/api/v1/driver/login";
        } 

        const res = await axios.post(endpoint, formData, {
            withCredentials: true,
        });
        setCurrentUser(res.data);
    };

    const logout = async (role) => {
        let endpoint;

        // ENDPOINTS DETERMINATION
        if (role === "User") {
            endpoint = "/api/v1/user/logout";
        } 
        else if (role === "Driver") {
            endpoint = "/api/v1/driver/logout";
        } 

        const res = await axios.post(endpoint);
        setCurrentUser(null);
        window.location.reload()
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};