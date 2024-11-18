"use client";

import React from 'react';
import Cards from '@/components/cards'
import Image from 'next/image';
import ComoAtuamos from '@/components/ComoAtuamos';
import Atuacao from '@/components/Atuacao';
import NossasAtividades from '@/components/NossasAtividades';
import Impacto from '@/components/Impacto';


export default function oQueFazemos() {
  return (
    <>
      <main>
        <div
          className="hidden lg:flex relative h-[500px] bg-gray-100 bg-no-repeat items-center justify-between"
          style={{ backgroundImage: "url('/banner-fazemos.png')", backgroundSize: "cover" }}
        >
          <div className="relative z-10 ml-40">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-2xl shadow-lg mt-[430px]">
              O que fazemos
            </button>
          </div>
        </div>

        {/* Versão Mobile */}
        <div
          className="lg:hidden flex relative h-[300px] sm:h-[400px] bg-gray-100 bg-no-repeat items-center justify-between"
          style={{ backgroundImage: "url('/mb3.png')", backgroundSize: "cover" }}
        >
          <div className="relative z-10 ml-4 sm:ml-8">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-lg sm:text-xl shadow-lg mt-[250px] sm:mt-[330px]">
              O que fazemos
            </button>
          </div>
        </div>



        <Cards />
        <ComoAtuamos />
        <Atuacao />
        <NossasAtividades />
        <Impacto />
      </main>
    </>
  )
}