import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const detailMovie = async (id) => {
    try {
        const response = await getHttpRequest(requests.requestDetail(id));

        return response;
    } catch (error) {
        console.log(error);
    }
};

export { detailMovie };
