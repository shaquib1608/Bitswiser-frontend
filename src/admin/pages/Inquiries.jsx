import AdminLayout from "../components/AdminLayout";
import { useEffect, useState } from "react";
import {
    getContacts,
    deleteContact
} from "../services/contactService";

function Inquiries() {

    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {

        try {

            const response = await getContacts();
            setContacts(response.data);

        } catch (error) {

            console.error(
                "Error loading contacts:",
                error
            );
        }
    };

    useEffect(() => {
        loadContacts();
    }, []);

    const handleDelete = async (id) => {

        try {

            await deleteContact(id);
            loadContacts();

        } catch (error) {

            console.error(
                "Error deleting contact:",
                error
            );
        }
    };

    return (
        <AdminLayout>

            <h1 className="text-4xl font-bold mb-8">
                Client Inquiries
            </h1>

            <table className="w-full bg-slate-800 rounded-xl">

                <thead>

                    <tr>

                        <th className="p-4">Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {contacts.map(contact => (

                        <tr
                            key={contact.id}
                            className="text-center border-t border-slate-700"
                        >

                            <td className="p-4">
                                {contact.name}
                            </td>

                            <td>
                                {contact.email}
                            </td>

                            <td>
                                {contact.subject}
                            </td>

                            <td>
                                {contact.message}
                            </td>

                            <td>

                                <button
                                    onClick={() =>
                                        handleDelete(contact.id)
                                    }
                                    className="text-red-400"
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </AdminLayout>
    );
}

export default Inquiries;