import AdminLayout from "../components/AdminLayout";

import { useEffect, useState } from "react";

import {
    getDashboardStats,
    getRecentInquiries,
    getRecentProjects
} from "../services/dashboardService";

function Dashboard() {

    const [stats, setStats] = useState([]);
    const [inquiries, setInquiries] =
        useState([]);
    const [projects, setProjects] =
        useState([]);
    useEffect(() => {
        loadDashboard();
    }, []);
    const loadDashboard = async () => {
        try {
            const statsResponse =
                await getDashboardStats();
            const inquiriesResponse =
                await getRecentInquiries();
            const projectsResponse =
                await getRecentProjects();
            setStats([
                {
                    title: "Projects",
                    value:
                        statsResponse.data.projects
                },
                {
                    title: "Services",
                    value:
                        statsResponse.data.services
                },
                {
                    title: "Inquiries",
                    value:
                        statsResponse.data.inquiries
                },
                {
                    title: "Team",
                    value: 1
                }
            ]);
            setInquiries(
                inquiriesResponse.data
            );
            setProjects(
                projectsResponse.data
            );
        } catch (error) {
            console.error(
                "Dashboard Error:",
                error
            );
        }
    };
    return (
        <AdminLayout>
            <h1 className="text-4xl font-bold mb-10">
                Dashboard
            </h1>
            <div className="grid md:grid-cols-4 gap-6 mb-10">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-slate-800 p-6 rounded-xl"
                    >
                        <h3 className="text-gray-400">
                            {item.title}
                        </h3>
                        <p className="text-4xl font-bold mt-3">
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-xl">
                    <h2 className="text-2xl font-bold mb-4">
                        Recent Inquiries
                    </h2>
                    {inquiries.map(
                        (item) => (
                            <div
                                key={item.id}
                                className="border-b border-slate-700 py-3"
                            >
                                <h4 className="font-semibold">
                                    {item.name}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    {item.subject}
                                </p>
                            </div>
                        )
                    )}
                </div>
                <div className="bg-slate-800 p-6 rounded-xl">
                    <h2 className="text-2xl font-bold mb-4">
                        Recent Projects
                    </h2>
                    {projects.map(
                        (project) => (
                            <div
                                key={project.id}
                                className="border-b border-slate-700 py-3"
                            >
                                <h4 className="font-semibold">
                                    {project.title}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    {
                                        project.technologies
                                    }
                                </p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </AdminLayout>
    );

}

export default Dashboard;