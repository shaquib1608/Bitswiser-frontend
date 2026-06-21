import AdminLayout from "../components/AdminLayout";

import { useEffect, useState } from "react";

import {
    getContacts,
    deleteContact
} from "../services/contactService";

function MessagesPage() {

    const [messages, setMessages] = useState([]);

    const loadMessages = async () => {

        try {

            const response = await getContacts();

            setMessages(response.data);

        } catch (error) {

            console.error(error);
        }
    };

    useEffect(() => {
        loadMessages();
    }, []);

    const handleDelete = async (id) => {

        try {

            await deleteContact(id);

            loadMessages();

        } catch (error) {

            console.error(error);
        }
    };

    return (
        <AdminLayout>

            <h1 className="text-4xl font-bold mb-8">
                Messages
            </h1>

            <div className="space-y-6">

                {messages.map((message) => (

                    <div
                        key={message.id}
                        className="bg-slate-800 p-6 rounded-xl"
                    >

                        <h2 className="text-xl font-bold">
                            {message.subject}
                        </h2>

                        <p className="mt-2">
                            <strong>Name:</strong> {message.name}
                        </p>

                        <p>
                            <strong>Email:</strong> {message.email}
                        </p>

                        <p className="mt-4">
                            {message.message}
                        </p>

                        <button
                            onClick={() =>
                                handleDelete(message.id)
                            }
                            className="mt-4 text-red-400"
                        >
                            Delete
                        </button>

                    </div>

                ))}

            </div>

        </AdminLayout>
    );
}

export default MessagesPage;