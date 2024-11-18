"use client";

import Image from "next/image";
import HeaderTransparencia from "@/components/HeaderTransparencia";
import RelatoriosAnuais from "@/components/RelatoriosAnuais";
import Relatorios from "@/components/Relatorios";



export default function oQueFazemos() {
    return (
        <>
            <main>
                <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[80vh]">
                    <Image
                        src="/tra.png" // Imagem para desktop
                        alt="Grupo de voluntários"
                        fill
                        className="object-cover grayscale lg:block hidden" // Visível apenas para desktop
                    />
                    <Image
                        src="/mb7.png" // Imagem para mobile
                        alt="Grupo de voluntários"
                        fill
                        className="object-cover bg-center grayscale sm:block lg:hidden" // Visível apenas para mobile
                    />

                    <div className="relative z-10 flex flex-col justify-end w-3/4 sm:w-1/2 lg:w-64 h-full ml-4 sm:ml-8 lg:ml-40 mb-4 sm:mb-8 lg:mb-16 py-3">
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-lg sm:text-base lg:text-2xl shadow-lg w-40">
                            Voluntariado
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