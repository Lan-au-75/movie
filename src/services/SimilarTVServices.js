import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const similarTV = async (id) => {
    try {
        const response = await getHttpRequest(requests.requestSimilarTV(id));

        return response?.results;
    } catch (error) {
        throw new Error(error);
    }
};

export { similarTV };
