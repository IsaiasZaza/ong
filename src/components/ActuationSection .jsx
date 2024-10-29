import Image from 'next/image';

const ActuationSection = () => {
    return (
        <div className="relative h-[600px] sm:h-[600px] md:h-[650px] bg-cover bg-center py-12 px-4 sm:px-8" style={{ backgroundImage: "url('/porfavorr.png')" }}>
            <div className="relative z-10 text-white p-4 sm:p-8 lg:mx-20">
                {/* Heading */}
                <div className="text-start lg:px-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">Onde atuamos</h1>
                    <p className="mt-4 text-lg sm:text-xl md:text-2xl text-center">Gamboa - Rio de Janeiro - RJ</p>
                    <p className="text-lg sm:text-xl md:text-2xl text-center">Comunidade da Providência e entorno</p>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-32 text-start">
                    <div className="lg:p-6 p-0 rounded-lg bg-opacity-20">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">50%</p>
                        <p className="mt-2 text-base sm:text-base md:text-lg lg:text-xl">da população ativa do território está desempregada</p>
                    </div>
                    <div className="lg:p-6 p-0 rounded-lg bg-opacity-20">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">48%</p>
                        <p className="mt-2 text-base sm:text-base md:text-lg lg:text-xl">da população possui apenas ensino fundamental incompleto</p>
                    </div>
                    <div className="lg:p-6 p-0 rounded-lg bg-opacity-20">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">70%</p>
                        <p className="mt-2 text-base sm:text-base md:text-lg lg:text-xl">da população sofre algum nível de insegurança alimentar</p>
                    </div>
                    <div className="lg:p-6 p-0 rounded-lg bg-opacity-20">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">20%</p>
                        <p className="mt-2 text-base sm:text-base md:text-lg lg:text-xl">da população vive em insegurança alimentar grave (situação de fome)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActuationSection;
