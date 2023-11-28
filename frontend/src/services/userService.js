import axios from "axios";

class UserService {
    static loginUser = (body) => axios.post('/auth/login', body);
}

export default UserService;