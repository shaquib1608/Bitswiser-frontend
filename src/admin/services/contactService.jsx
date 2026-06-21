import api from "../api";

export const getContacts = () => {
    return api.get("/contacts");
}


export const deleteContact = (id) => {
    return api.delete(`/contacts/${id}`);
}
