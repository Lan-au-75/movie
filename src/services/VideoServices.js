import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const video = async (id) => {
    try {
        const response = await getHttpRequest(requests.requestGetVideos(id));

        return response?.results;
    } catch (error) {
        throw new Error(error);
    }
};

export { video };
