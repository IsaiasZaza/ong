// components/PartnersSection.js
import Image from 'next/image';

const PartnersSection = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-center text-3xl mb-6">Parceiros</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-center a">
        {/* Substitua os caminhos de imagem conforme necessário */}
        <div className="flex justify-center">
          <Image src="/1.png" alt="BTG Pactual" width={150} height={50} objectFit="contain" />
        </div>
        <div className="flex justify-center">
          <Image src="/2.png" alt="ICATU" width={150} height={50} objectFit="contain" />
        </div>
        <div className="flex justify-center">
          <Image src="/3.png" alt="Bank of Communications BM" width={150} height={50} objectFit="contain" />
        </div>
        <div className="flex justify-center">
          <Image src="/6.png" alt="Jordão Soluções de Energia" width={150} height={50} objectFit="contain" />
        </div>
        <div className="flex justify-center">
          <Image src="/5.png" alt="Licks Attorneys" width={150} height={50} objectFit="contain" />
        </div>
        <div className="flex justify-center">
          <Image src="/4.png" alt="Concreto Engenharia" width={150} height={50} objectFit="contain" />
        </div>
        <div className="flex justify-center">
          <Image src="/8.png" alt="Remape" width={150} height={50} objectFit="contain" />
        </div>
        <div className="flex justify-center">
          <Image src="/9.png" alt="Spoleto" width={150} height={50} objectFit="contain" />
        </div>
        <div className="flex justify-center">
          <Image src="/7.png" alt="Instituto da Criança" width={150} height={50} objectFit="contain" />
        </div>
        <div className="flex justify-center">
          <Image src="/comiter.jpg" alt="Comite" width={100} height={50} objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
