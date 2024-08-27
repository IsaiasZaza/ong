"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function NossaEquipe() {
    const [selectedGroup, setSelectedGroup] = useState("Diretoria Executiva");

    const teams = {
        "Diretoria Executiva": [
            { name: "Ricardo Oliveira", role: "Gerente de Projetos", Img: "../public/kokimoto,jpg" },
            { name: "Maria Oliveira", role: "Designer Gráfica", img: "https://via.placeholder.com/150" },
        ],
        "Conselho Consultivo": [
            { name: "Carlos Pereira", role: "Ajudante Geral", img: "https://via.placeholder.com/150" },
            { name: "Ana Souza", role: "Assistente de Projetos", img: "https://via.placeholder.com/150" },
        ],
        "Conselho Fiscal": [
            { name: "Carlos Pereira", role: "Ajudante Geral", img: "https://via.placeholder.com/150" },
            { name: "Ana Souza", role: "Assistente de Projetos", img: "https://via.placeholder.com/150" },
        ],
        "Administrativo": [
            { name: "Carlos Pereira", role: "Ajudante Geral", img: "https://via.placeholder.com/150" },
            { name: "Ana Souza", role: "Assistente de Projetos", img: "https://via.placeholder.com/150" },
        ],
        "Educação": [
            { name: "Carlos Pereira", role: "Ajudante Geral", img: "https://via.placeholder.com/150" },
            { name: "Ana Souza", role: "Assistente de Projetos", img: "https://via.placeholder.com/150" },
        ],
        "Arte e Cultura": [
            { name: "Carlos Pereira", role: "Ajudante Geral", img: "https://via.placeholder.com/150" },
            { name: "Ana Souza", role: "Assistente de Projetos", img: "https://via.placeholder.com/150" },
        ],
        "Esporte e Lazer": [
            { name: "Carlos Pereira", role: "Ajudante Geral", img: "https://via.placeholder.com/150" },
            { name: "Ana Souza", role: "Assistente de Projetos", img: "https://via.placeholder.com/150" },
        ],
        "Saúde e Higiene": [
            { name: "Carlos Pereira", role: "Ajudante Geral", img: "https://via.placeholder.com/150" },
            { name: "Ana Souza", role: "Assistente de Projetos", img: "https://via.placeholder.com/150" },
        ],
        // Adicione os outros grupos aqui
    };

    const groups = Object.keys(teams);

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">Nossa Equipe</h2>
                    <p className="text-lg text-gray-600">Conheça os profissionais que fazem a diferença.</p>
                </div>

                <div className="flex flex-col items-center mb-8">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 },
                        }}
                        className="w-full md:w-3/4 lg:w-2/3"
                    >
                        {groups.map((group) => (
                            <SwiperSlide key={group}>
                                <button
                                    className={`w-full py-2 px-4 rounded-lg text-sm font-medium ${selectedGroup === group ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                                        } hover:bg-blue-600 transition duration-300 ease-in-out`}
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
                                <img
                                    src={member.img}
                                    alt={`Foto de ${member.name}`}
                                    className="w-32 h-32 mx-auto rounded-full mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
