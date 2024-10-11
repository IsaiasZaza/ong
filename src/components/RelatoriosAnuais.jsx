const RelatoriosAnuais = () => {
    const relatorios = [
      {
        ano: '1º Semestre / 2024',
        imagem: '/relatorio2.png', // Substitua pelo caminho da imagem real
      },
      {
        ano: '2023',
        imagem: '/relatorio1.png', // Substitua pelo caminho da imagem real
      },
      { ano: '2022', imagem: '/relatorio1.png' },
      { ano: '2021', imagem: '/relatorio1.png' },
      { ano: '2020', imagem: '/relatorio1.png' },
      { ano: '2019', imagem: '/relatorio1.png' },
    ];
  
    return (
      <div className="flex flex-col items-center bg-slate-300 p-12">
        <h2 className="text-2xl font-semibold mb-8">Relatórios anuais</h2>
        <div className="grid grid-cols-3 gap-16">
          {relatorios.map((relatorio, index) => (
            <div
              key={index}
              className=" flex justify-center items-center bg-gray-100 border border-gray-300 rounded-lg overflow-hidden"
            >
              {relatorio.imagem ? (
                <img
                  src={relatorio.imagem}
                  alt={relatorio.ano}
                  className="object-cover w-[300px] h-[300px]"
                />
              ) : (
                <span className="text-lg font-medium">{relatorio.ano}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RelatoriosAnuais;