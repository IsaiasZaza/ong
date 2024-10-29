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
import Link from "next/link";

const Section = () => {
  return (
    <section>
      <Banner />

      <div className="relative">
        {/* Imagem com efeito parallax */}
        <div
          className="relative w-full h-[450px] sm:h-[400px] lg:h-[700px] overflow-hidden rounded-lg bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner-proposito.png')", // Caminho da imagem
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Conteúdo sobre a imagem com efeito parallax */}
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white ">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-8">Nosso Propósito</h1>
          <p className="text-lg lg:text-2xl mt-4 max-w-xl mb-8">
          Desenvolver indivíduos livres, produtivos, socialmente integrados e moralmente responsáveis.
          </p>
          <Link href="./oQueFazemos" className="bg-orange-500 text-white font-semibold py-4 px-8 rounded hover:bg-orange-600 transition duration-300 mt-8 ">Nosso Compromisso</Link>
        </div>
      </div>
    </section>
  );
};

export default Section;
