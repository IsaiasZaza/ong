const ConselhoFiscal = () => {
  const membros = [
    {
      nome: 'Anamar Miranda Lacerda',
      descricao:
        'Graduada em Ciências Contábeis com MBA em Finanças, pós-graduação em Políticas Públicas e MBA em Gestão Empresarial. Desde 1996 atua em Furnas, passando por áreas de planejamento financeiro, orçamento e gestão de seguros. Atualmente, trabalha em governança, risco e compliance na Eletrobras, além de integrar o Conselho Administrativo da Sociedade Nossa Senhora da Misericórdia, instituição sem fins lucrativos.',
      imagem: '/Anamar-Miranda.png',
    },
    {
      nome: 'Rosana Tinoco',
      descricao:
        'Graduada em Ciências Contábeis e Direito, com pós-graduação em Auditoria. Servidora da Justiça Federal desde 1999, com vasta experiência em Auditoria Interna e Cálculos Judiciais. Atuou na Fundação de Previdência Privada do Banco Central, no Grupo Brahma e na Price Waterhouse-Coopers. Atualmente, dedica-se à área de Auditoria na Justiça Federal, trazendo grande expertise técnica.',
      imagem: '/Rosana-Tinoco.png',
    },
    {
      nome: 'José Roberto de Rezende',
      descricao:
        'Economista pela UFRJ, mestre em Administração pela EBAPE/FGV e doutorando em Administração pela Université de Bordeaux. Com 20 anos de experiência em finanças e projetos, atua como Assessor na Diretoria Socioambiental do BNDES, focado na estruturação e financiamento de projetos de infraestrutura, sociais e ambientais. Também é professor em cursos de pós-graduação, com expertise nas áreas de economia e administração.',
      imagem: '/Jose-Roberto.png',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black mb-8">Conselho Fiscal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {membros.map((membro, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={membro.imagem}
                alt={membro.nome}
                className="w-full sm:w-3/4 h-auto object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {membro.nome}
              </h3>
              <p className="text-gray-700 text-sm text-justify">
                {membro.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConselhoFiscal;
