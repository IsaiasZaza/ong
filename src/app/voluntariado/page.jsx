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

        <section>
          {/* Header Section with background image */}
          <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh]">
            <Image
              src="/voluntariado.png" // Imagem para desktop
              alt="Grupo de voluntários"
              fill
              className="object-cover grayscale lg:block hidden" // Visível apenas para desktop
            />
            <Image
              src="/mb6.png" // Imagem para mobile
              alt="Grupo de voluntários"
              fill
              className="object-cover grayscale sm:block lg:hidden" // Visível apenas para mobile
            />

            <div className="relative z-10 flex flex-col justify-end w-3/4 sm:w-1/2 lg:w-64 h-full ml-4 sm:ml-8 lg:ml-40 mb-4 sm:mb-8 lg:mb-16 py-3">
              <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-lg sm:text-base lg:text-2xl shadow-lg w-40">
                Voluntariado
              </button>
            </div>
          </div>



          {/* Content Section */}
          <div className="bg-white">
            <div className="mx-auto text-center">
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
                  <h4 className="text-blue-500 text-lg">Voluntariado mão na massa</h4>
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
                  <h4 className="text-blue-500 text-lg">Voluntariado por competência</h4>
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
                  <h4 className="text-blue-500 text-lg">Voluntariado pro bono</h4>
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
