export const INIT_PAGE = 1;

export const QUERY = 'a';

export const ApiKey = process.env.REACT_APP_IMDB_API_kEY;

const requests = {
    requestTrendingAll: `trending/all/day?api_key=${ApiKey}`,
    requestTrendingTV: `trending/tv/day?api_key=${ApiKey}`,
    requestTrending: `movie/now_playing?api_key=${ApiKey}&language=en-US&page=${INIT_PAGE}`,
    requestPeoplePopular: `person/popular?api_key=${ApiKey}&language=en-US&page=1`,
    requestPopular: `movie/popular?api_key=${ApiKey}&language=en-US&page=${INIT_PAGE}`,
    requestTopRated: `movie/top_rated?api_key=${ApiKey}&language=en-US&page=${INIT_PAGE}`,
    requestUpcoming: `movie/upcoming?api_key=${ApiKey}&language=en-US&page=${INIT_PAGE}`,
    requestSearch: `search/movie?api_key=${ApiKey}&language=en-US&query=${QUERY}&page=1&include_adult=false`,
    requestDetail(id) {
        return `movie/${id}?api_key=${ApiKey}&language=en-US`;
    },
    requestCast(id) {
        return `movie/${id}/credits?api_key=${ApiKey}&language=en-US`;
    },
    requestRecommended(id) {
        return `movie/${id}/recommendations?api_key=${ApiKey}&language=en-US&page=1`;
    },
};

export default requests;
