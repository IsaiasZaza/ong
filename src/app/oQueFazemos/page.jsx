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
        <div className="relative h-[600px] bg-gray-100 bg-no-repeat flex items-center justify-between p-16" style={{ backgroundImage: "url('/banner-fazemos.png')", backgroundSize: 'cover' }}>

        </div>
        <div className='bg-no-repeat' style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'contain' }}>
          <div className='flex container mx-auto'>
            <Image className='py-2 relative' width={180} height={100} src="/rounded.png"></Image>
            <p className='lg:text-3xl mt-14 ml-8 text-white text-xl'>O que fazemos</p>
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