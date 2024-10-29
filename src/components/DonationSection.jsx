import React from "react";

const DonationSection = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center bg-orange-500 text-white py-4 text-xl font-bold">
                    Pessoa Física
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                    {/* Doação recorrente */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h2 className="text-orange-500 text-2xl font-semibold mb-4">
                            Doação recorrente
                        </h2>
                        <p className="text-gray-700 mb-4">
                            A doação recorrente permite à Gamboa Ação ter previsibilidade
                            financeira e atuar de maneira contínua. Você pode escolher o valor
                            e fazer diretamente da sua{" "}
                            <span className="font-semibold">
                                conta bancária, via PIX, ou por cartão de crédito via PayPal
                            </span>
                            . Caso opte pela conta bancária ou PIX, utilize a opção de repetir
                            a operação pela quantidade de meses desejada. Para doações via
                            PayPal, basta clicar na caixinha{" "}
                            <span className="italic">"transformar em doação mensalmente"</span>
                            .
                        </p>
                    </div>

                    {/* Doação pontual */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h2 className="text-orange-500 text-2xl font-semibold mb-4">
                            Doação pontual
                        </h2>
                        <p className="text-gray-700 mb-4">
                            <strong>Doe sempre que puder</strong>, escolha o valor e apoie um
                            dos nossos projetos. Você pode escolher o valor e doar diretamente
                            da sua{" "}
                            <span className="font-semibold">
                                conta bancária, via PIX, ou por cartão de crédito via PayPal
                            </span>
                            .
                        </p>
                        <div>
                            <div className="w-full h-64 bg-gray-200 flex justify-center items-center">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/watch?v=xFKF_GrBNv4&rel=0"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationSection;
