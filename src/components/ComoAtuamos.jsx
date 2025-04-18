import Image from 'next/image';

const ComoAtuamos = () => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Primeira seção: Imagem da esquerda e texto à direita */}
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {/* Imagem da esquerda */}
          <div className="md:w-1/2">
            <Image
              src="/como-atuamos1.png"
              alt="Crianças participando de atividades"
              width={640} // Defina a largura original ou ideal da imagem
              height={384} // Proporcional à largura
              className="shadow-lg object-cover w-full h-auto"
              priority
            />
          </div>

          {/* Texto da direita */}
          <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
            <h2 className="text-2xl text-white px-6 py-4 bg-orange-500">
              Como Atuamos:
            </h2>
            <p className="leading-relaxed text-gray-700 px-6 lg:text-xl text-base">
              A proposta pedagógica que perpassa todas as áreas foi inspirada tanto na linha construtivista, quanto na pedagogia Waldorf, mas não se limita a essas duas teorias. As atividades realizadas têm como objetivo instigar a curiosidade, aprimorar os relacionamentos interpessoais e desenvolver a capacidade de encontrar soluções perante os desafios.
            </p>
            <p className="leading-relaxed text-gray-700 px-6 lg:text-xl text-base">
              Levando em consideração e respeitando o meio em que as crianças e os jovens vivem, a Gamboa Ação busca abrir oportunidades e novos horizontes, capacitando-os a fazerem escolhas conscientes e terem visão de futuro. Nesse sentido, o erro é enfatizado não como um tropeço, mas como um trampolim na rota da aprendizagem.
            </p>
          </div>
        </div>

        {/* Segunda seção: Texto abaixo com imagem à direita */}
        <div className="flex flex-col-reverse md:flex-row md:space-x-8 space-y-8 md:space-y-0 mt-8">
          {/* Texto à esquerda */}
          <div className="md:w-1/2 space-y-6">
            <p className="leading-relaxed text-gray-700 px-6 lg:text-xl text-base mt-8 lg:mt-0">
              A Gamboa Ação entende que o desenvolvimento de cada ser humano é diferente. Portanto os colaboradores são orientados a considerar as diferentes características de cada indivíduo.
            </p>
            <p className="leading-relaxed text-gray-700 px-6 pb-10 lg:text-xl text-base">
              Além de conduzir as crianças para um pensamento livre e autônomo, deseja-se colaborar para prepará-las para encarar a vida com responsabilidade e capacidade de questionamento. Para tanto, a Gamboa Ação busca estimular as crianças e os jovens a saberem escutar o próximo e se comunicar claramente para expressar seus pensamentos.
            </p>
            <div className="text-2xl text-white h-16 bg-orange-500"></div>
          </div>

          {/* Imagem da direita */}
          <div className="md:w-1/2">
            <Image
              src="/como-atuamos2.png"
              alt="Criança jogando xadrez"
              width={640} // Defina a largura original ou ideal da imagem
              height={384} // Proporcional à largura
              className="shadow-lg object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoAtuamos;
