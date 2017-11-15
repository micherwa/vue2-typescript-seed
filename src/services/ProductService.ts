import axios from 'axios';

export default {
    productList (option = {}) {
        return axios.get('/mock/productList', { params: option });
    }
};
