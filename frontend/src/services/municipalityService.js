import axios from "axios";

class MunicipalityService {
    static allMunicipalities = (page, limit, district = '') => axios.get(`/municipality/all?page=${page}&limit=${limit}&district=${district}`);

    static getSingleMunicipalities = (id) =>
        axios.get(`/municipality/single-manicipality/${id}`);

    static addMunicipality = (body) =>
        axios.post("/municipality/add", body, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    static editMunicipality = (id, body) =>
        axios.post(`/municipality/single-manicipality-edit/${id}`, body);

}

export default MunicipalityService;
