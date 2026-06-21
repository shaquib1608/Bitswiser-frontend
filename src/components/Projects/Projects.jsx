import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";
import { Link } from "react-router-dom";

function Projects() {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const loadProjects = async () => {
            try {
                const response = await getProjects();
                setProjects(response.data);
            } catch (error) {
                console.error(
                    "Error loading projects:",
                    error
                );
            }
        };
        loadProjects();
    }, []);


    return (
        <section
            id="projects"
            className="py-24 px-6 bg-slate-900"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-14">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-800 rounded-2xl overflow-hidden"
                        >
                            {project.imageUrl ? (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="h-48 w-full object-cover"
                                />
                            ) : (
                                <div className="h-48 bg-slate-700"></div>
                            )}
                            <div className="p-6">
                                {project.featured && (
                                    <span
                                        className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-semibold"
                                    >
                                        Featured
                                    </span>
                                )}
                                <h3 className="text-2xl font-semibold mt-3 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-cyan-400 mb-3">
                                    {project.technologies}
                                </p>
                                <p className="text-gray-400 mb-6">
                                    {project.description}
                                </p>
                                <div className="flex gap-3 flex-wrap">
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 transition"
                                    >
                                        View Details
                                    </Link>
                                    {project.projectUrl && (
                                        <a
                                            href={project.projectUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bg-cyan-500 px-4 py-2 rounded-lg"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    {projects.length === 0 && (
                        <div className="col-span-3 text-center text-gray-400">
                            No projects available
                        </div>
                    )}
                </div>
            </div>
        </section>
    );

}

export default Projects;