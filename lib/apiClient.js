const { default: axios } = require("axios");


const apiClient = axios.create({
    baseURL: "/api",
});

export { apiClient };

