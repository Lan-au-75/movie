import { useContext } from 'react';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Carousel from '~/components/Carousel';
import Circle from '~/components/Circle';
import Image from '~/components/Image';
import Slider from '~/components/Slider';
import { HomeContext } from '~/components/Context/HomeContext';
import { handleScrollOnTop } from '~/handleEvent';

function Home() {
    const context = useContext(HomeContext);

    return (
        <>
            {/* Slider */}
            <Slider movies={context.movies}></Slider>
            {/* Content */}
            <div className="flex justify-center">
                <div className="max-w-headerWidth w-full px-12">
                    <h2 className="text-2xl text-black font-bold pt-[30px]">What's Popular</h2>
                    <div className="grid grid-cols-[repeat(7,155px)] gap-5 py-5 ">
                        {context.movies.map((movie) => (
                            <div key={movie.id} className="min-w-[155px] w-[155px]">
                                <div className="relative w-[155px] h-[225px] rounded-lg shadow-[0 2px 8px rgb(0 0 0 / 10%)]">
                                    <Link to={`/tv/${movie.id}`} onClick={handleScrollOnTop}>
                                        <Image
                                            className="w-full h-full object-cover object-center rounded-lg"
                                            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                                            alt={movie?.title}
                                            fallBack={images.noPoster}
                                        />
                                    </Link>
                                    <Circle num={movie.vote_average}></Circle>
                                </div>
                                <div className="pt-[26px] px-[10px]">
                                    <Link to={`/tv/${movie.id}`} onClick={handleScrollOnTop}>
                                        <h2 className="text-[#000] font-bold hover:text-[rgb(1,180,228)] line-clamp-2 text-ellipsis">
                                            {movie?.title || movie?.original_name}
                                        </h2>
                                    </Link>
                                    <p className="text-[#00000099]"> {movie?.release_date || movie?.first_air_date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pb-[166px]">
                        <Carousel title="Trending" data={context.trendies}></Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
