import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const trending = async () => {
    try {
        const response = await getHttpRequest(requests.requestTrendingAll);

        return response?.results;
    } catch (error) {
        console.log(error);
    }
};

export { trending };
