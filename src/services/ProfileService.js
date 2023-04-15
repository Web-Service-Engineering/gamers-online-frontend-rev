// src/authService.js
import axios from "axios";
import jwtDecode from "jwt-decode";

//const API_BASE_URL = "https://gamers-online-matching-kiraleroger-gmailcom.vercel.app/"; // Replace with your Flask API URL
const API_BASE_URL = "http://127.0.0.1:5000/"; // Replace with your Flask API URL

const ProfileService = {
    getProfileById: async (accountId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}profile/${accountId}`);
            return response;
        } catch (error) {
            return false
        }
    },
    getAccountById: async (accountId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}account/${accountId}`);
            return response;
        } catch (error) {
            return false
        }
    },
    getProfileFriendsById: async (accountId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}profile/friends/${accountId}`);
            return response.data;
        } catch (error) {
            console.error("Error:", error);
        }
    },

    createProfile: async (data) => {
        try {
            const response = await axios.post(`${API_BASE_URL}profile/`, { ...data });
            return response.data;
        } catch (error) {
            console.error("Create error:", error);
        }
    },
    createBartleTest: async (data) => {
        try {
            const response = await axios.post(`${API_BASE_URL}bartlequotient/`, { ...data });
            return response.data;
        } catch (error) {
            console.error("Create error:", error);
        }
    },
    updateProfile: async (data) => {
        try {
            const response = await axios.put(`${API_BASE_URL}profile/`, { ...data });
            return response;
        } catch (error) {
            console.error("Create error:", error);
        }
    },
};

export default ProfileService;
