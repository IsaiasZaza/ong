"use client";

import CompanySection from '@/components/CompanySection';
import DonationOptions from '@/components/DonationOptions';
import DonationSection from '@/components/DonationSection';
import Image from 'next/image';

export default function comoDoar() {
  return (
    <>
      <main>
        <div className="relative bg-gray-100 h-[300px] sm:h-[400px] lg:h-[500px] bg-no-repeat flex items-center justify-between p-4 lg:p-16" style={{ backgroundImage: "url('/personagem.png')", backgroundSize: 'cover' }}>
          <div className="relative z-10 max-w-lg mt-8 sm:mt-12 lg:mt-16 mx-4 sm:mx-8 lg:mx-24">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-orange-500">
              Sua doação nos ajuda a transformar vidas.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-orange-500 mt-4">
              Descubra como plantar sementes de transformação!
            </p>
            <div className="mt-8 sm:mt-12">
              <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-sm sm:text-base lg:text-2xl font-bold cursor-default shadow-lg">
                Como Doar
              </button>
            </div>
          </div>
        </div>

        {/* Components */}
        <DonationOptions />
        <DonationSection />
        <CompanySection />
      </main>
    </>
  );
}
