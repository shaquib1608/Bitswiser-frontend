import AdminLayout from "../components/AdminLayout";
import { useEffect, useState } from "react";
import {
    getServices,
    createService,
    deleteService,
    updateService
} from "../services/serviceService";

function Services() {





    const [services, setServices] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState({
        title: "",
        description: "",
        icon: "",
        price: ""
    });
    const loadServices = async () => {
        try {
            const response = await getServices();
            setServices(response.data);
        } catch (error) {
            console.error(
                "Error fetching services:",
                error
            );
        }
    };
    useEffect(() => {
        loadServices();
    }, []);
    const resetForm = () => {
        setForm({
            title: "",
            description: "",
            icon: "",
            price: ""
        });
        setEditingId(null);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await updateService(
                    editingId,
                    form
                );
            } else {
                await createService(form);
            }
            resetForm();
            loadServices();
        } catch (error) {
            console.error(
                "Error saving service:",
                error
            );
        }
    };
    const handleEdit = (service) => {
        setEditingId(service.id);
        setForm({
            title: service.title || "",
            description: service.description || "",
            icon: service.icon || "",
            price: service.price || ""
        });
    };
    const handleDelete = async (id) => {
        try {
            await deleteService(id);
            loadServices();
        } catch (error) {
            console.error(
                "Error deleting service:",
                error
            );
        }
    };
    return (
        <AdminLayout>
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">
                    Services Management
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 bg-slate-800 p-6 rounded-xl"
                >
                    <input
                        type="text"
                        placeholder="Service Title"
                        value={form.title}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                title: e.target.value
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
                                description: e.target.value
                            })
                        }
                        className="w-full p-3 rounded bg-slate-700"
                    />
                    <input
                        type="text"
                        placeholder="Icon Name"
                        value={form.icon}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                icon: e.target.value
                            })
                        }
                        className="w-full p-3 rounded bg-slate-700"
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={form.price}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                price: e.target.value
                            })
                        }
                        className="w-full p-3 rounded bg-slate-700"
                    />
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="bg-cyan-500 px-6 py-3 rounded-lg"
                        >
                            {editingId
                                ? "Update Service"
                                : "Add Service"}
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
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-slate-800 p-5 rounded-xl mb-4"
                        >
                            <h3 className="text-xl font-bold">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 mt-2">
                                {service.description}
                            </p>
                            <p className="mt-2">
                                Icon: {service.icon}
                            </p>
                            <p className="mt-2">
                                ₹ {service.price}
                            </p>
                            <div className="mt-4 flex gap-3">
                                <button
                                    onClick={() =>
                                        handleEdit(service)
                                    }
                                    className="bg-yellow-500 px-4 py-2 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() =>
                                        handleDelete(service.id)
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

export default Services;