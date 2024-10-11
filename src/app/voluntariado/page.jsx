"use client";

import Image from 'next/image';
import React from 'react';
import VoluntariadoSection from '@/components/VoluntariadoSection';

import VideoSection from '@/components/VideoSection';
import Donation from '@/components/Donation';
import Corporativo from '@/components/Corporativo';

export default function voluntariado() {
  return (
    <>
      <main>

        <section className="font-sans">
          {/* Header Section with background image */}
          <div className="relative w-full h-[60vh]">
            <Image
              src="/voluntariado.png" // substitua pelo caminho da sua imagem
              alt="Grupo de voluntários"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black opacity-30" />
          </div>

          {/* Content Section */}
          <div className="bg-white">
            <div className="mx-auto text-center">
              {/* Voluntariado Header */}
              <div className='bg-no-repeat lg:block hidden' style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'contain' }}>
                <div className='flex container mx-auto'>
                  <Image className='py-2 relative' width={180} height={100} src="/cad.png"></Image>
                  <p className='lg:text-3xl mt-14 ml-8 text-white text-xl'>Voluntariado</p>
                </div>
              </div>
              <div className='bg-blue-400 lg:hidden px-4'>
                <div className='flex container mx-auto'>
                  <Image className='py-2 relative mr-4' width={80} height={100} src="/cad.png"></Image>
                  <p className='lg:text-3xl py-8 text-white text-2xl'>Voluntariado</p>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-blue-400 text-2xl mb-4 mt-4">
                Seja parte da transformação na Gamboa Ação.
              </h3>
              <p className="text-orange-500 text-xl mb-8">
                Formas de Atuar Voluntariamente
              </p>

              {/* Cards Section */}
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: Voluntariado mão na massa */}
                <div className="flex flex-col items-center">
                  <div className="bg-orange-500 rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center mb-4">
                    <Image
                      src="/maoNaMassa.png" // ícone mão na massa
                      alt="Mão na massa"
                      width={140}
                      height={140}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-blue-500 font-bold text-lg">Voluntariado mão na massa</h4>
                </div>

                {/* Card 2: Voluntariado por competência */}
                <div className="flex flex-col items-center">
                  <div className="bg-orange-500 rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center mb-4">
                    <Image
                      src="/co.png" // ícone por competência
                      alt="Por competência"
                      width={140}
                      height={140}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-blue-500 font-bold text-lg">Voluntariado por competência</h4>
                </div>

                {/* Card 3: Voluntariado pro bono */}
                <div className="flex flex-col items-center">
                  <div className="bg-orange-500 rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center mb-4">
                    <Image
                      src="/bono.png" // ícone pro bono
                      alt="Pro bono"
                      width={140}
                      height={140}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-blue-500 font-bold text-lg">Voluntariado pro bono</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <VoluntariadoSection />
        <div>
          <Corporativo />
        </div>
        <VideoSection />
        <Donation />
      </main>
    </>
  )
}
