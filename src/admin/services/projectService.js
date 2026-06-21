import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8090";

const API_URL = `${BASE_URL}/api/admin/projects`;

const getToken = () => {
    return localStorage.getItem("token");
};

export const getProjects = () => {
    return axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
};

export const createProject = (project) => {
    return axios.post(API_URL, project, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
};

export const deleteProject = (id) => {
    return axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });



};

export const updateProject = (id, project) => {
    return axios.put(`${API_URL}/${id}`, project, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}