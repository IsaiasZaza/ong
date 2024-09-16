"use client";
import { useState } from "react";
import { Swiper, SwiperSlide, Pagi } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from 'swiper/modules';
import BannerNossaEquipe from "@/components/BannerNossaEquipe";


export default function NossaEquipe() {
    const [selectedGroup, setSelectedGroup] = useState("Diretoria Executiva");

    const teams = {
        "Diretoria Executiva": [
            { name: "Ricardo Oliveira", role: "Gerente de Projetos", Image: "/kokimoto.jpg" },
            { name: "Maria Oliveira", role: "Designer Gráfica", Image: "/kokimoto.jpg" },
        ],
        "Conselho Consultivo": [
            { name: "Carlos Pereira", role: "Ajudante Geral", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
        ],
        "Conselho Fiscal": [
            { name: "Carlos Pereira", role: "Ajudante Geral", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
        ],
        "Administrativo": [
            { name: "Carlos Pereira", role: "Ajudante Geral", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
        ],
        "Educação": [
            { name: "Carlos Pereira", role: "Ajudante Geral", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
        ],
        "Arte e Cultura": [
            { name: "Carlos Pereira", role: "Ajudante Geral", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
        ],
        "Esporte e Lazer": [
            { name: "Carlos Pereira", role: "Ajudante Geral", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
        ],
        "Saúde e Higiene": [
            { name: "Carlos Pereia", role: "Ajudante Geral", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
            { name: "Ana Souza", role: "Assistente de Projetos", Image: "/kokimoto.jpg" },
        ],
        // Adicione os outros grupos aqui
    };

    const groups = Object.keys(teams);

    return (
        <section className="">
            <BannerNossaEquipe />
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-orange-50 rounded-lg shadow-xl mt-6">
                <div className="">
                    <h1 className="text-center text-3xl font-bold text-orange-900 py-4">Nossa Equipe</h1>
                </div>
                <div className="flex flex-col items-center mb-8 mt-4">
                    <Swiper

                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper w-full bg-cover"
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
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
                                    className={`w-full py-2 px-4 rounded-lg text-sm font-semibold ${selectedGroup === group ? "bg-orange-400 text-white" : "bg-orange-200 text-black"
                                        } hover:bg-orange-500 transition duration-300 ease-in-out`}
                                    onClick={() => setSelectedGroup(group)}
                                >
                                    {group}
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

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
                                    width={128} // Ajuste a largura da imagem conforme necessário
                                    height={128} // Ajuste a altura da imagem conforme necessário
                                    className="mx-auto rounded-full mb-4"
                                />
                                <h3 className="text-xl font-semibold text-orange-900">{member.name}</h3>
                                <p className="text-orange-950">{member.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    );
}
