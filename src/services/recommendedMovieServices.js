import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const recommended = async (id) => {
    try {
        const response = await getHttpRequest(requests.requestRecommended(id));

        return response?.results;
    } catch (error) {
        throw new Error(error);
    }
};

export { recommended };
