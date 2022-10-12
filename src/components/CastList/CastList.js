import { memo } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import 'swiper/scss';

import images from '~/assets/images';
import Image from '~/components/Image';

function CastList({ data }) {
    return (
        <>
            <h3 className="text-white text-[21px] my-[10px] font-bold">Cast</h3>
            <div className="container w-[90%]">
                <Swiper
                    observer={true}
                    cssMode={true}
                    speed={400}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        disabledClass: 'swiper-button-disabled',
                    }}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mt-[-90px]"
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },

                        1113: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1536: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                        1600: {
                            slidesPerView: 6,
                            spaceBetween: 60,
                        },
                    }}
                >
                    {data.map((cast) => (
                        <SwiperSlide key={cast?.cast_id || cast?.credit_id}>
                            <div className="max-w-[120px] w-full">
                                <div className="w-[120px] h-[150px] ">
                                    <Image
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                        src={`https://image.tmdb.org/t/p/original/${cast?.profile_path}`}
                                        alt={cast?.title || cast?.original_name}
                                        fallBack={images.noPoster}
                                    />
                                </div>

                                <div className="pt-[10px] px-[10px] drop-shadow-lg">
                                    <Link>
                                        <p className="font-bold text-white line-clamp-2 hover:text-white/70">
                                            {cast?.original_name}
                                        </p>
                                    </Link>
                                    <p className="text-white text-[14px] line-clamp-2 drop-shadow-lg">
                                        {cast?.character}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev">
                        <GrFormPrevious></GrFormPrevious>
                    </div>
                    <div className="swiper-button-next swiper-button-disabled">
                        <GrFormNext></GrFormNext>
                    </div>
                </Swiper>
            </div>
        </>
    );
}

export default memo(CastList);
