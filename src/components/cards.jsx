const Cards = () => {
  return (
    <section className="py-8 bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-12">
          A Gamboa Ação atua em três áreas
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 gap-12 md:gap-24">
        {/* Educação */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-300 rounded-full flex items-center justify-center">
            <img
              src="educacao.png" // Substitua pelo caminho correto do ícone
              alt="Educação"
              className="w-24 h-20 md:w-32 md:h-24"
            />
          </div>
          <p className="mt-4 text-blue-400 text-lg md:text-xl font-bold">Educação</p>
        </div>

        {/* Arte e Cultura */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-300 rounded-full flex items-center justify-center">
            <img
              src="arte.png" // Substitua pelo caminho correto do ícone
              alt="Arte e Cultura"
              className="w-24 h-20 md:w-32 md:h-24"
            />
          </div>
          <p className="mt-4 text-blue-400 text-lg md:text-xl font-bold">Arte e Cultura</p>
        </div>

        {/* Esporte e Lazer */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-300 rounded-full flex items-center justify-center">
            <img
              src="esporte.png" // Substitua pelo caminho correto do ícone
              alt="Esporte e Lazer"
              className="w-24 h-20 md:w-32 md:h-24"
            />
          </div>
          <p className="mt-4 text-blue-400 text-lg md:text-xl font-bold">Esporte e Lazer</p>
        </div>

        {/* Saúde e Higiene */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-300 rounded-full flex items-center justify-center">
            <img
              src="saude.png" // Substitua pelo caminho correto do ícone
              alt="Saúde e Higiene"
              className="w-24 h-20 md:w-32 md:h-24"
            />
          </div>
          <p className="mt-4 text-blue-400 text-lg md:text-xl font-bold">Saúde e Higiene</p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
