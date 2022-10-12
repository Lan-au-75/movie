import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const trendingTV = async () => {
    try {
        const response = await getHttpRequest(requests.requestTrendingTV);

        return response?.results;
    } catch (error) {
        throw new Error(error);
    }
};

export { trendingTV };
