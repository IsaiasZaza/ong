"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const Feito = () => {
  return (
    <div className="bg-orange-500 py-16">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">

        {/* Left Side Swiper */}
        <div className="flex justify-center w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="w-full max-w-xl rounded-lg"
          >
            <SwiperSlide>
              <Image
                width={500}
                height={400}
                src="/Fazemos.png" // Replace with your image URL
                alt="Children Group"
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={500}
                height={400}
                src="/swiperHome.png" // Add more images if needed
                alt="Another Image"
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={500}
                height={400}
                src="/11.png" // Add more images if needed
                alt="Third Image"
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={500}
                height={400}
                src="/swiperHome3.png" // Add more images if needed
                alt="Third Image"
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={500}
                height={400}
                src="/swiperHome4.png" // Add more images if needed
                alt="Third Image"
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={500}
                height={400}
                src="/swiperHome5.png" // Add more images if needed
                alt="Third Image"
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-4">
            O que fazemos
          </h2>
          <p className="text-white lg:text-2xl text-base mb-4">
            Cuidamos de crianças e adolescentes que vivem em situação de vulnerabilidade social e familiar,
            oferecendo tempo de qualidade e alimentação saudável e nutritiva diariamente. Atuamos com metodologia
            própria de Educação Integral, baseada em princípios e valores, aplicada em três áreas:
            educação, arte e cultura e esporte e lazer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feito;
