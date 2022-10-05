import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const popular = async () => {
    try {
        const response = await getHttpRequest(requests.requestPopular);

        return response?.results;
    } catch (error) {
        console.log(error);
    }
};

export { popular };
