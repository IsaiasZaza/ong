const NossasAtividades = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-orange-500 text-center mb-10">
        Nossas Atividades
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Educação */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold  mb-4">Educação</h2>

          <img
            src="activite1.png"
            alt="Educação"
            className="rounded-lg mb-4 w-full h-96 object-cover"
          />

          <p className="text-center mt-4">
            Nosso objetivo é manter as crianças na escola motivadas, e com bom
            desempenho até a conclusão do Ensino Médio.
          </p>
        </div>

        {/* Arte e Cultura */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold  mb-4">Arte e Cultura</h2>
          <img
            src="activite2.png"
            alt="Arte e Cultura"
            className="rounded-lg mb-4 w-full h-96 object-cover"
          />

          <p className="text-center mt-4">
            Ocupamos as crianças de forma estruturada com o intuito de melhorar
            a autoestima e de estimular a criatividade.
          </p>
        </div>

        {/* Esporte e Lazer */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold  mb-4">Esporte e Lazer</h2>
          <img
            src="activite3.png"
            alt="Esporte e Lazer"
            className="rounded-lg mb-4 w-full h-96 object-cover"
          />

          <p className="text-center mt-4">
            O nosso objetivo é desenvolver a psicomotricidade das crianças, o
            espírito de competitividade saudável (saber ganhar e perder) e o
            trabalho em equipe.
          </p>
        </div>

        {/* Saúde e Higiene */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold  mb-4">Saúde e Higiene</h2>
          <img
            src="activite4.png"
            alt="Saúde e Higiene"
            className="rounded-lg mb-4 w-full h-96 object-cover"
          />

          <p className="text-center mt-4">
            O programa Saúde e Higiene Gamboa Ação oferece alimentação saudável
            para as crianças, instrui sobre hábitos de higiene pessoal e
            possibilita o acesso às práticas essenciais de autocuidado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NossasAtividades;