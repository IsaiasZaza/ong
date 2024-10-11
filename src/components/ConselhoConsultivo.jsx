const ConselhoConsultivo = () => {
    const conselheiros = [
      {
        nome: 'Alessandra Cardoso',
        descricao:
          'Consultora de gestão com mais de 20 anos de experiência em grandes empresas nacionais e internacionais. Especialista em gestão de projetos, reestruturação organizacional, otimização de processos e inovação. Desde 2013, atua como empreendedora pela Addiant Consulting, com foco em resultados financeiros e transformação organizacional. Sua trajetória combina expertise em negócios e visão empreendedora.',
        imagem: '/Alessandra-Cardoso.png', // Substitua pelo caminho correto da imagem
      },
      {
        nome: 'Andrea Américo',
        descricao:
          'Fonoaudióloga pela Universidade Estácio de Sá, pós-graduada em Fonoaudiologia Hospitalar e pós-graduanda em Neuropsicopedagogia. Experiência em atendimento clínico, homecare e formação em LIBRAS pelo INES, além de capacitação profissional no atendimento de surdos. Leciona para surdos e ouvintes na Rede Estadual de Educação do Rio, com destaque em processos de aprendizagem de crianças e adolescentes, atuando na década de 90.',
        imagem: '/Andrea-Americo.png', // Substitua pelo caminho correto da imagem
      },
      {
        nome: 'Stella Lutterbach',
        descricao:
          'Arquiteta formada pela FAU-RJ, com ampla experiência em projetos residenciais e de design de interiores desde 1983. Coordenadora do Curso de Design de Interiores da UVA e participante de eventos renomados como Casa Cor e "Le Ano du Brésil na França". Apaixonada por projetos que promovem inclusão e impacto positivo, Stella une arquitetura e espiritualidade em suas ações transformadoras.',
        imagem: '/Stella-Lutterbach.png', // Substitua pelo caminho correto da imagem
      },
      {
        nome: 'Márcio Américo',
        descricao:
          'Engenheiro Eletricista pela UFF e mestre pela UFRJ na área de Eletrônica de Potência. Sócio-diretor da Jordao Energia, atua em projetos de eficiência energética, com vasta experiência em diagnósticos energéticos para empresas dos setores industrial e comercial. Além disso, desenvolveu trabalho pro-bono para o projeto de eficiência energética da antiga sede da Gamboa Ação, contribuindo para a sustentabilidade da organização.',
        imagem: '/Marcio-Americo.png', // Substitua pelo caminho correto da imagem
      },
      {
        nome: 'João Alfredo Viegas',
        descricao:
          'Empresário e ambientalista, sócio da Symbiosis Investimentos. Possui mais de 40 anos de experiência como sócio da Concremat Engenharia, atuou nas áreas de Meio Ambiente, Marketing, Sustentabilidade e Relações Institucionais. Engajado em ações de impacto ambiental e social, é um defensor das causas ecológicas e do desenvolvimento sustentável em suas atividades empresariais.',
        imagem: 'Joao-Alfredo.png', // Substitua pelo caminho correto da imagem
      },
    ];
  
    return (
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Conselho Consultivo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conselheiros.map((conselheiro, index) => (
              <div
                key={index}
                className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center text-left"
              >
                <img
                  src={conselheiro.imagem}
                  alt={conselheiro.nome}
                  className="w-3/4 h-3/2 object-cover rounded-md mt-4 mb-8"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {conselheiro.nome}
                </h3>
                <p className="text-gray-700">{conselheiro.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ConselhoConsultivo;
  