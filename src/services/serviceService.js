import api from "../admin/api";

export const getServices = () => {
    return api.get("/services");
}