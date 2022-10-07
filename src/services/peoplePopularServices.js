import { getHttpRequest } from '~/utils/httpRequest';

import requests from '~/requests';

const peoplePopular = async () => {
    try {
        const response = await getHttpRequest(requests.requestPeoplePopular);

        return response?.results;
    } catch (error) {
        console.log(error);
    }
};

export { peoplePopular };
