import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const trending = async ({ page }) => {
    try {
        const response = await getHttpRequest(requests.requestTrending, {
            params: {
                page,
            },
        });

        return response?.results;
    } catch (error) {
        throw new Error(error);
    }
};

export { trending };
