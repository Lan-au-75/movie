import { useEffect, useState, memo } from 'react';

import Recommended from './Recommended';
import * as recommendedMovieServices from '~/services/recommendedMovieServices';

function RecommendedAPI({ id }) {
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await recommendedMovieServices.recommended(id);

            setRecommended(data.slice(0, 10));
        };

        fetchApi();
    }, [id]);

    const data = {
        recommended,
    };

    return <Recommended data={data}></Recommended>;
}

export default memo(RecommendedAPI);
