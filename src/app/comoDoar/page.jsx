import Image from 'next/image';


export default function comoDoar() {
 return(
    <>
       <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-orange-600 mb-8">
          Seja um doador <span className="text-red-500">recorrente!</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <Image
              src="/kokimoto.jpg" // Substitua pelo caminho real da imagem
              alt="Transferência Bancária"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <p className="text-lg font-semibold text-gray-800">Doe mensalmente por Transferência Bancária</p>
            <p className="text-gray-600 mt-2">Banco Itaú - 341<br />Agência 6002<br />Conta Corrente 19757-7<br />Associação Beneficente Gamboa Ação<br />CNPJ: 24.884.949/0001-60</p>
          </div>
          
          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <Image
              src="/kokimoto.jpg" // Substitua pelo caminho real da imagem
              alt="Doe por Pix"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <p className="text-lg font-semibold text-gray-800">Doe por Pix</p>
            <p className="text-gray-600 mt-2">Pix - CNPJ: 24.884.949/0001-60<br />Selecione repetir = mensal</p>
          </div>

          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <Image
              src="/kokimoto.jpg" // Substitua pelo caminho real da imagem
              alt="Doe via PayPal"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <p className="text-lg font-semibold text-gray-800">Doe via PayPal</p>
            <p className="text-gray-600 mt-2">
              <a href="#" className="text-blue-500">Clique aqui</a> para realizar a doação via PayPal.
              <br />Você será redirecionado para a página da plataforma.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Transparência</h2>
          <div className="mt-6 border-t-2 border-blue-500 w-20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="/kokimoto.jpg" // Substitua pelo caminho real da imagem
              alt="Relatório de Atividades 2023"
              width={250}
              height={250}
              className="mx-auto"
            />
            <a href="#" className="text-orange-600 mt-4 inline-block">Relatório de Atividades 2023</a>
          </div>

          <div className="text-center">
            <Image
              src="/kokimoto.jpg" // Substitua pelo caminho real da imagem
              alt="Relatório de Atividades 2024"
              width={250}
              height={250}
              className="mx-auto"
            />
            <a href="#" className="text-orange-600 mt-4 inline-block">Relatório de Atividades 2024</a>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">Estatuto Social</h3>
            <ul className="text-blue-600">
              <li><a href="#" className="hover:underline">Balanço e DRE 2023</a></li>
              <li><a href="#" className="hover:underline">Balanço e DRE 2022</a></li>
              <li><a href="#" className="hover:underline">Balanço e DRE 2021</a></li>
              <li><a href="#" className="hover:underline">Balanço e DRE 2020</a></li>
              <li><a href="#" className="hover:underline">Balanço e DRE 2019</a></li>
              <li><a href="#" className="hover:underline">Balanço e DRE 2018</a></li>
              <li><a href="#" className="hover:underline">Balanço e DRE 2017</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
 )
}