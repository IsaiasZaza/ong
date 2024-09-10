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

      <div className="relative flex flex-col items-center justify-center p-10 text-center space-y-6 md:space-y-10">
        {/* Background com Opacidade */}
        <div className="absolute inset-0 bg-[url('/proposito.jpg')] bg-fixed bg-cover opacity-90"></div>

        {/* Conteúdo */}
        <h1 className="text-orange-600 text-2xl md:text-5xl font-bold relative">
          PROPÓSITO
        </h1>
        <p className="text-blue-50 text-lg md:text-3xl font-semibold relative">
          Desenvolver indivíduos livres, produtivos, socialmente integrados
        </p>
        <p className="text-blue-50 text-lg md:text-3xl font-semibold relative">&</p>
        <p className="text-blue-50 text-lg md:text-3xl font-semibold relative">
          moralmente responsáveis.
        </p>

        <a
          href="#"
          className="bg-orange-500 text-white px-10 py-4 md:px-16 md:py-8 rounded-lg text-lg md:text-xl font-bold hover:bg-yellow-600 mt-10 md:mt-28 relative"
        >
          Nosso compromisso
        </a>
      </div>
    </section>
  );
};

export default Section;
