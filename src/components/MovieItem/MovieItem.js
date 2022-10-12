import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineArrowUp } from 'react-icons/ai';

import images from '~/assets/images';
import Circle from '~/components/Circle';
import Image from '~/components/Image';
import { handleScrollOnTop } from '~/handleEvent';

function MovieItem({ title, movies = [], onClick }) {
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 600);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="flex justify-center">
            <div className="max-w-headerWidth w-full px-12 pb-5 mt-[var(--header-height)]">
                <h2 className="text-2xl text-black font-bold pt-[30px]">{title}</h2>
                <div className="grid grid-cols-[repeat(6,180px)] gap-6 py-5 ">
                    {movies.map((data, id) => (
                        <div
                            key={data?.id || id}
                            className="min-w-[180px] w-[180px] border border-solid border-[#e3e3e3] rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                        >
                            <div className="relative w-[180px] h-[273px] rounded-lg shadow-[0 2px 8px rgb(0 0 0 / 10%)]">
                                <Link to={`/movie/${data?.id}`} onClick={handleScrollOnTop}>
                                    <Image
                                        className="w-full h-full object-cover object-center rounded-lg"
                                        src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                                        alt={data?.title}
                                        fallBack={images?.noPoster}
                                    />
                                </Link>
                                <Circle num={data.vote_average}></Circle>
                            </div>
                            <div className="pt-[26px] px-[10px] pb-[12px]">
                                <Link to={`/movie/${data?.id}`} onClick={handleScrollOnTop}>
                                    <h2 className="text-[#000] font-bold hover:text-[rgb(1,180,228)] line-clamp-2 text-ellipsis">
                                        {data?.title}
                                    </h2>
                                </Link>
                                <p className="text-[#00000099]"> {data?.release_date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More */}

                <div className=" flex max-h-[50px] h-full  w-full rounded-lg bg-[rgba(1,180,228,1)]">
                    <p
                        className=" flex items-center justify-center w-full h-full text-2xl leading-[50px] text-white font-bold hover:text-black 
                                transition-all cursor-pointer"
                        onClick={onClick}
                    >
                        Load More
                    </p>
                </div>

                {/* ShowGoToTop */}

                {showGoToTop && (
                    <div
                        className="fixed flex items-center justify-center bottom-[20%] right-[10%] h-[40px] w-[40px] rounded
                         bg-[rgb(1,180,228)] text-[22px] text-white hover:opacity-95 cursor-pointer z-10"
                        onClick={handleGoToTop}
                    >
                        <AiOutlineArrowUp></AiOutlineArrowUp>
                    </div>
                )}
            </div>
        </div>
    );
}

MovieItem.propTypes = {
    title: PropTypes.node,
    movies: PropTypes.array.isRequired,
};

export default memo(MovieItem);
