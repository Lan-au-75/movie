import { useEffect, useState } from 'react';

import MovieItem from '~/components/MovieItem';
import * as popularServices from '~/services/popularServices';
import { INIT_PAGE } from '~/requests';

function Popular() {
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);

    useEffect(() => {
        const fetchApi = async () => {
            const dataPopular = await popularServices.popular({
                page,
            });

            setPopular((prev) => {
                return [...prev, ...dataPopular];
            });
        };

        fetchApi();
    }, [page]);

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    return <MovieItem onClick={handleLoadMore} title="Popular Movies" movies={popular}></MovieItem>;
}

export default Popular;
