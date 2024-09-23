import Image from 'next/image';

export default function Feito() {
  return (
    <>
      {/* Top Section */}
      <div className="bg-orange-500 py-16 px-6 lg:px-24 text-center relative z-10 font-sans">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">O que fazemos</h2>

        {/* Description */}
        <p className="text-lg lg:text-xl text-white mb-12 lg:w-1/2 mx-auto">
          Cuidamos de crianças e adolescentes que vivem em situação de vulnerabilidade social e familiar,
          oferecendo tempo de qualidade e alimentação saudável e nutritiva diariamente. Atuamos com metodologia
          própria de Educação Integral, baseada em princípios e valores, aplicada em três áreas: educação, arte e cultura,
          e esporte e lazer.
        </p>
      </div>

      {/* Image Section Overlapping Top and Bottom */}
      <div className="relative z-20 flex justify-center -mt-12 -mb-8">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <Image 
            width={1080} 
            height={1080} 
            src="/criancas.png" 
            alt="Crianças" 
            className="mx-auto rounded-lg object-cover"
          />
        </div>
      </div>
      {/* Bottom Section - Image will overlap into this section as well */}
      <div className="bg-orange-500 py-16 px-6 text-center relative z-10">
      </div>
    </>
  );
}
