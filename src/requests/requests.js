export const ApiKey = process.env.REACT_APP_IMDB_API_kEY;
const requests = {
    requestTrending: `now_playing?api_key=${ApiKey}&language=en-US&page=1`,
    requestPopular: `popular?api_key=${ApiKey}&language=en-US&page=1`,
    requestTopRated: `top_rated?api_key=${ApiKey}&language=en-US&page=1`,
    requestUpcoming: `upcoming?api_key=${ApiKey}&language=en-US&page=1`,
};

export default requests;
