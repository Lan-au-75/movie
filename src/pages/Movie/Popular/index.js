import { useContext } from 'react';

import { ApiContext } from '~/components/Context/ApiContext';
import MovieItem from '~/components/MovieItem';

function Popular() {
    const context = useContext(ApiContext);
    return (
        <MovieItem onClick={context.handleLoadMorePopular} title="Popular Movies" movies={context.popular}></MovieItem>
    );
}

export default Popular;
