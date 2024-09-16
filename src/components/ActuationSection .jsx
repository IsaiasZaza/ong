// components/ActuationSection.js
import Image from 'next/image';

const ActuationSection = () => {
    return (
        <div className="relative h-auto bg-cover bg-center py-12 px-4 sm:px-8 md:px-16" style={{ backgroundImage: "url('/fundo.png')" }}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-white p-4 sm:p-8">
                {/* Heading */}
                <div className="text-start">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Onde atuamos</h1>
                    <p className="mt-4 sm:mt-6">Gamboa - Rio de Janeiro - RJ</p>
                    <p>Comunidade da Providência e entorno</p>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-20 md:mt-40 text-center">
                    <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-lg">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">50%</p>
                        <p className="mt-2 text-sm sm:text-base md:text-lg">da população ativa do território está desempregada</p>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-lg">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">48%</p>
                        <p className="mt-2 text-sm sm:text-base md:text-lg">da população possui apenas ensino fundamental incompleto</p>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-lg">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">70%</p>
                        <p className="mt-2 text-sm sm:text-base md:text-lg">da população sofre algum nível de insegurança alimentar</p>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 sm:p-6 rounded-lg">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">20%</p>
                        <p className="mt-2 text-sm sm:text-base md:text-lg">da população vive em insegurança alimentar grave (situação de fome)</p>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-8 text-start">
                    <p className="text-sm sm:text-base md:text-lg">
                        Crianças e adolescentes vivendo em condições insalubres, de muita violência, sem oportunidades e perspectiva de vida.
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-16 sm:mt-24 md:mt-32 text-center text-xs">
                    <p>Censo popular, autoranpamento e cartografia social da Providência.</p>
                    <p>Autoria: SOS Providência e moradores-monitores / Assessoria Técnica: Núcleo de Estudos e Pesquisas em Geografia, Relações Raciais e Movimentos Sociais (NEGRAM/IPPUR/UFRJ)</p>
                </div>
            </div>
        </div>
    );
};

export default ActuationSection;
