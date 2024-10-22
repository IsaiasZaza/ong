"use client";

import Image from "next/image";
import HeaderTransparencia from "@/components/HeaderTransparencia";
import RelatoriosAnuais from "@/components/RelatoriosAnuais";
import Relatorios from "@/components/Relatorios";



export default function oQueFazemos() {
    return (
        <>
            <main>
                <div className="relative h-[500px] bg-gray-100 bg-no-repeat flex items-center justify-between " style={{ backgroundImage: "url('/quemSomos.png')", backgroundSize: 'cover' }}>
                    <div className="relative z-10 ml-4 sm:ml-8 lg:ml-32 lg:mt-[440px] mt-[400px]">
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-lg sm:text-base lg:text-2xl font-bold shadow-lg">
                            Transparência
                        </button>
                    </div>
                </div>
                <HeaderTransparencia />
                <RelatoriosAnuais />
                <div className="bg-[#D4F3FF] py-4">
                    <Relatorios />
                </div>

            </main>
        </>
    )
}