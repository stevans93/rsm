import axios from "axios";

class MunicipalityService {
    static allMunicipalities = (page, limit) => axios.get(`/municipality/all?page=${page}&limit=${limit}`);
    
    static addMunicipality = (body) => axios.post('/municipality/add', body, { headers: { 'Content-Type': 'multipart/form-data' } });
}

export default MunicipalityService;