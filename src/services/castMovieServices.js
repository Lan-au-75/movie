import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const cast = async (id) => {
    try {
        const response = await getHttpRequest(requests.requestCast(id));

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { cast };
