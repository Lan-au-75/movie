import { memo } from 'react';

import { useRecommended } from '~/hooks';
import Recommended from './Recommended';

function RecommendedAPI({ id }) {
    const data = useRecommended(id);
    const link = '/movie/';

    return (
        <>
            <Recommended data={data.recommendedMovie} title="Recommended" link={link}></Recommended>
            <Recommended data={data.similarMovie} title="Similar Movie" link={link}></Recommended>
        </>
    );
}

export default memo(RecommendedAPI);
