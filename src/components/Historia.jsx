import Image from 'next/image';
import React from 'react';

const Historia = () => {
  return (
    <div className="relative bg-gray-100 py-10">
      {/* Imagem ao fundo */}
      <div className="relative w-full h-[250px] sm:h-[400px] lg:h-[600px] overflow-hidden rounded-lg">
        <Image
          src="/imgSomos.jpg" // Caminho correto da imagem
          alt="Gabriela Caiuby"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Texto sobreposto */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-16 w-[90%] sm:w-[70%] lg:w-[40%] bg-white bg-opacity-90 p-4 lg:p-6 rounded-lg shadow-lg">
        <h3 className="text-orange-600 text-sm sm:text-lg lg:text-2xl font-bold mb-2">Nossa história:</h3>
        <p className="text-gray-800 text-xs sm:text-sm lg:text-lg font-medium leading-relaxed">
          <span className="font-bold">Gabriela Caiuby</span>, economista e mestre em planejamento ambiental,
          conheceu e se apaixonou pelas crianças e os adolescentes da Gamboa no 
          <strong> início de 2014</strong>. Desde então, vem lutando para que elas tenham um futuro brilhante,
          cheio de amor, paz, justiça e alegria. 
          <strong> Busca inspiração e criatividade para ver a vida das famílias da região transformadas.</strong>
        </p>
      </div>
    </div>
  );
};

export default Historia;
