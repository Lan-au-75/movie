import { useEffect, useState } from 'react';

import * as detailTVServices from '~/services/detailTVServices';
import * as castMovieTVServices from '~/services/castMovieTVServices';
import * as castMovieServices from '~/services/castMovieServices';
import * as detailMovieServices from '~/services/detailMovieServices';
import * as VideoTVServices from '~/services/VideoTVServices';
import * as VideoServices from '~/services/VideoServices';
import * as recommendedMovieTVServices from '~/services/recommendedMovieTVServices';
import * as SimilarTVServices from '~/services/SimilarTVServices';
import * as recommendedMovieServices from '~/services/recommendedMovieServices';
import * as SimilarServices from '~/services/SimilarServices';

function useDetail(id) {
    const [detailTV, setDetailTV] = useState([]);
    const [detailMovie, setDetailMovie] = useState([]);

    // TV

    useEffect(() => {
        const fetchApi = async () => {
            const data = await detailTVServices.detailTV(id);

            if (data) {
                setDetailTV(data);
            }
        };

        fetchApi();
    }, [id]);

    // Movie

    useEffect(() => {
        const fetchApi = async () => {
            const data = await detailMovieServices.detailMovie(id);

            if (data) {
                setDetailMovie(data);
            }
        };

        fetchApi();
    }, [id]);

    const detail = {
        detailTV,
        detailMovie,
    };

    return detail;
}

function useCastListAPI(id) {
    const [castTV, setCastTV] = useState([]);

    const [castMovie, setCastMovie] = useState([]);

    // TV

    useEffect(() => {
        const fetchApi = async () => {
            const data = await castMovieTVServices.castTV(id);

            if (data) {
                setCastTV(data?.cast.slice(0, 10));
            }
        };

        fetchApi();
    }, [id]);

    // Movie

    useEffect(() => {
        const fetchApi = async () => {
            const data = await castMovieServices.cast(id);

            if (data) {
                setCastMovie(data?.cast.slice(0, 10));
            }
        };

        fetchApi();
    }, [id]);

    const cast = {
        castMovie,
        castTV,
    };

    return cast;
}

function useVideos(id) {
    const [videoTV, setVideoTV] = useState([]);
    const [videoMovie, setVideoMovie] = useState([]);

    // TV
    useEffect(() => {
        const fetchApi = async () => {
            const data = await VideoTVServices.videoTV(id);

            if (data) {
                setVideoTV(data);
            }
        };

        fetchApi();
    }, [id]);

    // Movie

    useEffect(() => {
        const fetchApi = async () => {
            const data = await VideoServices.video(id);

            if (data) {
                setVideoMovie(data);
            }
        };

        fetchApi();
    }, [id]);

    const videos = {
        videoTV,
        videoMovie,
    };

    return videos;
}

function useRecommended(id) {
    const [recommendedTV, setRecommendedTV] = useState([]);
    const [similarTV, setSimilarTV] = useState([]);

    //  TV
    useEffect(() => {
        const fetchApi = async () => {
            const data = await recommendedMovieTVServices.recommendedTV(id);

            if (data) {
                setRecommendedTV(data.slice(0, 10));
            }
        };

        fetchApi();
    }, [id]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await SimilarTVServices.similarTV(id);

            if (data) {
                setSimilarTV(data.slice(0, 10));
            }
        };

        fetchApi();
    }, [id]);

    // Movie

    const [recommendedMovie, setRecommendedMovie] = useState([]);
    const [similarMovie, setSimilarMovie] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await recommendedMovieServices.recommended(id);

            if (data) {
                setRecommendedMovie(data?.slice(0, 10));
            }
        };

        fetchApi();
    }, [id]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await SimilarServices.similar(id);

            if (data) {
                setSimilarMovie(data.slice(0, 10));
            }
        };

        fetchApi();
    }, [id]);

    const data = {
        recommendedTV,
        recommendedMovie,
        similarTV,
        similarMovie,
    };

    return data;
}

export { useDetail, useCastListAPI, useVideos, useRecommended };
