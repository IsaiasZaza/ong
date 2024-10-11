const DiretoriaExecutiva = () => {
  const membros = [
      {
          nome: 'Gabriela Caiuby',
          cargo: 'Presidente e Fundadora da Gamboa Ação',
          descricao:
              'Economista pela Aix Marseille University, mestre em planejamento ambiental pela COPPE-UFRJ, Gabriela Caiuby conheceu e se apaixonou pelas crianças e os adolescentes da Gamboa no início de 2014. Desde então, vem lutando para que eles tenham um futuro brilhante, cheio de amor, paz, justiça e alegria. Busca inspiração e criatividade para ver a vida das famílias da região transformadas.',
          imagem: '/Gabriela-Caiuby.png',
      },
      {
          nome: 'Alvaro Menezes',
          cargo: 'Gerente Geral',
          descricao:
              'Administrador de Empresas, Gestor Esportivo e cursando MBA em Gestão e Desenvolvimento de Negócios pela PUC. Possui mais de 15 anos de experiência em Comunicação e Marketing, gerenciou projetos para empresas como Petrobras e TIM. Desde 2018, lidera a gestão e desenvolvimento institucional do Gamboa Ação.',
          imagem: '/Alvaro-Menezes.png',
      },
  ];

  return (
      <div className="bg-gray-200 py-12 px-4">
          <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-black mb-8">Diretoria Executiva</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {membros.map((membro, index) => (
                      <div
                          key={index}
                          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center md:text-left"
                      >
                          <img
                              src={membro.imagem}
                              alt={membro.nome}
                              className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-md mb-6"
                          />
                          <h3 className="text-xl font-bold text-gray-900">
                              {membro.nome} <span className="font-bold">– {membro.cargo}</span>
                          </h3>
                          <p className="mt-4 text-gray-600">{membro.descricao}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default DiretoriaExecutiva;
