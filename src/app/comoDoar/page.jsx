"use client";

import CompanySection from '@/components/CompanySection';
import DonationOptions from '@/components/DonationOptions';
import DonationSection from '@/components/DonationSection';
import Image from 'next/image';

export default function comoDoar() {
  return (
    <>
      <main>
        {/* Componente para telas grandes */}
        <div
          className="relative bg-gray-100 h-[400px] sm:h-[400px] lg:h-[700px] bg-no-repeat flex items-center justify-between p-4 lg:p-16 hidden lg:flex"
          style={{
            backgroundImage: "url('/doing.png')",
            backgroundSize: 'cover',
          }}
        >
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

        {/* Componente para mobile e telas médias */}
        <div
          className="relative bg-gray-100 bg-center  bg-no-repeat flex items-center justify-between p-4 lg:p-16 lg:hidden"
          style={{
            backgroundImage: "url('/doarPic.png')",
            backgroundSize: 'cover',
          }}
        >
          <div className="relative z-10 max-w-lg  sm:mt-8 lg:mt-16 mx-4 sm:mx-8 lg:mx-24">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-orange-500">
              Sua doação nos ajuda <span className="block">a transformar vidas.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-orange-500 mt-6">
              Descubra como plantar <span className='flex'>sementes de transformação!</span>
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
