import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const topRated = async ({ page }) => {
    try {
        const response = await getHttpRequest(requests.requestTopRated, {
            params: {
                page,
            },
        });

        return response?.results;
    } catch (error) {
        throw new Error(error);
    }
};

export { topRated };
