import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const search = async ({ query }) => {
    try {
        const response = await getHttpRequest(requests.requestSearch, {
            params: {
                query,
            },
        });

        return response?.results;
    } catch (error) {
        console.log(error);
    }
};

export { search };
