import { IoLogoWhatsapp } from "react-icons/io";

const VoluntariadoCorporativo = () => {
    return (
        <>
            <div className="min-h-screen flex justify-center py-12 px-4 md:px-8">
                <div className="max-w-6xl w-full bg-gray-50 shadow-lg rounded-lg p-6 md:p-10 md:flex md:gap-12">

                    {/* Coluna da esquerda - Datas Comemorativas */}
                    <div className="md:w-1/2 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold text-blue-600 mb-6">
                            Datas comemorativas + <span className="text-gray-700">voluntariado corporativo</span>
                        </h2>

                        {/* 1º Semestre */}
                        <div className="mb-8">
                            <h3 className="font-semibold text-gray-700 mb-2">1º Semestre</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Abril: Dia Mundial da Saúde</li>
                                <li>Abril: Páscoa</li>
                                <li>Maio: Dia das Mães</li>
                                <li>Junho: Dia Mundial do Meio Ambiente</li>
                            </ul>
                        </div>

                        <p className="border border-black mb-8 mt-8"></p>

                        {/* 2º Semestre */}
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">2º Semestre</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Setembro: Dia Mundial da Alfabetização</li>
                                <li>Outubro: Dia das Crianças</li>
                                <li>Novembro: Taça da Harmonia (torneio de futebol)</li>
                                <li>Dezembro: Natal Solidário</li>
                            </ul>
                        </div>
                    </div>

                    {/* Coluna da direita - Celebrar com Propósito */}
                    <div className="md:w-1/2 bg-blue-600 text-white p-8 rounded-lg flex flex-col justify-between text-center shadow-2xl mt-8 md:mt-0 md:relative">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Celebrar com Propósito:</h2>
                            <p className="mb-6 text-lg sm:text-xl">
                                As datas comemorativas na Gamboa Ação são oportunidades de promover conexões, ampliar horizontes e desenvolver o aprendizado. Por meio dessas ações, reforçamos valores de cidadania e despertamos novas experiências para as crianças e voluntários.
                            </p>
                            <p className="font-semibold text-lg sm:text-xl mt-8">
                                Esses momentos são perfeitos para empresas que desejam desenvolver uma cultura organizacional de responsabilidade e impacto social.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/1234567890"
                            className="mt-8 bg-orange-500 text-white flex items-center justify-center gap-2 py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition-all text-lg font-bold"
                        >
                            ENTRE EM CONTATO <IoLogoWhatsapp className="text-3xl text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VoluntariadoCorporativo;
