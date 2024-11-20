const Cards = () => {
  return (
    <section className="py-8 bg-white lg:px-80 md:px-16">
      <div className="text-center">
        <h2 className="text-xl font-bold text-[#F97316] mb-8 md:mb-12">
          A Gamboa Ação atua em quatro áreas
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 justify-items-center">
        {/* Educação */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#63C5EC] rounded-full flex items-center justify-center">
            <img
              src="educacao.png" // Substitua pelo caminho correto do ícone
              alt="Educação"
              className="w-24 h-20 md:w-28 md:h-24 lg:w-32 lg:h-28"
            />
          </div>
          <p className="mt-4 text-[#63C5EC] text-lg md:text-xl font-bold">Educação</p>
        </div>

        {/* Arte e Cultura */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#63C5EC] rounded-full flex items-center justify-center">
            <img
              src="arte.png" // Substitua pelo caminho correto do ícone
              alt="Arte e Cultura"
              className="w-24 h-20 md:w-28 md:h-24 lg:w-32 lg:h-28"
            />
          </div>
          <p className="mt-4 text-[#63C5EC] text-lg md:text-xl font-bold">Arte e Cultura</p>
        </div>

        {/* Esporte e Lazer */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#63C5EC] rounded-full flex items-center justify-center">
            <img
              src="esporte.png" // Substitua pelo caminho correto do ícone
              alt="Esporte e Lazer"
              className="w-24 h-20 md:w-28 md:h-24 lg:w-32 lg:h-28"
            />
          </div>
          <p className="mt-4 text-[#63C5EC] text-lg md:text-xl font-bold">Esporte e Lazer</p>
        </div>

        {/* Saúde e Higiene */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#63C5EC] rounded-full flex items-center justify-center">
            <img
              src="hg.png" // Substitua pelo caminho correto do ícone
              alt="Saúde e Higiene"
              className="w-24 h-20 md:w-28 md:h-24 lg:w-32 lg:h-28"
            />
          </div>
          <p className="mt-4 text-[#63C5EC] text-lg md:text-xl font-bold">Saúde e Higiene</p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
