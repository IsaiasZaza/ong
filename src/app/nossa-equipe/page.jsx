"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from 'swiper/modules';
import HeaderEquipe from "@/components/HeaderEquipe";
import DiretoriaExecutiva from "@/components/DiretoriaExecutiva";
import ConselhoConsultivo from "@/components/ConselhoConsultivo";
import ConselhoFiscal from "@/components/ConselhoFisca";

export default function NossaEquipe() {
    const [selectedGroup, setSelectedGroup] = useState("Administrativo");

    const teams = {
        "Administrativo": [
            { name: "Caio Ignácio", role: "Administratio Financeiro", Image: "/caio.png" },
            { name: "Matheus Lucas", role: "Apoio Administrativo", Image: "/Matheus-Lucas.png" },
        ],
        "Comunicação e Marketing": [
            { name: "Elen Kézia", role: "Comunicação e Marketing", Image: "/Elen-Kezia.png" }
        ],
        "Saúde": [
            { name: "Andrea Américo", role: "Fonoaudióloga", Image: "/Andrea-Americo.png" },
            { name: "Rafaela Dutra", role: "Nutrição", Image: "/Rafaela-Dutra.png" },
        ],
        "Educação": [
            { name: "Romulo Silva", role: "Professor de Inglês", Image: "/Romulo-Silva.png" },
            { name: "Paulo Veiga", role: "Professor de Xadrez", Image: "/Paulo-Veiga.png" },
            { name: "Elenice Lima", role: "Professora de Arte-educação", Image: "/Elenice-Lima.png" },
            { name: "João Pedro", role: "Professor de Robótica", Image: "/Joao-Pedro.png" }
        ],
        "Arte e Cultura": [
            { name: "Bianca Iglesias", role: "Coordenadora de Arte", Image: "/Bianca-Iglesias.png" },
            { name: "Elenice Lima", role: "Professora de Teatro", Image: "/Elenice-Lima.png" },
            { name: "Isabela Marinho", role: "Professora de Canto", Image: "/Isabela-Marinho.png" },
            { name: "Lucas Vicente", role: "Professor de Música", Image: "/Lucas-Vicente.png" }
        ],
        "Esporte": [
            { name: "Juliana Bragança", role: "Professora de Karatê", Image: "/Juliana-Bragança.png" },
            { name: "Rena de Oliveira", role: "Professor de Karatê", Image: "/Rena-Oliveira.png" },
            { name: "Iglesias", role: "Professor de Futebol", Image: "/" }
        ],
    };

    const groups = Object.keys(teams);

    return (
        <section className="">
            <main>
                {/* Banner Section */}
                <div className="relative bg-gray-100 h-[300px] sm:h-[400px] lg:h-[500px] bg-no-repeat bg-cover flex items-center justify-between" style={{ backgroundImage: "url('/banner-equipe.png')" }}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                    {/* Button */}
                    <div className="relative z-10 ml-4 sm:ml-8 lg:ml-36 lg:mt-[430px] mt-60">
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-lg sm:text-base lg:text-2xl font-bold shadow-lg">
                            Nossa Equipe
                        </button>
                    </div>
                </div>
                {/* Equipe Components */}
                <HeaderEquipe />
                <DiretoriaExecutiva />
                <ConselhoConsultivo />
                <ConselhoFiscal />
            </main>

            {/* Team Selection and Swiper */}
            <div className="w-full bg-orange-50 pb-12 mb-8">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-center text-3xl font-bold text-orange-500 py-4">Equipe Operacional</h1>

                    <div className="flex flex-col items-center mb-8 mt-4">
                        {/* Group Buttons Swiper */}
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Autoplay]}
                            className="mySwiper w-full"
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={2}
                            breakpoints={{
                                640: { slidesPerView: 3 },
                                768: { slidesPerView: 4 },
                                1024: { slidesPerView: 6 },
                            }}
                        >
                            {groups.map((group) => (
                                <SwiperSlide key={group}>
                                    <button
                                        className={`w-full mx-auto h-12 rounded-lg text-sm font-semibold ${selectedGroup === group ? "bg-orange-400 text-white" : "bg-orange-200 text-black"} hover:bg-orange-500 transition duration-300 ease-in-out`}
                                        onClick={() => setSelectedGroup(group)}
                                    >
                                        {group}
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Team Members Swiper */}
                    {teams[selectedGroup] ? (
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                        >
                            {teams[selectedGroup].map((member, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out">
                                        <Image
                                            src={member.Image}
                                            alt={`Foto de ${member.name}`}
                                            width={240}
                                            height={240}
                                            className="mx-auto mb-4"
                                        />
                                        <h3 className="text-xl font-semibold text-orange-900">{member.name}</h3>
                                        <p className="text-orange-950">{member.role}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <p className="text-center text-red-500">Grupo não encontrado.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
