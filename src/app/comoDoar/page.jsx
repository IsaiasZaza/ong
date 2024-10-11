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

        {/* Desktop Header */}
        <div className='bg-no-repeat lg:block hidden' style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'contain' }}>
          <div className='flex container mx-auto items-center py-4'>
            <Image className='relative' width={180} height={100} src="/rounded.png" alt="Rounded logo" />
            <p className='lg:text-3xl mt-4 ml-8 text-white text-xl'>Como Doar</p>
          </div>
        </div>

        {/* Mobile Header */}
        <div className='bg-blue-400 lg:hidden'>
          <div className='flex container mx-auto items-center py-4 px-4'>
            <Image className='relative mr-4' width={80} height={100} src="/rounded.png" alt="Rounded logo" />
            <p className='text-2xl py-2 text-white'>Como Doar</p>
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
