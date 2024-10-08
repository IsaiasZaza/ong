"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Ativar módulos Swiper
SwiperCore.use([Navigation]);

const timelineData = [
    {
        year: "2014",
        image: "/path/to/image2014.png", // Coloque aqui o caminho correto das imagens
        text: "Gabriela encontra duas crianças pedindo dinheiro na Praça da Harmonia e resolve levá-las para lanchar..."
    },
    {
        year: "2014-2015",
        image: "/path/to/image2014_2015.png",
        text: "Gabriela começa a encontrar com as crianças semanalmente e mesmo sem ter qualquer formação..."
    },
    {
        year: "2015-2016",
        image: "/path/to/image2015_2016.png",
        text: "Gabriela pensa em desistir, promove um Natal Solidário para se despedir das crianças e após enviar..."
    },
    {
        year: "2017-2018",
        image: "/path/to/image2017_2018.png",
        text: "A Gamboa Ação conquista sua sede na Rua Sacadura Cabral e começa a atender todas as 50 crianças..."
    },
    {
        year: "2017-2018",
        image: "/path/to/image2017_2018.png",
        text: "A Gamboa Ação conquista sua sede na Rua Sacadura Cabral e começa a atender todas as 50 crianças..."
    },
    {
        year: "2017-2018",
        image: "/path/to/image2017_2018.png",
        text: "A Gamboa Ação conquista sua sede na Rua Sacadura Cabral e começa a atender todas as 50 crianças..."
    },
    {
        year: "2017-2018",
        image: "/path/to/image2017_2018.png",
        text: "A Gamboa Ação conquista sua sede na Rua Sacadura Cabral e começa a atender todas as 50 crianças..."
    },
    {
        year: "2017-2018",
        image: "/path/to/image2017_2018.png",
        text: "A Gamboa Ação conquista sua sede na Rua Sacadura Cabral e começa a atender todas as 50 crianças..."
    },
    {
        year: "2017-2018",
        image: "/path/to/image2017_2018.png",
        text: "A Gamboa Ação conquista sua sede na Rua Sacadura Cabral e começa a atender todas as 50 crianças..."
    },
    
    // Adicione mais anos e textos conforme necessário
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
