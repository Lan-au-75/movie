import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const castTV = async (id) => {
    try {
        const response = await getHttpRequest(requests.requestCastTV(id));

        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export { castTV };
