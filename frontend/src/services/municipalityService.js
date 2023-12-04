import axios from "axios";

class MunicipalityService {
    static allMunicipalities = (page, limit) => axios.get(`/municipality/all?page=${page}&limit=${limit}`);
    
    static addMunicipality = (body) => axios.post('/municipality/add', body);
}

export default MunicipalityService;