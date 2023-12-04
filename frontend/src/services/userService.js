import axios from "axios";

class UserService {
    static loginUser = (body) => axios.post('/auth/login', body);

    static registerUser = (body) => axios.post('/auth/register', body, { headers: { 'Content-Type': 'multipart/form-data' } });

    static getAllUsers = () => axios.get('/user/all');
}

export default UserService;