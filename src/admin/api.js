import axios from "axios";



const BASE_URL = import.meta.env.VITE_API_URL || "https://bitswiser-backend.onrender.com";

const API_URL = BASE_URL;

const api = axios.create({
    baseURL: `${API_URL}/api`
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

export default api;