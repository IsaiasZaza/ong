"use client";

import React from 'react';
import Image from 'next/image';
import Grid from '@/components/Grid';
import Missao from '@/components/Missao';

const OQueFazemos = () => {
    return (
        <section>
            {/* Seção com imagem de fundo */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url('/black.jpg')" }} // Caminho para a sua imagem
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-4 text-center">
                    <h2 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4">
                        Como atuamos
                    </h2>
                    <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
                        A Gamboa Ação atua em três áreas: educação, arte e cultura; e esporte e lazer.
                    </p>
                </div>
            </div>

            {/* Seção de conteúdo abaixo da imagem */}
            <div className="container mx-auto text-start md:px-44 py-12 px-4 lg:px-0">
                <h3 className="text-orange-600 text-2xl md:text-4xl font-bold">
                    Conheça Como Atuamos
                </h3>
                <p className="text-gray-700 text-base md:text-lg mt-6">
                    A Gamboa Ação atua em três áreas: educação, arte e cultura; e esporte e lazer.
                </p>
                <p className="text-gray-700 text-base md:text-lg mt-4">
                    A proposta pedagógica que perpassa todas as áreas foi inspirada tanto na linha
                    construtivista, quanto na pedagogia Waldorf, mas não se limita a essas duas teorias.
                    As atividades realizadas têm como objetivo instigar a curiosidade, aprimorar os relacionamentos
                    interpessoais e desenvolver a capacidade de encontrar soluções perante os desafios.
                </p>
                <p className="text-gray-700 text-base md:text-lg mt-4">
                    Levando em consideração e respeitando o meio em que as
                    crianças e os jovens vivem, a Gamboa Ação busca abrir oportunidades e
                    novos horizontes, capacitando-os a fazerem escolhas conscientes e terem visão de
                    futuro. Nesse sentido, o erro é enfatizado não como um tropeço, mas como um trampolim
                    na rota da aprendizagem.

                </p>
                <p className="text-gray-700 text-base md:text-lg mt-4">
                    A Gamboa Ação entende que o desenvolvimento de cada ser humano
                    é diferente. Portanto os colaboradores são orientados a considerar
                    as diferentes características de cada indivíduo.

                </p>
                <p className="text-gray-700 text-base md:text-lg mt-4">
                    Mais especificamente para a alfabetização, os professores
                    buscam estratégias criativas para despertar o interesse e desenvolver
                    a capacidade de concentração das crianças e adolescentes, visando desenvolver
                    hábitos de leitura prazerosos.

                </p>
                <p className="text-gray-700 text-base md:text-lg mt-4">
                    Além de conduzir as crianças para um pensamento livre e
                    autônomo, deseja-se colaborar para prepará-las para encarar a vida
                    com responsabilidade e capacidade de questionamento. Para tanto, a Gamboa Ação
                    busca estimular as crianças e os jovens a saberem escutar o próximo e se comunicar claramente para expressar seus pensamentos.
                </p>
                <h3 className="text-orange-600 text-xl md:text-2xl font-bold mx-auto lg:px-0 mt-6 mb-3">
                    Nossas atividades
                </h3>
                <Missao />
            </div>
        </section>

    );
}

export default OQueFazemos;
