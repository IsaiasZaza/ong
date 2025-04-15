const RelatoriosAnuais = () => {
  const relatorios = [
    {
      ano: '1º Semestre / 2024',
      imagem: '/relatorio2.png', // Caminho correto da imagem
      link: '/relatorioAtv/Relatório de Atividades 1º semestre 2024 - Gamboa Ação.pdf', // Caminho correto do PDF
    },
    {
      ano: '2023',
      imagem: '/relatorio1.png', // Caminho correto da imagem
      link: '/atividades/Relatório de Atividades 2023 Gamboa Ação.pdf', // Caminho correto do PDF
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 md:p-12">
      <h2 className="text-2xl font-semibold mb-8 text-center">Relatórios anuais</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {relatorios.map((relatorio, index) => (
          <a
            key={index}
            href={relatorio.link}
            download // Torna o arquivo baixável
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-gray-100 border border-gray-300 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            {relatorio.imagem ? (
              <img
                src={relatorio.imagem}
                alt={`Relatório ${relatorio.ano}`}
                className="object-cover w-full h-[250px] sm:h-[300px]"
              />
            ) : (
              <span className="text-lg font-medium">{relatorio.ano}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatoriosAnuais;
