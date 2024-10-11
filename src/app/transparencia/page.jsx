"use client";

import Image from "next/image";
import HeaderTransparencia from "@/components/HeaderTransparencia";
import RelatoriosAnuais from "@/components/RelatoriosAnuais";
import Relatorios from "@/components/Relatorios";



export default function oQueFazemos() {
    return (
        <>
            <main>
                <div className="relative h-[600px] bg-gray-100 bg-no-repeat flex items-center justify-between p-16" style={{ backgroundImage: "url('/banner-transparencia.png')", backgroundSize: 'cover' }}>

                </div>
                <div className='bg-no-repeat lg:block hidden' style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'contain' }}>
                    <div className='flex container mx-auto'>
                        <Image className='py-2 relative' width={180} height={100} src="/trans.png"></Image>
                        <p className='lg:text-3xl mt-14 ml-8 text-white text-xl'>Transparêcia</p>
                    </div>
                </div>
                <div className='bg-blue-400 lg:hidden'>
                    <div className='flex container mx-auto px-4'>
                        <Image className='py-2 relative mr-4' width={80} height={100} src="/trans.png"></Image>
                        <p className='lg:text-3xl py-8 text-white text-2xl'>Transparêcia</p>
                    </div>
                </div>
                <HeaderTransparencia />
                <RelatoriosAnuais />
                <Relatorios />
            </main>
        </>
    )
}