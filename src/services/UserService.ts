import axios from 'axios';

export default {
    userList (option = {}) {
        return axios.get('/mock/userList', { params: option });
    }
};
