// components/ActuationSection.js
import Image from 'next/image';

const ActuationSection = () => {
  return (
    <div className="relative h-auto bg-cover bg-center py-16 px-16" style={{ backgroundImage: "url('/fundo.png')" }}>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

      <div className="relative z-10 text-white p-8">
        <div className="text-start">
          <h1 className="text-3xl font-bold">Onde atuamos</h1>
          <p className="mt-6">Gamboa - Rio de Janeiro - RJ</p>
          <p>Comunidade da Providência e entorno</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-40 text-center">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <p className="text-5xl font-bold">50%</p>
            <p>da população ativa do território está desempregada</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <p className="text-5xl font-bold">48%</p>
            <p>da população possui apenas ensino fundamental incompleto</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <p className="text-5xl font-bold">70%</p>
            <p>da população sofre algum nível de insegurança alimentar</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <p className="text-5xl font-bold">20%</p>
            <p>da população vive em insegurança alimentar grave (situação de fome)</p>
          </div>
        </div>

        <div className="mt-8 text-start">
          <p className="text-lg">
            Crianças e adolescentes vivendo em condições insalubres, de muita violência, sem oportunidades e perspectiva de vida.
          </p>
        </div>
        
        <div className="mt-32 text-center text-xs">
          <p>Censo popular, autoranpamento e cartografia social da Providência.</p>
          <p>Autoria: SOS Providência e moradores-monitores / Assessoria Técnica: Núcleo de Estudos e Pesquisas em Geografia, Relações Raciais e Movimentos Sociais (NEGRAM/IPPUR/UFRJ)</p>
        </div>
      </div>
    </div>
  );
};

export default ActuationSection;
