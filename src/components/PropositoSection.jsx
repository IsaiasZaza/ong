"use client";

export default function PropositoSection() {
  return (
    <div className="bg-orange-500 flex flex-col md:flex-row justify-between items-center py-10">
      {/* Texto */}
      <div className="container mx-auto flex flex-col items-start justify-center pl-6">
        <p className="text-white text-2xl md:text-3xl font-bold leading-snug max-w-lg">
          Esse é o nosso propósito: desenvolver indivíduos livres, produtivos, socialmente integrados e moralmente responsáveis.
        </p>
      </div>

      {/* Imagem da criança */}
      <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg">
        <img
          src="/meninaSomos.png" // Ajuste o caminho da imagem conforme necessário
          alt="Criança mostrando paz"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
