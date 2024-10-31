"use client";

import Image from "next/image";
import HeaderTransparencia from "@/components/HeaderTransparencia";
import RelatoriosAnuais from "@/components/RelatoriosAnuais";
import Relatorios from "@/components/Relatorios";



export default function oQueFazemos() {
    return (
        <>
            <main>
                <div
                    className="relative bg-gray-100 h-[300px] sm:h-[400px] lg:h-[500px] bg-no-repeat bg-cover flex items-center justify-between"
                    style={{ backgroundImage: "url('/tra.png')" }}
                >
                    <div className="relative z-10 ml-4 sm:ml-8 lg:ml-32 mt-[280px] sm:mt-[350px] lg:mt-[440px]">
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