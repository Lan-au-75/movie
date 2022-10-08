import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from 'react';

import * as trendingAllServices from '~/services/trendingAllServices';
import * as trendingTVServices from '~/services/trendingTVServices';

const HomeContext = createContext();

function HomeProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [trendies, setTrendies] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await trendingTVServices.trendingTV();

            const dataTrending = await trendingAllServices.trending();

            setMovies(data);
            setTrendies(dataTrending);
        };

        fetchApi();
    }, []);

    const value = {
        movies,
        trendies,
    };

    return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

HomeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { HomeProvider, HomeContext };
