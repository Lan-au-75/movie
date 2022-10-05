import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const getHttpRequest = async (request) => {
    const response = await httpRequest.get(request);

    return response?.data;
};

export default httpRequest;
