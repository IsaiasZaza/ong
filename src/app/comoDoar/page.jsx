"use client"

import Image from 'next/image';


export default function comoDoar() {
  return (
    <>
      <main>
        <div className="relative bg-gray-100 h-96 bg-no-repeat flex items-center justify-between p-16" style={{ backgroundImage: "url('/personagem.png')", backgroundSize: 'cover' }}>
          <div className="relative z-10 max-w-lg mt-16">
            <h1 className="text-4xl font-bold text-orange-500">
              Sua doação nos ajuda a transformar vidas.
            </h1>
            <p className="text-lg text-red-500 mt-4">
              Descubra como plantar sementes de transformação!
            </p>
          </div>

        </div>
        <div className='flex container mx-auto'>
            <Image className='rounded-full' width={150} height={150} src="/rounded.png"></Image>
            <p>Como Doar</p>
        </div>
        
      </main>
    </>
  )
}