import { useState, useEffect } from 'react';

import requests from '~/requests';

function Home() {
    const [movies, setMovies] = useState([]);

    const randomMovies = movies[Math.floor(Math.random() * movies.length)];

    console.log(movies);

    useEffect(() => {
        const fetchApi = async () => {
            const api = await requests.requestPopular;
            fetch(api)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data?.results);
                    setMovies(data?.results);
                });
        };

        fetchApi();
    }, []);

    const truncateString = (str = '', num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    const percent = (num) => {
        return Math.floor(num / 100).toString();
    };

    return (
        <>
            {/* Slider */}
            <div className="flex relative bg-black">
                <div className="absolute  w-full h-[600px]  mt-[var(--header-height)] bg-gradient-to-r from-black"></div>
                <div className=" mt-[var(--header-height)] w-full h-[600px]">
                    <img
                        className="w-full h-full object-cover"
                        src={`https://image.tmdb.org/t/p/original/${randomMovies?.backdrop_path}`}
                        alt={randomMovies?.title}
                    />
                </div>

                <div className="absolute top-[40%] p-8">
                    <h2 className="text-3xl text-white mb-2">{randomMovies?.title} </h2>
                    <div>
                        <button className="btn text-black bg-white hover:bg-red-600 hover:text-teal-50 hover:border-none  ">
                            Play
                        </button>
                        <button className="btn hover:opacity-90">Watch Later</button>
                    </div>
                    <p className="mt-2 text-white">Release: {randomMovies?.release_date} </p>
                    <p className="mt-2 text-white w-[70%] ">Overview: {truncateString(randomMovies?.overview, 150)} </p>
                </div>
            </div>

            {/* Content */}

            <div className="flex justify-center">
                <div className="max-w-headerWidth w-full px-12">
                    <h2 className="text-2xl text-black font-bold pt-[30px]">What's Popular</h2>
                    <div className="grid grid-cols-[repeat(7,155px)] gap-5 py-5 ">
                        {movies.map((movie) => (
                            <div key={movie.id} className="min-w-[155px] w-[155px]">
                                <div className="relative w-[155px] h-[225px] rounded-lg shadow-[0 2px 8px rgb(0 0 0 / 10%)]">
                                    <img
                                        className="w-full h-full object-cover object-center"
                                        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                                        alt={movie?.title}
                                    />
                                    <div className="absolute top-[90%] left-2  w-full h-full max-w-[34px] max-h-[34px] bg-black rounded-[50%] border border-solid border-cyan-400 text-white flex items-center justify-center text-xs leading-none ">
                                        {percent(movie.popularity)} <span className="text-[0.4rem] ">%</span>
                                    </div>
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
