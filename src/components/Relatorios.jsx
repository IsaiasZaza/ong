import { AiFillFolder } from 'react-icons/ai';

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
    <>
      <div className="flex flex-col items-center space-y-8 mb-8 container mx-auto px-4 md:px-8">
        {/* Relatórios Anuais */}
        <div>
          <h2 className="text-xl font-semibold mb-12 text-center mt-12">Relatórios anuais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 underline">
            {relatoriosAnuais.map((relatorio, index) => (
              <a
                key={index}
                href={relatorio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <AiFillFolder className="h-6 w-6 mr-2" />
                {relatorio.ano}
              </a>
            ))}
          </div>
        </div>

        {/* Código de ética e conduta */}
        <div className="w-full sm:w-4/5 lg:w-2/5">
          <h2 className="text-xl font-semibold mb-12 text-center mt-12">Código de ética e Conduta Gamboa Ação</h2>
          <a
            href={codigoConduta.link}
            className="flex items-center text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFolder className="h-6 w-6 mr-2" />
            {codigoConduta.texto}
          </a>
        </div>

        {/* Estatuto Social */}
        <div className="w-full sm:w-4/5 lg:w-2/5">
          <h2 className="text-xl font-semibold mb-12 text-center mt-12">Estatuto Social Gamboa Ação</h2>
          <a
            href={estatutoSocial.link}
            className="flex items-center text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFolder className="h-6 w-6 mr-2" />
            {estatutoSocial.texto}
          </a>
        </div>
      </div>
    </>
  );
};

export default Relatorios;
