"use client"

import CompanySection from '@/components/CompanySection';
import DonationOptions from '@/components/DonationOptions';
import DonationSection from '@/components/DonationSection';
import Image from 'next/image';

export default function comoDoar() {
  return (
    <>
      <main>
        {/* Header Section with Background Image */}
        <div className="relative bg-gray-100 h-[500px] bg-no-repeat flex items-center justify-between p-4 lg:p-16" style={{ backgroundImage: "url('/personagem.png')", backgroundSize: 'cover' }}>
          <div className="relative z-10 max-w-lg mt-16">
            <h1 className="text-2xl lg:text-4xl font-bold text-orange-500">
              Sua doação nos ajuda a transformar vidas.
            </h1>
            <p className="text-base lg:text-lg text-red-500 mt-4">
              Descubra como plantar sementes de transformação!
            </p>
          </div>
        </div>
        {/* Components */}
        <DonationOptions />
        <DonationSection />
        <CompanySection />
      </main>
    </>
  )
}
