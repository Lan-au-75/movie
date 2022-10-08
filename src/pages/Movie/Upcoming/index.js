import { useContext } from 'react';

import { ApiContext } from '~/components/Context/ApiContext';
import MovieItem from '~/components/MovieItem';

function Upcoming() {
    const context = useContext(ApiContext);
    return (
        <MovieItem onClick={context.handleLoadMoreUpComing} title="Top Movies" movies={context.upComing}></MovieItem>
    );
}

export default Upcoming;
