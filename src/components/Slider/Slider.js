import { useEffect, useState } from 'react';

import Button from '~/components/Button';
import * as popularServices from '~/services/popularServices';

function Slider() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await popularServices.popular();

            setMovies(data);
        };

        fetchApi();
    }, []);

    const randomMovies = movies[Math.floor(Math.random() * movies.length)];

    const truncateString = (str = '', num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
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
                <div className="flex">
                    <Button className="btn text-black bg-white hover:bg-red-600 hover:text-teal-50 transition-all capitalize">
                        play
                    </Button>
                    <Button className="btn border border-solid border-slate-200 hover:opacity-90 capitalize">
                        watch later
                    </Button>
                </div>
                <p className="mt-2 text-white">Release: {randomMovies?.release_date} </p>
                <p className="mt-2 text-white w-[70%] ">Overview: {truncateString(randomMovies?.overview, 150)} </p>
            </div>
        </div>
    );
}

export default Slider;
