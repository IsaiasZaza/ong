import Image from 'next/image';

export default function Feito() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center bg-gray-800 text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0">
        <Image 
          src="/teste-vagalume.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-60"
        />
      </div>

      {/* Texto e Descrição */}
      <div className="relative z-10 p-6 md:p-10 md:w-1/2 lg:w-2/5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-6">O QUE FAZEMOS</h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Atuamos no contraturno escolar com metodologia própria de Educação Integral, 
          oferecendo atividades em três áreas: educação, arte e cultura, e esporte e lazer.
        </p>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Por meio da formação de mediadores de leitura e criação de bibliotecas comunitárias 
          para crianças da Amazônia, promovemos intercâmbios culturais com a leitura, a escrita 
          e a oralidade para ajudar a formar pessoas mais engajadas na transformação de suas realidades.
        </p>
        <div className="border-t border-yellow-400 mt-6 pt-6">
          <ul className="list-none space-y-4">
            <li className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600">+300 <span className="text-white">assistidos diretamente ao longo de 8 anos</span></li>
            <li className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600">+1500 <span className="text-white">beneficiários impactados indiretamente ao longo de 8 anos</span></li>
            <li className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600">+80 <span className="text-white">famílias impactadas ao longo de 8 anos</span></li>
            <li className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600">+40 <span className="text-white">empregos e renda gerados diretamente ao longo de 8 anos</span></li>
          </ul>
        </div>
      </div>

      {/* Seção do Mapa */}
      <div className="relative z-10 p-6 md:p-10 md:w-1/2 lg:w-3/5 flex justify-center items-center">
        <Image 
          src="/mapa.png"
          alt="Mapa do Brasil"
          width={600}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
}
