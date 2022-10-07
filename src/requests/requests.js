export const INIT_PAGE = 1;

export const ApiKey = process.env.REACT_APP_IMDB_API_kEY;

const requests = {
    requestTrendingAll: `trending/all/day?api_key=${ApiKey}`,
    requestTrendingTV: `trending/tv/day?api_key=${ApiKey}`,
    requestTrending: `movie/now_playing?api_key=${ApiKey}&language=en-US&page=${INIT_PAGE}`,
    requestPeoplePopular: `person/popular?api_key=${ApiKey}&language=en-US&page=1`,
    requestPopular: `movie/popular?api_key=${ApiKey}&language=en-US&page=${INIT_PAGE}`,
    requestTopRated: `movie/top_rated?api_key=${ApiKey}&language=en-US&page=${INIT_PAGE}`,
    requestUpcoming: `movie/upcoming?api_key=${ApiKey}&language=en-US&page=${INIT_PAGE}`,
};

export default requests;
