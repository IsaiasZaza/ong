import Image from "next/image";

const VoluntariadoSection = () => {
    return (
        <>
            <div className="bg-white p-4 sm:p-8">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Primeira seção: Imagem da esquerda e texto à direita */}
                    <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
                        {/* Imagem da esquerda */}
                        <div className="md:w-1/2 w-full">
                            <img
                                src="/aa.png"
                                alt="Crianças participando de atividades"
                                className="shadow-lg object-cover w-full h-64 sm:h-80 md:h-96 rounded-lg" // Adiciona bordas arredondadas
                            />
                        </div>

                        {/* Texto da direita */}
                        <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
                            <h2 className="text-2xl  px-6 py-4 bg-[#63C5EC]">
                                Voluntariado mão na massa, tradicional:
                            </h2>
                            <p className="leading-relaxed text-gray-700 px-6">
                                Trabalhos pontuais e atividades durante nossos eventos comemorativos. Voluntários "mão na massa" ajudam diretamente nas atividades com as crianças, na logística de eventos e muito mais!
                            </p>
                            <p className="leading-relaxed text-gray-700 px-6 font-bold text-lg">
                                Seja parte das ações no campo!
                            </p>
                        </div>
                    </div>

                    {/* Segunda seção: Texto à esquerda com imagem à direita */}
                    <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mt-8">
                        {/* Texto à esquerda */}
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-2xl  px-6 py-4 bg-[#63C5EC]">
                                Voluntariado por competência:
                            </h2>
                            <p className="leading-relaxed text-gray-700 px-6">
                                Se você tem conhecimento específico em áreas como medicina, serviço social, nutrição, psicologia, e outras, pode contribuir diretamente com o desenvolvimento de nossas crianças e adolescentes. Seu conhecimento pode transformar vidas!
                            </p>
                            <p className="leading-relaxed text-gray-700 px-6 pb-10 font-bold text-lg">
                                Use suas habilidades e expertise para fazer a diferença!
                            </p>
                        </div>

                        {/* Imagem à direita */}
                        <div className="md:w-1/2 w-full">
                            <img
                                src="/voluntariado2.png"
                                alt="Criança jogando xadrez"
                                className="shadow-lg object-cover w-full h-64 sm:h-80 md:h-96 rounded-lg" // Adiciona bordas arredondadas
                            />
                        </div>
                    </div>

                    {/* Terceira seção: Imagem à esquerda e texto à direita */}
                    <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
                        {/* Imagem da esquerda */}
                        <div className="md:w-1/2 w-full">
                            <img
                                src="/C.png"
                                alt="Voluntário com crianças"
                                className="shadow-lg object-cover w-full h-64 sm:h-80 md:h-96 rounded-lg"
                            />
                        </div>

                        {/* Texto à direita */}
                        <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
                            <h2 className="text-2xl  px-6 py-4 bg-[#63C5EC]">
                                Voluntariado Pro Bono:
                            </h2>
                            <p className="leading-relaxed text-gray-700 px-6">
                                Se você ou sua empresa têm especializações que podem apoiar nossa gestão (gerenciamento de projetos, contabilidade, advocacia, etc.), oferecer sua consultoria pro bono pode nos ajudar a aumentar nossa eficiência e governança.
                            </p>
                            <p className="leading-relaxed text-gray-700 px-6 font-bold text-lg">
                                Ajude a fortalecer nossa operação!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VoluntariadoSection;
