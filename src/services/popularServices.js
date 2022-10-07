import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const popular = async ({ page }) => {
    try {
        const response = await getHttpRequest(requests.requestPopular, {
            params: {
                page,
            },
        });

        return response?.results;
    } catch (error) {
        console.log(error);
    }
};

export { popular };
