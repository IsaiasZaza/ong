"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Banner from "./Banner";

const Section = () => {
  return (
    <section>
      <Banner />

      <div className="relative flex justify-center items-center py-20">
        <Image
          width={1080}
          height={1080}
          src="/proposito.png" // Replace with the actual path
          alt="Children playing"
          className="w-full h-full object-cover absolute inset-0 -z-10"
        />
        <div className="relative bg-white bg-opacity-70 p-8 max-w-md text-center rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Propósito</h2>
          <p className="text-lg">
            Desenvolver indivíduos livres, produtivos, socialmente integrados e moralmente responsáveis.
          </p>
          <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
            Nosso Compromisso
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
