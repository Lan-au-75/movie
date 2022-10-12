import PropTypes from 'prop-types';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';

function Slider({ movies }) {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    const navigate = useNavigate();

    const handleClick = (params) => {
        if (randomMovie) {
            navigate(`/tv/${randomMovie.id}`);
        }
    };

    const truncateString = (str = '', num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        <div className="flex relative">
            {/* overplay */}
            <div className="absolute  w-full h-[700px]  mt-[var(--header-height)] bg-gradient-to-r from-black"></div>
            <div className=" mt-[var(--header-height)] w-full h-[700px]">
                {randomMovie?.backdrop_path && (
                    <Image
                        className="w-full h-full object-cover"
                        src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
                        alt={randomMovie?.title}
                        fallBack={images.noPoster}
                    />
                )}
            </div>

            <div className="absolute top-[40%] p-8">
                <h2 className="text-3xl text-white mb-2">{randomMovie?.title} </h2>
                <div className="flex">
                    <Button
                        onClick={handleClick}
                        className="btn text-black bg-white hover:bg-red-600 hover:text-teal-50 transition-all capitalize"
                    >
                        play
                    </Button>
                    <Button className="btn border border-solid border-slate-200 hover:opacity-90 capitalize">
                        watch later
                    </Button>
                </div>
                <p className="mt-2 text-white">Release: {randomMovie?.release_date || randomMovie?.first_air_date}</p>
                <p className="mt-2 text-white w-[70%] ">Overview: {truncateString(randomMovie?.overview, 150)} </p>
            </div>
        </div>
    );
}

Slider.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default memo(Slider);
