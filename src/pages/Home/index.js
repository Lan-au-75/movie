import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'swiper/scss';
import 'swiper/css/bundle';

import Circle from '~/components/Circle';
import * as popularServices from '~/services/popularServices';
import * as trendingServices from '~/services/trendingServices';
import Slider from '~/components/Slider';
import Image from '~/components/Image';
import images from '~/assets/images';
import Carousel from '~/components/Carousel';

function Home() {
    const [movies, setMovies] = useState([]);
    const [trendies, setTrendies] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await popularServices.popular();
            const dataTrending = await trendingServices.trending();

            setMovies(data);
            setTrendies(dataTrending);
        };

        fetchApi();
    }, []);

    return (
        <>
            {/* Slider */}
            <Slider movies={movies}></Slider>
            {/* Content */}
            <div className="flex justify-center">
                <div className="max-w-headerWidth w-full px-12">
                    <h2 className="text-2xl text-black font-bold pt-[30px]">What's Popular</h2>
                    <div className="grid grid-cols-[repeat(7,155px)] gap-5 py-5 ">
                        {movies.map((movie) => (
                            <div key={movie.id} className="min-w-[155px] w-[155px]">
                                <div className="relative w-[155px] h-[225px] rounded-lg shadow-[0 2px 8px rgb(0 0 0 / 10%)]">
                                    <Link to={`/movie/${movie.id}`}>
                                        <Image
                                            className="w-full h-full object-cover object-center rounded-lg"
                                            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                                            alt={movie?.title}
                                            fallBack={images.noPoster}
                                        />
                                    </Link>
                                    <Circle num={movie.popularity}></Circle>
                                </div>
                                <div className="pt-[26px] px-[10px]">
                                    <Link to={`/movie/${movie.id}`}>
                                        <h2 className="text-[#000] font-bold hover:text-[rgb(1,180,228)] line-clamp-2 text-ellipsis">
                                            {movie?.title}
                                        </h2>
                                    </Link>
                                    <p className="text-[#00000099]"> {movie?.release_date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pb-[166px]">
                        <Carousel title="Trending" data={trendies}></Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
