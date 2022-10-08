import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from 'react';

import { INIT_PAGE } from '~/requests';
import * as popularServices from '~/services/popularServices';
import * as trendingServices from '~/services/trendingServices';
import * as topRatedServices from '~/services/topRatedServices';
import * as upComingServices from '~/services/upComingServices';

const ApiContext = createContext();

function ApiProvider({ children }) {
    const [trendies, setTrendies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upComing, setUpComing] = useState([]);

    const [pageTrending, setPageTrending] = useState(INIT_PAGE);
    const [pagePopular, setPagePopular] = useState(INIT_PAGE);
    const [pageTopRated, setPageTopRated] = useState(INIT_PAGE);
    const [pageUpComing, setPageUpComing] = useState(INIT_PAGE);

    // Call API Trending
    useEffect(() => {
        const fetchApi = async () => {
            const dataTrending = await trendingServices.trending({
                page: pageTrending,
            });

            setTrendies((prev) => {
                return [...prev, ...dataTrending];
            });
        };
        fetchApi();
    }, [pageTrending]);

    // Call API Popular
    useEffect(() => {
        const fetchApi = async () => {
            const dataPopular = await popularServices.popular({
                page: pagePopular,
            });

            setPopular((prev) => {
                return [...prev, ...dataPopular];
            });
        };
        fetchApi();
    }, [pagePopular]);

    // Call API TopRated
    useEffect(() => {
        const fetchApi = async () => {
            const dataTopRated = await topRatedServices.topRated({
                page: pageTopRated,
            });

            setTopRated((prev) => {
                return [...prev, ...dataTopRated];
            });
        };
        fetchApi();
    }, [pageTopRated]);

    // Call API UpComing
    useEffect(() => {
        const fetchApi = async () => {
            const dataUpComing = await upComingServices.upComing({
                page: pageUpComing,
            });

            setUpComing((prev) => {
                return [...prev, ...dataUpComing];
            });
        };

        fetchApi();
    }, [pageUpComing]);

    const handleLoadMoreTrenDing = () => {
        setPageTrending(pageTrending + 1);
    };

    const handleLoadMorePopular = () => {
        setPagePopular(pagePopular + 1);
    };

    const handleLoadMoreTopRated = () => {
        setPageTopRated(pageTopRated + 1);
    };

    const handleLoadMoreUpComing = () => {
        setPageUpComing(pageUpComing + 1);
    };

    const value = {
        trendies,
        popular,
        topRated,
        upComing,
        handleLoadMoreTrenDing,
        handleLoadMorePopular,
        handleLoadMoreTopRated,
        handleLoadMoreUpComing,
    };

    return <ApiContext.Provider value={value}> {children} </ApiContext.Provider>;
}

ApiProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ApiProvider, ApiContext };
