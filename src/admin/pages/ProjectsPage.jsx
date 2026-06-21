import AdminLayout from "../components/AdminLayout";
import { useEffect, useState } from "react";

import {
    getProjects,
    createProject,
    updateProject,
    deleteProject
} from "../services/projectService";

import {
    uploadProjectImage
} from "../services/uploadService";

function ProjectsPage() {

    const [projects, setProjects] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [form, setForm] = useState({
        title: "",
        description: "",
        imageUrl: "",
        projectUrl: "",
        technologies: "",
        featured: false
    });
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
    useEffect(() => {
        loadProjects();
    }, []);
    const resetForm = () => {
        setForm({
            title: "",
            description: "",
            imageUrl: "",
            projectUrl: "",
            technologies: "",
            featured: false
        });
        setImageFile(null);
        setEditingId(null);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let imageUrl = form.imageUrl;
            if (imageFile) {
                imageUrl =
                    await uploadProjectImage(
                        imageFile
                    );
            }
            const projectData = {
                ...form,
                imageUrl
            };
            if (editingId) {
                await updateProject(
                    editingId,
                    projectData
                );
            } else {
                await createProject(
                    projectData
                );
            }
            resetForm();
            loadProjects();
        } catch (error) {
            console.error(
                "Error saving project:",
                error
            );
        }
    };
    const handleEdit = (project) => {
        setEditingId(project.id);
        setForm({
            title: project.title || "",
            description:
                project.description || "",
            imageUrl:
                project.imageUrl || "",
            projectUrl:
                project.projectUrl || "",
            technologies:
                project.technologies || "",
            featured:
                project.featured || false
        });
    };
    const handleDelete = async (id) => {
        try {
            await deleteProject(id);
            loadProjects();
        } catch (error) {
            console.error(
                "Error deleting project:",
                error
            );
        }
    };
    return (
        <AdminLayout>
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">
                    Projects Management
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 bg-slate-800 p-6 rounded-xl"
                >
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={form.title}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                title:
                                    e.target.value
                            })
                        }
                        className="w-full p-3 rounded bg-slate-700"
                    />
                    <textarea
                        placeholder="Description"
                        value={form.description}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                description:
                                    e.target.value
                            })
                        }
                        className="w-full p-3 rounded bg-slate-700"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            setImageFile(
                                e.target.files[0]
                            )
                        }
                        className="w-full p-3 rounded bg-slate-700"
                    />
                    <input
                        type="text"
                        placeholder="Project URL"
                        value={form.projectUrl}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                projectUrl:
                                    e.target.value
                            })
                        }
                        className="w-full p-3 rounded bg-slate-700"
                    />
                    <input
                        type="text"
                        placeholder="Technologies"
                        value={form.technologies}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                technologies:
                                    e.target.value
                            })
                        }
                        className="w-full p-3 rounded bg-slate-700"
                    />
                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={form.featured}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    featured:
                                        e.target.checked
                                })
                            }
                        />
                        Featured Project
                    </label>
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="bg-cyan-500 px-6 py-3 rounded-lg"
                        >
                            {editingId
                                ? "Update Project"
                                : "Add Project"}
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                onClick={resetForm}
                                className="bg-gray-600 px-6 py-3 rounded-lg"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
                <div className="mt-10">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-800 p-5 rounded-xl mb-4"
                        >
                            {project.imageUrl && (
                                <img
                                    src={
                                        project.imageUrl
                                    }
                                    alt={
                                        project.title
                                    }
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                            )}
                            <h3 className="text-xl font-bold">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mt-2">
                                {project.description}
                            </p>
                            <p className="mt-2">
                                {
                                    project.technologies
                                }
                            </p>
                            {project.featured && (
                                <span className="text-cyan-400">
                                    Featured
                                </span>
                            )}
                            <div className="mt-4 flex gap-3">
                                <button
                                    onClick={() =>
                                        handleEdit(
                                            project
                                        )
                                    }
                                    className="bg-yellow-500 px-4 py-2 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() =>
                                        handleDelete(
                                            project.id
                                        )
                                    }
                                    className="bg-red-500 px-4 py-2 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );

}

export default ProjectsPage;