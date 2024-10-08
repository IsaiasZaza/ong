const cards = () => {
    return (
        <section className="py-8 bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-orange-600 mb-24">
            A Gamboa Ação atua em três áreas
          </h2>
        </div>
        <div className="flex justify-center space-x-8 gap-24">
          {/* Educação */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-blue-300 rounded-full flex items-center justify-center">
              <img
                src="educacao.png" // Substitua pelo caminho correto do ícone
                alt="Educação"
                className="w-32 h-24"
              />
            </div>
            <p className="mt-6 text-blue-400 text-xl font-bold">Educação</p>
          </div>
  
          {/* Arte e Cultura */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-blue-300 rounded-full flex items-center justify-center">
              <img
                src="arte.png" // Substitua pelo caminho correto do ícone
                alt="Arte e Cultura"
                className="w-32 h-24"
              />
            </div>
            <p className="mt-6 text-blue-400 text-xl font-bold">Arte e cultura</p>
          </div>
  
          {/* Esporte e Lazer */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-blue-300 rounded-full flex items-center justify-center">
              <img
                src="esporte.png" // Substitua pelo caminho correto do ícone
                alt="Esporte e Lazer"
                className="w-32 h-24"
              />
            </div>
            <p className="mt-6 text-blue-400 text-xl font-bold">Esporte e lazer</p>
          </div>
  
          {/* Saúde e Higiene */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-blue-300 rounded-full flex items-center justify-center border-2">
            <img
                src="esporte.png" // Substitua pelo caminho correto do ícone
                alt="Esporte e Lazer"
                className="w-32 h-24"
              />
            </div>
            <p className="mt-6 text-blue-400 text-xl font-bold">Saúde e higiene</p>
          </div>
        </div>
      </section>
    );
}


export default cards