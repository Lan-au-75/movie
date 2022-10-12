import { memo } from 'react';

import Recommended from './Recommended';

import { useRecommended } from '~/hooks';

function RecommendedTV({ id }) {
    const data = useRecommended(id);

    const link = '/tv/';

    return (
        <>
            <Recommended data={data.recommendedTV} title="Recommended" link={link}></Recommended>
            <Recommended data={data.similarTV} title="Similar Movie" link={link}></Recommended>
        </>
    );
}

export default memo(RecommendedTV);
