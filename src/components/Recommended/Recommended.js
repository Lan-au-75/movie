import { memo } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import 'swiper/scss';

import images from '~/assets/images';
import Image from '~/components/Image';
import { handleScrollOnTop } from '~/handleEvent';

function Recommended({ data, title, link }) {
    return (
        <>
            <h3 className="text-white text-[21px] my-[10px] font-bold">{title}</h3>
            <div className=" container-recommended w-[90%]">
                <Swiper
                    observer={true}
                    speed={400}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        disabledClass: 'swiper-button-disabled',
                    }}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation]}
                    className=""
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },

                        1113: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1536: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 60,
                        },
                    }}
                >
                    {data.map((recommended) => (
                        <SwiperSlide key={recommended.id}>
                            <div className="max-w-[250px] w-full">
                                <div className="w-[250px] h-[142px] ">
                                    <Link to={`${link}${recommended.id}`} onClick={handleScrollOnTop}>
                                        {recommended?.backdrop_path ? (
                                            <Image
                                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                                src={`https://image.tmdb.org/t/p/original/${recommended?.backdrop_path}`}
                                                alt={recommended?.title || recommended?.original_name}
                                                fallBack={images.noPoster}
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </Link>
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

export default memo(Recommended);
