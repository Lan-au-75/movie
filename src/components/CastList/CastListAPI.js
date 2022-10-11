import { useEffect, useState, memo } from 'react';

import * as castMovieServices from '~/services/castMovieServices';
import CastList from './CastList';

function CastListAPI({ id }) {
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await castMovieServices.cast(id);

            setCasts(data.cast.slice(0, 10));
        };

        fetchApi();
    }, [id]);

    const data = {
        casts,
    };

    return <CastList data={data}></CastList>;
}

export default memo(CastListAPI);
