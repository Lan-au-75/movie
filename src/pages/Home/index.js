import { useState, useEffect } from 'react';

import Circle from '~/components/Circle';
import * as popularServices from '~/services/popularServices';

import Slider from '~/components/Slider';

function Home() {
    const [movies, setMovies] = useState([]);

    console.log(movies);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await popularServices.popular();

            setMovies(data);
        };

        fetchApi();
    }, []);

    return (
        <>
            {/* Slider */}
            <Slider></Slider>
            {/* Content */}
            <div className="flex justify-center">
                <div className="max-w-headerWidth w-full px-12">
                    <h2 className="text-2xl text-black font-bold pt-[30px]">What's Popular</h2>
                    <div className="grid grid-cols-[repeat(7,155px)] gap-5 py-5 ">
                        {movies.map((movie) => (
                            <div key={movie.id} className="min-w-[155px] w-[155px]">
                                <div className="relative w-[155px] h-[225px] rounded-lg shadow-[0 2px 8px rgb(0 0 0 / 10%)]">
                                    <img
                                        className="w-full h-full object-cover object-center rounded-lg"
                                        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                                        alt={movie?.title}
                                    />
                                    <Circle num={movie.popularity}></Circle>
                                </div>
                                <div className="pt-[26px] px-[10px]">
                                    <h2>{movie?.title}</h2>
                                    <p>{movie?.release_date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
