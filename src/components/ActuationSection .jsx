import Image from 'next/image';

const ActuationSection = () => {
    return (
        <div className="relative h-auto bg-cover bg-center py-12 px-4 sm:px-8 font-sans" style={{ backgroundImage: "url('/fundo.png')" }}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-white p-4 sm:p-8 lg:mx-20">
                {/* Heading */}
                <div className="text-start lg:px-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Onde atuamos</h1>
                    <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-2xl">Gamboa - Rio de Janeiro - RJ</p>
                    <p className='text-xl sm:text-2xl md:text-2xl'>Comunidade da Providência e entorno</p>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 sm:mt-16 md:mt-20 text-start">
                    <div className="p-4 sm:p-6 rounded-lg bg-opacity-20">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">50%</p>
                        <p className="mt-2 text-sm sm:text-base md:text-lg w-full sm:w-3/4 md:w-full">da população ativa do território está desempregada</p>
                    </div>
                    <div className="p-4 sm:p-6 rounded-lg bg-opacity-20">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">48%</p>
                        <p className="mt-2 text-sm sm:text-base md:text-lg">da população possui apenas ensino fundamental incompleto</p>
                    </div>
                    <div className="p-4 sm:p-6 rounded-lg bg-opacity-20">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">70%</p>
                        <p className="mt-2 text-sm sm:text-base md:text-lg">da população sofre algum nível de insegurança alimentar</p>
                    </div>
                    <div className="p-4 sm:p-6 rounded-lg bg-opacity-20">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold">20%</p>
                        <p className="mt-2 text-sm sm:text-base md:text-lg">da população vive em insegurança alimentar grave (situação de fome)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActuationSection;
