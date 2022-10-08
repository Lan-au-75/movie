import { useContext } from 'react';

import { ApiContext } from '~/components/Context/ApiContext';
import MovieItem from '~/components/MovieItem';

function Trending() {
    const context = useContext(ApiContext);
    return (
        <MovieItem
            title="Trending Movies"
            movies={context.trendies}
            onClick={context.handleLoadMoreTrenDing}
        ></MovieItem>
    );
}

export default Trending;
