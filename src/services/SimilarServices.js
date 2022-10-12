import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const similar = async (id) => {
    try {
        const response = await getHttpRequest(requests.requestSimilar(id));

        return response?.results;
    } catch (error) {
        throw new Error(error);
    }
};

export { similar };
