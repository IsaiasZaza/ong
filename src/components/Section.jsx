import Image from "next/image";

const Section = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Seção Laranja com Texto */}
        <div className="bg-orange-500 w-full md:w-1/2 flex flex-col justify-center items-center text-white p-10">
          <h1 className="justify-center text-lg md:text-2xl font-bold mb-6 text-blue-50">"Amar e ser amado, cuidar de quem precisa e
            transformar vidas, essa é uma vida que vale a pena e que transborda o nosso coração de gratidão.”
          </h1>
          <Image src="/crianca.jpg" alt="Criança comendo" width={600} height={400} className="mb-6" />
          <div className="bg-orange-700 p-6 shadow-2xl rounded-lg">
            <p className="text-xl md:text-2xl text-blue-50">
              O problema da fome é <span className="font-bold">urgente</span>. <br />
              Alimente uma criança <span className="font-bold">hoje!</span>
            </p>
          </div>
        </div>

        {/* Seção Cinza com Opções de Doação */}
        <div className="bg-gray-100 w-full md:w-1/2 flex flex-col justify-center items-start p-10 md:p-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-500 mb-4 cursor-default">
            Você e Gamboa-Ação <br /> #juntosPelasCrianças
          </h2>
          <p className="mb-8 text-sm md:text-base">
            Selecione o tamanho do impacto que você quer ter na alimentação de milhares de crianças brasileiras:
          </p>

          <div className="w-full">
            <button className="flex justify-between items-center bg-white border border-gray-300 shadow-lg p-4 md:p-6 mb-4 w-full text-left">
              <div>
                <span className="text-orange-600 text-xl md:text-2xl font-bold">R$30,00</span>
                <p className="text-gray-600 text-sm md:text-base">em itens de cesta básica</p>
              </div>
              <span className="text-gray-400">&rarr;</span>
            </button>

            <button className="flex justify-between items-center bg-white border border-gray-300 shadow-lg p-4 md:p-6 mb-4 w-full text-left">
              <div>
                <span className="text-orange-600 text-xl md:text-2xl font-bold">R$50,00</span>
                <p className="text-gray-600 text-sm md:text-base">em itens de cesta básica</p>
              </div>
              <span className="text-gray-400">&rarr;</span>
            </button>

            <button className="flex justify-between items-center bg-white border border-gray-300 shadow-lg p-4 md:p-6 mb-4 w-full text-left">
              <div>
                <span className="text-orange-600 text-xl md:text-2xl font-bold">R$80,00</span>
                <p className="text-gray-600 text-sm md:text-base">em itens de cesta básica</p>
              </div>
              <span className="text-gray-400">&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[url('/teste-vagalume.jpg')] bg-fixed bg-cover flex flex-col items-center justify-center p-10 text-center space-y-6 md:space-y-10">
        <h1 className="text-orange-600 text-4xl md:text-5xl font-bold">
          PROPÓSITO
        </h1>
        <p className="text-blue-50 text-2xl md:text-3xl font-semibold">
          Desenvolver indivíduos livres, produtivos, socialmente integrados
        </p>
        <p className="text-blue-50 text-2xl md:text-3xl font-semibold">
          &
        </p>
        <p className="text-blue-50 text-2xl md:text-3xl font-semibold">
          moralmente responsáveis.
        </p>

        <a href="#" className="bg-orange-500 text-white px-10 py-4 md:px-16 md:py-8 rounded-lg text-lg md:text-xl font-bold hover:bg-yellow-600 mt-10 md:mt-28">
          Nosso compromisso
        </a>
      </div>

    </section>


  )
}

export default Section;