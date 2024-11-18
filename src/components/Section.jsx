"use client";

import React from "react";
import Image from "next/image";
import Banner from "./Banner";
import Link from "next/link";

const Section = () => {
  return (
    <section>
      <Banner />

      <div className="relative">
        {/* Imagem com efeito parallax */}
        <div
          className="relative h-96 sm:h-[480px] md:h-[600px] lg:h-screen bg-center lg:bg-cover bg-no-repeat bg-contain"
          style={{
            backgroundImage: "url('/banner-proposito.png')", // Caminho da imagem
          }}
        >
          {/* Camada de sobreposição para contraste */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Conteúdo sobre a imagem */}
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">
            Nosso Propósito
          </h1>
          <p className="text-base sm:text-base md:text-lg lg:text-2xl mt-2 sm:mt-4 max-w-xs sm:max-w-md lg:max-w-xl mb-6 sm:mb-8">
            Desenvolver indivíduos livres, produtivos, socialmente integrados e moralmente responsáveis.
          </p>
          <Link
            href="./oQueFazemos"
            className="bg-orange-500 text-white font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Nosso Compromisso
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section;
