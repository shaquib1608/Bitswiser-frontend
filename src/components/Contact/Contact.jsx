import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";

import API_URL from "../../config/api";

function Contact() {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            !form.name ||
            !form.email ||
            !form.subject ||
            !form.message
        ) {
            alert("Please fill all fields");
            return;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(form.email)) {
            alert("Please enter a valid email");
            return;
        }

        try {

            setLoading(true);

            await axios.post(
                `${API_URL}/api/contact`,
                form
            );

            toast.success("Message sent successfully!");

            setForm({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        } catch (error) {

            console.error(error);

            toast.error("Failed to send message");

        } finally {

            setLoading(false);

        }
    };

    return (

        <section
            id="contact"
            className="py-24 px-6 bg-slate-900"
        >

            <div className="max-w-3xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Let's Work Together
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name: e.target.value
                            })
                        }
                        className="w-full p-4 rounded-xl bg-slate-800"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                email: e.target.value
                            })
                        }
                        className="w-full p-4 rounded-xl bg-slate-800"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                subject: e.target.value
                            })
                        }
                        className="w-full p-4 rounded-xl bg-slate-800"
                    />

                    <textarea
                        rows="6"
                        placeholder="Project Details"
                        value={form.message}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                message: e.target.value
                            })
                        }
                        className="w-full p-4 rounded-xl bg-slate-800"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-cyan-500 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition"
                    >
                        {loading
                            ? "Sending..."
                            : "Send Inquiry"}
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Contact;