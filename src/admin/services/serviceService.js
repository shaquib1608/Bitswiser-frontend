import api from "../api";

export const getServices = () => {
    return api.get("/services");
}

export const createService = (service) => {
    return api.post("/services", service);
}

export const updateService = (id, service) => {
    return api.put(`/services/${id}`, service);
}

export const deleteService = (id) => {
    return api.delete(`/services/${id}`);
}