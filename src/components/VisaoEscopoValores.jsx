// components/VisaoEscopoValores.js
export default function VisaoEscopoValores() {
    return (
        <div className="bg-blue-50">
            <div className="bg-blue-50 py-10 max-w-5xl mx-auto">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Visão */}
                    <div className="bg-white shadow-lg p-6 rounded-md text-center">
                        <h3 className="text-orange-500 text-xl font-bold mb-4">Visão</h3>
                        <p className="text-gray-700 text-lg font-semibold">
                            Ser reconhecida como uma instituição que promove impacto relevante
                            na região portuária do Rio de Janeiro através da educação.
                        </p>
                    </div>

                    {/* Escopo */}
                    <div className="bg-white shadow-lg p-6 rounded-md text-center">
                        <h3 className="text-orange-500 text-xl font-bold mb-4">Escopo</h3>
                        <p className="text-gray-700 text-lg font-semibold">
                            Crianças e jovens de 4 a 18 anos que vivem em situação de
                            vulnerabilidade familiar e social.
                        </p>
                    </div>

                    {/* Valores */}
                    <div className="bg-white shadow-lg p-6 rounded-md text-center">
                        <h3 className="text-orange-500 text-xl font-bold mb-4">Valores</h3>
                        <p className="text-gray-700 text-lg font-semibold">
                            Amor, cuidado, transformação, honra, paz, justiça, alegria,
                            solidariedade, respeito, ética, integridade e família.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
