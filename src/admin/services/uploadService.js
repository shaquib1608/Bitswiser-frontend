import axios from "axios";

import API_URL from "../../config/api";
export const uploadProjectImage = async (file) => {

    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(
        `${API_URL}/api/upload/project-image`,
        formData,
        {
            headers: {
                "Content-Type":
                    "multipart/form-data"
            }
        }
    );
    return response.data;

};