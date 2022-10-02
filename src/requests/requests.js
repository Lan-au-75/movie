const ApiKey = process.env.REACT_APP_IMDB_API_kEY;
const BaseURL = process.env.REACT_APP_BASE_URL;
const requests = {
    requestTrending: `${BaseURL}now_playing?api_key=${ApiKey}&language=en-US&page=1`,
    requestPopular: `${BaseURL}popular?api_key=${ApiKey}&language=en-US&page=1`,
    requestTopRated: `${BaseURL}top_rated?api_key=${ApiKey}&language=en-US&page=1`,
    requestUpcoming: `${BaseURL}upcoming?api_key=${ApiKey}&language=en-US&page=1`,
};

export default requests;
