import { useContext } from 'react';

import { ApiContext } from '~/components/Context/ApiContext';
import MovieItem from '~/components/MovieItem';

function TopRated() {
    const context = useContext(ApiContext);
    return (
        <MovieItem onClick={context.handleLoadMoreTopRated} title="Top Movies" movies={context.topRated}></MovieItem>
    );
}

export default TopRated;
