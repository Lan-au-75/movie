import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const videoTV = async (id) => {
    try {
        const response = await getHttpRequest(requests.requestGetVideoTV(id));

        return response?.results;
    } catch (error) {
        throw new Error(error);
    }
};

export { videoTV };
