import { useEffect, useState } from 'react';

import MovieItem from '~/components/MovieItem';
import * as topRatedServices from '~/services/topRatedServices';
import { INIT_PAGE } from '~/requests';

function TopRated() {
    const [topRated, setTopRated] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);

    useEffect(() => {
        const fetchApi = async () => {
            const dataTopRated = await topRatedServices.topRated({
                page,
            });

            setTopRated((prev) => {
                return [...prev, ...dataTopRated];
            });
        };

        fetchApi();
    }, [page]);

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    return <MovieItem onClick={handleLoadMore} title="Top Movies" movies={topRated}></MovieItem>;
}

export default TopRated;
