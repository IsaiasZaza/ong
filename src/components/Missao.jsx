import Image from 'next/image';

export default function Missao() {
  const features = [
    {
      id: 1,
      imageSrc: '/banner-2.jpg', // substitua pelo caminho da sua imagem
      title: 'Educação',
      description:
        'nosso objetivo é manter as crianças na escola motivadas, e com bom desempenho até a conclusão do Ensino Médio.',
    },
    {
      id: 2,
      imageSrc: '/banner-2.jpg',
      title: 'Arte e cultura',
      description:
        'Ocupamos as crianças de forma estruturada com o intuito de melhorar a autoestima e de estimular a criatividade.'
    },
    {
      id: 3,
      imageSrc: '/banner-2.jpg',
      title: 'Esporte e lazer',
      description:
        'Através da identificação das lideranças locais e mobilização de voluntários, estimulamos uma gestão comunitária para a criação de um senso de pertencimento e de identificação com o projeto. Afinal, as bibliotecas pertencem às comunidades!',
    },
    {
      id: 4,
      imageSrc: '/banner-2.jpg',
      title: 'Cultura Local: valorização da cultura local e produção de livros artesanais',
      description:
        'O programa Saúde e Higiene Gamboa Ação oferece alimentação saudável para as crianças, instrui sobre hábitos de higiene pessoal e possibilita o acesso as práticas essenciais de autocuidado.',
    },
  ];

  return (
    <div className="bg-white py-0 font-sans">
      <div className="max-w-7xl lg:px-0">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                className="rounded-lg shadow-lg"
                width={500} // Defina a largura correta para sua imagem
                height={300} // Defina a altura correta para sua imagem
                layout="responsive" // Faz a imagem responsiva
                objectFit="cover" // Ajusta a imagem para cobrir o container
              />
            </div>
            <div className="md:w-2/3 md:pl-10">
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
