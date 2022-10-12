import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const detailTV = async (id) => {
    try {
        const response = await getHttpRequest(requests.requestDetailTV(id));

        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export { detailTV };
