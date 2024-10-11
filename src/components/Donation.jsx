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
                    Doe agora!
                </button>
            </section>

            {/* Bottom Section */}
            <section className="bg-blue-100 py-16 text-center px-4">
                <h3 className="text-blue-700 text-2xl md:text-3xl font-bold mb-8">
                    Comemore com propósito
                </h3>
                <p className="text-blue-900 mb-2 w-full md:w-1/2 lg:w-1/3 mx-auto">
                    Transforme sua comemoração (aniversário, casamento, bodas, etc.) em uma iniciativa solidária!
                    <span className="font-bold text-blue-700"> Em vez de presentes, peça doações </span>
                    para a Gamboa Ação e ajude a transformar vidas.
                </p>
                <p className="text-blue-900 pt-8 text-lg md:text-xl">
                    <a
                        href="#"
                        className="text-blue-600 font-bold underline hover:text-blue-800 transition duration-300 mr-1"
                    >
                        Clique aqui
                    </a>
                    e receba um kit para divulgar com seus contatos!
                </p>
            </section>
        </div>
    );
};

export default Donation;
