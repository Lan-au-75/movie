import { useEffect, useState } from 'react';

import MovieItem from '~/components/MovieItem';
import * as upComingServices from '~/services/upComingServices';
import { INIT_PAGE } from '~/requests';

function Upcoming() {
    const [upComing, setUpComing] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);

    useEffect(() => {
        const fetchApi = async () => {
            const dataUpComing = await upComingServices.upComing({
                page,
            });

            setUpComing((prev) => {
                return [...prev, ...dataUpComing];
            });
        };

        fetchApi();
    }, [page]);

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    return <MovieItem onClick={handleLoadMore} title="Top Movies" movies={upComing}></MovieItem>;
}

export default Upcoming;
