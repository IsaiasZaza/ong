"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import HeaderEquipe from "@/components/HeaderEquipe";
import DiretoriaExecutiva from "@/components/DiretoriaExecutiva";
import Conselho from "@/components/Conselho";

export default function NossaEquipe() {
    const allTeamMembers = [
        { name: "Caio Ignácio", role: "Administratio Financeiro", Image: "/caio.png" },
        { name: "Matheus Lucas", role: "Apoio Administrativo", Image: "/Matheus-Lucas.png" },
        { name: "Elen Kézia", role: "Comunicação e Marketing", Image: "/Elen-Kezia.png" },
        { name: "Andrea Américo", role: "Fonoaudióloga", Image: "/Andrea-Americo.png" },
        { name: "Rafaela Dutra", role: "Nutrição", Image: "/Rafaela-Dutra.png" },
        { name: "Romulo Silva", role: "Professor de Inglês", Image: "/Romulo-Silva.png" },
        { name: "Paulo Veiga", role: "Professor de Xadrez", Image: "/Paulo-Veiga.png" },
        { name: "Elenice Lima", role: "Professora de Arte-educação", Image: "/Elenice-Lima.png" },
        { name: "João Pedro", role: "Professor de Robótica", Image: "/Joao-Pedro.png" },
        { name: "Bianca Iglesias", role: "Coordenadora de Arte", Image: "/Bianca-Iglesias.png" },
        { name: "Isabela Marinho", role: "Professora de Canto", Image: "/Isabela-Marinho.png" },
        { name: "Lucas Vicente", role: "Professor de Música", Image: "/Lucas-Vicente.png" },
        { name: "Juliana Bragança", role: "Professora de Karatê", Image: "/Juliana-Bragança.png" },
        { name: "Renan de Oliveira", role: "Professor de Karatê", Image: "/Rena-Oliveira.png" },
        { name: "Paulo Henrique Iglesias", role: "Professor de Futebol", Image: "/ig.png" },
    ];

    return (
        <section>
            <main>
                {/* Banner Section */}
                <div
                    className="relative bg-gray-100 h-[300px] sm:h-[400px] lg:h-[500px] bg-no-repeat bg-cover flex items-center justify-between"
                    style={{ backgroundImage: "url('/banner-equipe.png')" }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                    {/* Button */}
                    <div className="relative z-10 ml-4 sm:ml-8 lg:ml-36 mt-60 lg:mt-[430px]">
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-lg sm:text-base lg:text-2xl shadow-lg">
                            Nossa Equipe
                        </button>
                    </div>
                </div>

                {/* Equipe Components */}
                <HeaderEquipe />
                <DiretoriaExecutiva />
                <Conselho />
            </main>

            {/* Team Members Slider */}
            <div className="w-full bg-[#D4F3FF] pb-12 mb-8">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-center text-3xl text-orange-500 py-4 mb-8">Equipe</h1>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 1500, disableOnInteraction: false }}
                        loop={true}
                        modules={[Autoplay]}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {allTeamMembers.map((member, index) => (
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
                </div>
            </div>
        </section>
    );
}
