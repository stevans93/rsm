import axios from "axios";

class MunicipalityService {
    static allMunicipalities = () => axios.get('/municipality/all');

    static addMunicipality = (body) => axios.post('/municipality/add', body);
}

export default MunicipalityService;