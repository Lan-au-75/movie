import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const upComing = async ({ page }) => {
    try {
        const response = await getHttpRequest(requests.requestUpcoming, {
            params: {
                page,
            },
        });

        return response?.results;
    } catch (error) {
        console.log(error);
    }
};

export { upComing };
