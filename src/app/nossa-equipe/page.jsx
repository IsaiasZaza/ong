// pages/nossa-equipe.js
import Image from 'next/image';

export default function NossaEquipe() {
  return (
    <section className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Nossa Equipe</h2>
            <img src="" alt="" className="mx-auto my-4" />
            <p className="text-lg text-gray-600">Conheça os profissionais que fazem a diferença.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pessoa 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Foto da pessoa 1"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">João Silva</h3>
                <p className="text-gray-600">
                    Desenvolvedor Front-End apaixonado por criar interfaces intuitivas e funcionais.
                </p>
            </div>
            {/* Pessoa 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Foto da pessoa 2"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">Maria Oliveira</h3>
                <p className="text-gray-600">
                    Designer Gráfica com foco em identidade visual e branding.
                </p>
            </div>
            {/* Pessoa 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Foto da pessoa 3"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">Carlos Pereira</h3>
                <p className="text-gray-600">
                    Gerente de Projetos com vasta experiência em metodologias ágeis.
                </p>
            </div>
            {/* Pessoa 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Foto da pessoa 4"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">Ana Souza</h3>
                <p className="text-gray-600">
                    Especialista em Marketing Digital e estratégias de crescimento.
                </p>
            </div>
            {/* Pessoa 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Foto da pessoa 5"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">Luiz Costa</h3>
                <p className="text-gray-600">
                    Analista de Dados com expertise em Business Intelligence.
                </p>
            </div>
            {/* Pessoa 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Foto da pessoa 6"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">Luiz Costa</h3>
                <p className="text-gray-600">
                    Analista de Dados com expertise em Business Intelligence.
                </p>
            </div>
        </div>
    </div>
</section>

  );
}
