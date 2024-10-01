import React from "react";
import Image from "next/image";

const Feito = () => {
  return (
    <div className="bg-orange-500 py-16">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Left Side Image */}
        <div className="flex justify-center w-full">
          <Image
            width={500}
            height={400}
            src="/Fazemos.png" // Replace with your image URL
            alt="Children Group"
            className="rounded-lg shadow-lg object-cover w-full max-w-xl"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-4">
            O que fazemos
          </h2>
          <p className="text-white text-2xl mb-4">
            Cuidamos de crianças e adolescentes que vivem em situação de vulnerabilidade social e familiar, 
            oferecendo tempo de qualidade e alimentação saudável e nutritiva diariamente. Atuamos com metodologia 
            própria de Educação Integral, baseada em princípios e valores, aplicada em três áreas: 
            educação, arte e cultura e esporte e lazer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feito;
