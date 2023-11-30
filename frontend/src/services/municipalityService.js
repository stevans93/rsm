import axios from "axios";

class MunicipalityService {
    static allMunicipalities = () => axios.get('/municipality/all');
}

export default MunicipalityService;