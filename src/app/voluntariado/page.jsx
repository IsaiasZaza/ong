"use client";

import React from 'react';

export default function oQueFazemos() {
    return (
      <>
        <main>
          <div className="relative bg-gray-100 h-96 bg-no-repeat flex items-center justify-between p-16" style={{ backgroundImage: "url('/banner-fazemos.png')", backgroundSize: 'cover' }}>
  
          </div>
          <div className='bg-no-repeat' style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'contain' }}>
            <div className='flex container mx-auto'>
              <Image className='py-2 relative' width={180} height={100} src="/rounded.png"></Image>
              <p className='lg:text-3xl mt-14 ml-8 text-white text-xl'>O que fazemos</p>
            </div>
          </div>

        </main>
      </>
    )
  }