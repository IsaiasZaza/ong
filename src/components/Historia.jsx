import React from 'react';

const Historia = () => {
  return (
    <div className="relative">
      {/* Imagem com efeito parallax */}
      <div
        className="relative w-full h-[450px] sm:h-[400px] lg:h-[800px] overflow-hidden rounded-lg bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/imgSomos.jpg')", // Caminho correto da imagem
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Conteúdo que vai por cima da imagem com parallax */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-3xl lg:text-5xl font-semibold">Nossa História</h1>
        <p className="text-lg lg:text-2xl mt-4 max-w-xl">
          Conheça mais sobre nossa jornada e o propósito que nos guia.
        </p>
      </div>
    </div>
  );
};

export default Historia;
