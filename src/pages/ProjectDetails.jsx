import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import API_URL from "../config/api";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function ProjectDetails() {

    const { id } = useParams();
    const [project, setProject] = useState(null);
    useEffect(() => {
        const loadProject = async () => {
            try {
                const response = await axios.get(
                    `${API_URL} / api / projects / ${id}`
                );
                setProject(response.data);
            } catch (error) {
                console.error(
                    "Error loading project:",
                    error
                );
            }
        };
        loadProject();
    }, [id]);
    if (!project) {
        return (
            <div className="text-center py-20">
                Loading...
            </div>
        );
    }
    return (
        <>
            <Navbar />
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    {project.imageUrl && (
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-96 object-cover rounded-2xl mb-10"
                        />
                    )}
                    <h1 className="text-5xl font-bold mb-6">
                        {project.title}
                    </h1>
                    <p className="text-cyan-400 mb-6">
                        {project.technologies}
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                    </p>
                    {project.projectUrl && (
                        <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mt-8 bg-cyan-500 px-6 py-3 rounded-lg"
                        >
                            Visit Project
                        </a>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );

}

export default ProjectDetails;