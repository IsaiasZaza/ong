"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

const timelineData = [
    {
        year: "2014",
        image: "/data1.png", // Coloque aqui o caminho correto das imagens
        text: "Gabriela encontra duas crianças pedindo dinheiro na Praça da Harmonia e resolve levá-las para lanchar. Durante o lanche conhece a história de cada uma e promete voltar na semana seguinte. Ao retornar ao bairro, encontra mais crianças, levadas pelas meninas que havia conhecido."
    },
    {
        year: "2014-2015",
        image: "/data2.png",
        text: "Gabriela começa a encontrar com as crianças semanalmente e mesmo sem ter qualquer formação voltada para a infância, promove atividades infantis na Praça da Harmonia (dança, leitura e brincadeiras) até conseguir um local emprestado e convidar pessoas para ajudar a mudar a história daquelas crianças."
    },
    {
        year: "2015-2016",
        image: "/data3.png",
        text: "Gabriela pensa em desistir, promove um Natal Solidário para se despedir das crianças e após enviar um e-mail de agradecimento para um dos apoiadores do evento, recebe o pedido para enviar um projeto. Após o envio do documento recebe a notícia de que o projeto havia sido inscrito para concorrer com iniciativas da África e América Latina e havia conquistado o 1 lugar. Com o prêmio recebido resolve fundar a Gamboa Ação."
    },
    {
        year: "2017-2018",
        image: "/data4.png",
        text: "A Gamboa Ação conquista a sua sede na Rua Sacadura Cabral e começa a atender todas as 50 crianças que foram se juntado às 2 meninas que conheceram a tia Gabriela na Praça da Harmonia. A Gamboa Ação recebe apoio de voluntários, e inicia a parceria com o Instituto da Criança para desenvolver a instituição. Um fato importante: ao longo desse período todas as crianças foram matriculadas na escola."
    },
    {
        year: "2019",
        image: "/data5.png",
        text: "A Gamboa Ação, se estrutura administrativamente, recebe certificação em transparência e boas práticas, chega a 60 crianças atendidas, passa por aceleração pelo Instituto Ekloos, conquista novos apoiadores e a tão sonhada casa nova. A nova sede da Gamboa Ação é a realização de um sonho que oportunizará melhor interação, aprendizado e desenvolvimento das crianças."
    },
    {
        year: "2020-2021",
        image: "/data6.png",
        text: "Covid-19: no período da pandemia a Gamboa Ação atua na campanha de conscientização sobre os cuidados especiais e no fornecimento de cestas básicas, kits higiene, máscaras e cobertores para o frio, para as famílias da região. Em 2021, a Gamboa Ação é premiada pela Lei Aldir Blanc e realiza o seu primeiro musical – Paz, Justiça e Alegria. Conquista a aprovação de 3 projetos na Lei de Cultura do Rio e captação de recursos para 2022."
    },
    {
        year: "2022",
        image: "/data7.png",
        text: "Com o patrocínio dos projetos da Lei de Incentivo à Cultura - Lei do ISS, a Gamboa Ação retoma a operação diária das atividades desde a pandemia do COVID-19. Com equipe contratada e alimentação nutritiva e saudável, servida diariamente, foi possível desenvolver um trabalho consistente e com grandes resultados. Projetos desenvolvidos: Viva o Extraordinário, Arte Tech e Cozinha Criativa."
    },
    {
        year: "2023",
        image: "/data8.png",
        text: "A Gamboa Ação implanta de maneira estruturada o programa Saúde e Higiene, que consiste em oferecer alimentação saudável diariamente e dar acesso a hábitos de higiene pessoal. Realização da segunda edição do Projeto Arte Tech. Celebração de datas importantes com grandes eventos: taça da harmonia, dia mundial do meio ambiente, dia das crianças, dia da alfabetização e o natal solidário."
    },
    {
        year: "2024",
        image: "/data9.png",
        text: "A Gamboa Ação mudou para uma nova sede, e continua os programas de saúde e alimentação.  continua transformando vidas na região portuária do Rio de Janeiro."
    },
];

export default function TimelineSwiper() {
    return (
        <div className="relative py-8 bg-orange-500">
            {/* Curva na parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 220"
                    className="w-full h-[300px]"
                >
                    <path
                        fill="#f4f4f4"
                        fillOpacity="1"
                        d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,170.7C672,160,768,128,864,122.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Título */}
            <p className="text-white text-center lg:text-5xl md:text-4xl text-3xl mb-8">
                Nossa linha do tempo
            </p>

            {/* Swiper Container */}
            <div className="container mx-auto px-4 relative z-10">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Autoplay, Pagination]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {timelineData.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between"
                            style={{ minHeight: "500px" }}
                        >
                            {/* Imagem */}
                            <div
                                className="h-56 w-full bg-cover bg-center rounded-lg mb-4"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>

                            {/* Ano */}
                            <h3 className="text-lg md:text-xl font-bold mb-2 text-orange-500 px-2 md:px-4">
                                {item.year}
                            </h3>

                            {/* Texto */}
                            <p className="text-sm md:text-base overflow-hidden flex-grow px-2 md:px-4">
                                {item.text}
                            </p>

                            {/* Link (caso exista) */}
                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline mt-4"
                                >
                                    Saiba mais
                                </a>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}