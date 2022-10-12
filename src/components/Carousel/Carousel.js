import PropTypes from 'prop-types';
import { memo } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import 'swiper/scss';

import images from '~/assets/images';
import Circle from '~/components/Circle';
import Image from '~/components/Image';
import { handleScrollOnTop } from '~/handleEvent';

function Carousel({ title, data }) {
    const navigate = useNavigate();

    const handleClick = (e, id) => {
        if (data[id].media_type === 'tv') {
            navigate(`/tv/${data[id].id}`);
        } else {
            navigate(`/movie/${data[id].id}`);
        }

        handleScrollOnTop();
    };

    return (
        <>
            <h2 className="text-2xl text-black font-bold pt-[30px]">{title}</h2>
            <div className="container relative">
                <Swiper
                    observer={true}
                    modules={[Navigation, Scrollbar]}
                    spaceBetween={50}
                    speed={400}
                    slidesPerView={6}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        disabledClass: 'swiper-button-disabled',
                    }}
                    scrollbar={{
                        draggable: true,
                        el: '.swiper-scrollbar',
                        hide: false,
                        dragSize: 400,
                        snapOnRelease: true,
                    }}
                    loop={false}
                    loopFillGroupWithBlank={false}
                    wrapperClass="swiper-wrapper"
                    className="mt-[-80px]"
                >
                    {data.map((item, id) => (
                        <SwiperSlide key={item.id}>
                            <div className="max-w-[155px] w-full">
                                <div className="relative w-[155px] h-[225px] rounded-lg shadow-[0 2px 8px rgb(0 0 0 / 10%)]">
                                    <div className="w-full h-full" onClick={(e) => handleClick(e, id)}>
                                        <Image
                                            className="w-full h-full object-cover object-center rounded-lg"
                                            src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                                            alt={item?.title}
                                            fallBack={images.noPoster}
                                        />
                                    </div>
                                    <Circle num={item.vote_average}></Circle>
                                </div>
                                <div className="pt-[26px] px-[10px] ">
                                    <div onClick={(e) => handleClick(e, id)}>
                                        <h2 className="text-[#000] font-bold cursor-pointer hover:text-[rgb(1,180,228)] line-clamp-2 text-ellipsis">
                                            {item?.title || item?.original_name}
                                        </h2>
                                    </div>
                                    <p className="text-[#00000099]"> {item?.release_date || item?.first_air_date}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="swiper-scrollbar"></div>
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

Carousel.propTypes = {
    title: PropTypes.node.isRequired,
    data: PropTypes.array,
};

export default memo(Carousel);
