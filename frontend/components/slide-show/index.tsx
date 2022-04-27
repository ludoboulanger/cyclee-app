import React from 'react';
import { styled } from "@mui/material";
import {Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

interface SlideShowProps {
    images: React.ReactNode[],
    labels: string[]
};

SwiperCore.use([Autoplay]);

const StyledSwiper = styled(Swiper)({
    width: 'calc(90% - 90px)',
    height: 'auto',
    maxWidth: '400px'
});

const SwiperSlideContainer = styled('div')({
    marginBottom: '20px'
});

const Label = styled('p')({
    fontSize: '18px',
    textAlign: 'center',
    maxWidth: '300px',
    margin: '20px auto 10px'
});

const SlideShow: React.FC<SlideShowProps> = ({images, labels}) => {
    return(
        <StyledSwiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: false,
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            loop>
                {images.map((image, index) => {
                    return (
                    <SwiperSlide key={'image-' + image?.toString}>
                        <SwiperSlideContainer>
                            {image}
                            <Label>{labels[index]}</Label>
                        </SwiperSlideContainer>
                    </SwiperSlide>
                    );
                })}
        </StyledSwiper>
    );
};

export default SlideShow;