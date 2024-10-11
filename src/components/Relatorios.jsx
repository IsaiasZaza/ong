const Relatorios = () => {
    const relatoriosAnuais = [
      { ano: 'Balanço e DRE 2023', link: 'https://drive.google.com/file/d/1IR4aKSXVCxbeerVc0vf0qIvTy-mZjMEk/view?usp=sharing' },
      { ano: 'Balanço e DRE 2022', link: 'https://drive.google.com/file/d/11TFtS19UW4Lu_VzllsKvn0_h4Q9cRH1m/view?usp=sharing' },
      { ano: 'Balanço e DRE 2021', link: 'https://drive.google.com/file/d/1fmKZ3AwPSXbfH0lDWGislU-aaVQo8Xsv/view?usp=sharing' },
      { ano: 'Balanço e DRE 2020', link: 'https://drive.google.com/file/d/15EZ7T_gw9Ez0e4jwZKdsL0bjg5Euv00y/view?usp=sharing' },
      { ano: 'Balanço e DRE 2019', link: 'https://drive.google.com/file/d/1LMT55XFn64EXciO4zwGn5IWqrpdIHOAM/view?usp=sharing' },
      { ano: 'Balanço e DRE 2018', link: 'https://drive.google.com/file/d/1gTXp_49XFyYWxc0Po-33b5NxwtMo7on6/view?usp=sharing' },
      { ano: 'Balanço e DRE 2017', link: 'https://drive.google.com/file/d/1-Yo2KQYAe8sCpPCiQ3URVmd2riAbZSkl/view?usp=sharing' },
    ];
  
    const codigoConduta = {
      texto: 'Código de ética e conduta',
      link: '/path/to/codigo-de-etica.pdf',
    };
  
    const estatutoSocial = {
      texto: 'Estatuto Social',
      link: '/path/to/estatuto-social.pdf',
    };
  
    return (
      <div className="flex flex-col items-center space-y-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-12 text-center mt-12">Relatórios anuais</h2>
          <div className="grid grid-cols-2 gap-x-40 gap-y-4 underline">
            {relatoriosAnuais.map((relatorio, index) => (
              <a
                key={index}
                href={relatorio.link}
                target="blank"
                className="flex items-center text-blue-600 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7M5 7l7 5 7-5"
                  />
                </svg>
                {relatorio.ano}
              </a>
            ))}
          </div>
        </div>
  
        <div className="w-2/5">
          <h2 className="text-xl font-semibold mb-12 text-center mt-12">Código de ética e Conduta Gamboa Ação</h2>
          <a href={codigoConduta.link} className="flex items-center text-blue-600 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7M5 7l7 5 7-5"
              />
            </svg>
            {codigoConduta.texto}
          </a>
        </div>
  
        <div className="w-2/5 mx-auto">
          <h2 className="text-xl font-semibold mb-12 text-center mt-12">Estatuto Social Gamboa Ação</h2>
          <a href={estatutoSocial.link} className="flex items-center text-blue-600 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7M5 7l7 5 7-5"
              />
            </svg>
            {estatutoSocial.texto}
          </a>
        </div>
      </div>
    );
  };
  
  export default Relatorios;