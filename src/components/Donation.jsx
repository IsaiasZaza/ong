const Donation = () => {
    return (
        <div className="w-full">
            {/* Top Section */}
            <section className="bg-white py-12 text-center px-4">
                <h2 className="text-orange-600 text-2xl md:text-3xl font-bold mb-4">
                    Doação: faça a diferença hoje
                </h2>
                <p className="text-blue-800 mb-2">
                    Além do voluntariado, outra maneira de apoiar nosso trabalho é por meio de doações.
                </p>
                <p className="text-blue-600 font-bold">
                    Pessoa Física: Doação Pontual ou Recorrente
                </p>
                <p className="text-blue-800 mb-6 w-full md:w-1/2 mx-auto mt-4">
                    Escolha o valor e faça sua doação via conta bancária, PIX ou PayPal. Com doações recorrentes, podemos planejar com mais segurança e atuar continuamente, impactando vidas todos os dias!
                </p>
                <button className="bg-orange-500 text-white font-bold w-44 px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
                    <a href="/comoDoar">Doe agora!</a>
                </button>
            </section>

            {/* Bottom Section */}
            <section className="bg-blue-100 py-16 text-center px-4 font-sans">
                <h3 className="text-[#004E96] text-2xl md:text-6xl font-bold mb-8">
                    Comemore com <span className="block">propósito</span>
                </h3>
                <p className="text-[#004E96] mb-2 w-full md:w-1/2 lg:w-1/2 mx-auto text-xl md:text-2xl">
                    Transforme sua comemoração (aniversário, casamento, bodas, etc.) em uma iniciativa solidária!
                    <span className="font-bold text-[#004E96]"> Em vez de presentes, peça doações </span>
                    para a Gamboa Ação e ajude a transformar vidas.
                </p>
                <p className="text-[#004E96] pt-8 text-lg md:text-xl">
                    <a
                        href="https://forms.gle/rpYa4pceNauam6V56"
                        className="text-[#004E96] underline hover:text-blue-800 transition duration-300 mr-1 text-2xl md:text-3xl"
                        target="_blank"
                    >
                        Clique aqui
                    </a>
                    <a className="text-2xl md:text-3xl">e receba um kit para divulgar com seus contatos!</a>
                </p>
            </section>
        </div>
    );
};

export default Donation;
