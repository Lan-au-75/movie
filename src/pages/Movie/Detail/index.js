import { Link, useParams } from 'react-router-dom';

import images from '~/assets/images';
import Button from '~/components/Button';
import CastList from '~/components/CastList';
import Circle from '~/components/Circle';
import Image from '~/components/Image';
import RecommendedAPI from '~/components/Recommended/RecommendedAPI';
import Videos from '~/components/Videos';
import { handleScrollOnTop } from '~/handleEvent';
import { useCastListMovie, useDetailMovie, useVideoMovie } from '~/hooks';

function Detail() {
    let { id } = useParams();

    const detail = useDetailMovie(id);
    const cast = useCastListMovie(id);
    const videos = useVideoMovie(id);

    const data = {
        detail: detail.detailMovie,
        detailID: id,
    };

    const truncateString = (str = '', num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        <>
            <div className="flex relative">
                {/* overplay */}
                <div className="absolute  w-full h-[700px]  mt-[var(--header-height)] bg-[rgba(2,13,24,.75)]"></div>
                <div className=" mt-[var(--header-height)] w-full h-[700px]">
                    {data?.detail?.backdrop_path && (
                        <Image
                            className="w-full h-full object-cover"
                            src={`https://image.tmdb.org/t/p/original/${data?.detail?.backdrop_path}`}
                            alt={data?.detail?.title || data?.detail?.original_title}
                            fallBack={images.noPoster}
                        />
                    )}
                </div>
            </div>

            <div className="pb-[40px] bg-content">
                <div className="flex justify-center relative mt-[-18%]  h-full">
                    <div className="px-8 py-3 h-full">
                        <div className="max-w-[284px] max-h-[432px] ">
                            {data?.detail?.poster_path && (
                                <Image
                                    className="w-full h-full object-cover rounded-3xl shadow-lg"
                                    src={`https://image.tmdb.org/t/p/original/${data?.detail?.poster_path}`}
                                    alt={data?.detail?.title || data?.detail?.original_title}
                                    fallBack={images.noPoster}
                                />
                            )}

                            <Button
                                to={`/watching/${data.detailID}`}
                                onClick={handleScrollOnTop}
                                className="btn min-h-[50px] bg-red-600  w-full text-white  mt-7
                             hover:bg-red-600/95 hover:text-teal-50 transition-all capitalize"
                            >
                                play
                            </Button>
                        </div>
                    </div>

                    <div className="px-8 py-3 w-[60%] ">
                        <Link>
                            <h2 className="text-[36px] font-bold text-white mb-2 drop-shadow-lg hover:text-white/70">
                                {data?.detail?.title || data?.detail?.original_title || data.detail?.name}
                            </h2>
                        </Link>
                        <div className="flex mb-6">
                            <p className="mt-2 text-white">
                                {data?.detail?.release_date || data?.detail?.first_air_date}
                            </p>
                            {data?.detail?.production_countries?.map((country, id) => {
                                return (
                                    <p key={country?.id || id} className="mt-2 ml-1 text-white drop-shadow-lg">
                                        ({country?.iso_3166_1})
                                    </p>
                                );
                            })}

                            {data?.detail?.genres?.map((genre, id) => {
                                return (
                                    <Link key={genre?.id || id}>
                                        <p className="mt-2 text-white pl-5 drop-shadow-lg  hover:text-white/70">
                                            {genre?.name}
                                        </p>
                                    </Link>
                                );
                            })}

                            <p className="mt-2 text-white pl-5 ">{data?.detail?.runtime} minute</p>
                        </div>
                        <div className="relative flex items-center min-h-[68px] mb-5">
                            <Circle
                                className="top-0 left-0 max-w-[60px] max-h-[60px] 
                                hover:scale-110 hover:cursor-pointer "
                                num={data?.detail?.vote_average}
                            ></Circle>
                            <div className=" flex items-center mt-[-0.8%]  drop-shadow-lg text-[14px] text-white ml-[70px] max-h-[68px] w-[40px] ">
                                User Score
                            </div>
                        </div>
                        <p className="text-white drop-shadow-lg">{data?.detail?.tagline} </p>
                        <p className=" my-[10px] text-[21px] font-bold text-white ">Overview </p>
                        <p className="text-white drop-shadow-lg">{truncateString(data?.detail?.overview, 350)} </p>
                        <CastList data={cast.castMovie}></CastList>
                        <Videos data={videos.videoMovie}></Videos>
                        <RecommendedAPI id={data.detailID} title="Recommended"></RecommendedAPI>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
