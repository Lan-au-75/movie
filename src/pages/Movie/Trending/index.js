import { useEffect, useState } from 'react';

import MovieItem from '~/components/MovieItem';
import * as trendingServices from '~/services/trendingServices';

import { INIT_PAGE } from '~/requests';

function Trending() {
    const [trendies, setTrendies] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);

    useEffect(() => {
        const fetchApi = async () => {
            const dataTrending = await trendingServices.trending({
                page,
            });

            setTrendies((prev) => {
                return [...prev, ...dataTrending];
            });
        };

        fetchApi();
    }, [page]);

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    return <MovieItem onClick={handleLoadMore} title="Trending Movies" movies={trendies}></MovieItem>;
}

export default Trending;
