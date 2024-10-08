"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Ativar módulos Swiper
SwiperCore.use([Navigation, Pagination]);

const timelineData = [
    {
        year: "2019",
        image: "/1.png",
        text: "A Gamboa Ação, se estrutura administrativamente, recebe certificação em transparência e boas práticas, chega a 60 crianças atendidas, passa por aceleração pelo Instituto Ekloos, conquista novos apoiadores e a tão sonhada casa nova."
    },
    {
        year: "2020-2021",
        image: "/2.png",
        text: "Covid-19: no período da pandemia a Gamboa Ação atua na campanha de conscientização sobre os cuidados essenciais e no fornecimento de cestas básicas, kits higiene, máscaras e cobertores para o frio, para as famílias da região."
    },
    {
        year: "2022",
        image: "/3.png",
        text: "Com o patrocínio dos projetos da Lei de Incentivo à Cultura - Lei do ISS, a Gamboa Ação retoma as atividades presenciais das atividades pedagógicas, além de trabalho em grande escala com voluntários."
    },
    {
        year: "2023",
        image: "/4.png",
        text: "A Gamboa Ação implanta de maneira estruturada o programa Saúde e Higiene, que consiste em oferecer alimentação saudável diariamente e dar acesso a hábitos de higiene pessoal."
    },
    {
        year: "2024",
        image: "/5.png",
        text: "A Gamboa Ação mudou para uma nova sede, e continua os programas de saúde e alimentação."
    }
];

export default function TimelineSwiper() {
    return (
        <div className="relative py-8 bg-orange-500">
            {/* Adiciona a curva na parte inferior do fundo */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 220"
                    className="w-full h-[500px]"
                >
                    <path
                        fill="#f4f4f4"
                        fillOpacity="1"
                        d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,170.7C672,160,768,128,864,122.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Swiper Container */}
            <div className="container mx-auto px-4 relative z-10">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {timelineData.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between"
                            style={{ minHeight: "550px" }}
                        >
                            {/* Imagem */}
                            <div
                                className="h-40 w-full bg-cover bg-center rounded-lg mb-4"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>

                            {/* Ano */}
                            <h3 className="text-2xl font-bold mb-2 text-orange-500 px-4">{item.year}</h3>

                            {/* Texto */}
                            <p className="text-base font-semibold overflow-hidden text-ellipsis flex-grow px-4">
                                {item.text}
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
