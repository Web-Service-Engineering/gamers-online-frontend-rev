// src/authService.js
import axios from "axios";
import jwtDecode from "jwt-decode";

//const API_BASE_URL = "https://gamers-online-matching-kiraleroger-gmailcom.vercel.app/"; // Replace with your Flask API URL
const API_BASE_URL = "http://127.0.0.1:5000/"; // Replace with your Flask API URL

const authService = {
    register: async (email, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}account/`, { email, password });
            return response;
        } catch (error) {
            return error.response
            //console.error("Login error:", error );
        }
    },
    login: async (email, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}authenticate/login`, { email, password });
            return response;
        } catch (error) {
            return error.response
            //console.error("Login error:", error );
        }
    },

    logout: async () => {
        const token = authService.getToken();
        if (token) {
            try {
                // const response = await axios.post(`${API_BASE_URL}authenticate/logout`, {
                //     headers: {
                //         "Content-Type": "application/json",
                //         "Authorization": `Bearer ${token}`,
                //     },
                // });
                const response = await axios.post(
                    `${API_BASE_URL}authenticate/logout`,
                    {},
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.status == 200) {
                    authService.removeToken();
                } else {
                    // handle error
                    console.error("Logout failed:", response.status);
                }
            } catch (error) {
                console.error("Logout error:", error.response.data.message);
            }
        } else {
            console.error("No token found");
        }
    },

    setToken: (token) => {
        localStorage.setItem("jwt_token", token);
    },

    getToken: () => {
        return localStorage.getItem("jwt_token");
    },

    removeToken: () => {
        localStorage.removeItem("jwt_token");
    },

    getUserId: () => {
        const token = authService.getToken();
        if (!token) return null;

        try {
            const decodedToken = jwtDecode(token);
            return decodedToken.sub;
        } catch (error) {
            console.error("Error decoding JWT token:", error);
            return null;
        }
    },

    // Add any other authentication-related methods here
};

export default authService;
