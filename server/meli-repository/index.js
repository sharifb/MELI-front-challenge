const Exception = require('../utils/exception');
const axios = require('axios');

const axiosInstance = axios.create({ baseURL: 'https://api.mercadolibre.com' });

const issueHttpRequest = (uri) => {
    return axiosInstance.get(uri)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            throw new Exception(err.response.status, err.response.data.message);
        });
};

const getMeliSearchItems = (query) => issueHttpRequest(`/sites/MLA/search?q=${query}`);
const getMeliItem = (id) => issueHttpRequest(`/items/${id}`);
const getMeliItemDescription = (id) => issueHttpRequest(`/items/${id}/description`);

module.exports = {
    getMeliSearchItems,
    getMeliItem,
    getMeliItemDescription
};