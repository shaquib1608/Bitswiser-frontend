import api from "../api";

export const getDashboardStats = () => {
    return api.get("/dashboard/stats");
}

export const getRecentInquiries = () => {
    return api.get("/dashboard/recent-inquiries");
}

export const getRecentProjects = () => {
    return api.get("/dashboard/recent-projects");
}