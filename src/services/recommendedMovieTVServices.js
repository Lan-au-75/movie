import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const recommendedTV = async (id) => {
    try {
        const response = await getHttpRequest(requests.requestRecommendedTV(id));

        return response?.results;
    } catch (error) {
        throw new Error(error);
    }
};

export { recommendedTV };
