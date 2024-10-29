import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";


const CompanySection = () => {
    return (
        <div className=" py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:px-0 px-4">
                {/* Left Side Content */}
                <div>
                    <div className="bg-orange-500 text-white py-4 px-6 inline-block text-2xl font-bold rounded-t-lg w-full">
                        Empresa
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mt-6">
                        <span className="font-semibold">Juntos</span> podemos{" "}
                        <span className="text-black">potencializar ações de transformação</span> e de{" "}
                        <span className="text-black">impacto social</span>.
                    </h2>
                    <p className="text-gray-700 mt-4">
                        Colabore para um mundo melhor.
                    </p>
                    <p className="text-gray-600 mt-4">
                        O investimento de recursos em comunidades carentes vai além do
                        marketing social. Essa iniciativa tem influência direta na redução
                        dos problemas sociais e das carências da sociedade relacionadas,
                        sobretudo, às questões de higiene e saúde pública, educação e
                        nutrição.
                    </p>
                    <p className="text-orange-600 font-semibold mt-6 text-xl">
                        Junte-se a nós e faça a diferença!
                    </p>
                    {/* Contact Button */}
                    <a
                        href="https://wa.me/1234567890"
                        className="bg-orange-500 text-white flex items-center gap-2 py-2 px-4 mt-4 rounded-lg shadow-lg hover:bg-orange-600 transition-all text-lg font-bold"
                    >
                        ENTRE EM CONTATO <IoLogoWhatsapp className="text-3xl text-white" />
                    </a>
                </div>

                {/* Right Side Image */}
                <div className="flex justify-center">
                    <img
                        src="/vidas.png" // Replace with your image URL
                        alt="Presentation"
                        className="rounded-lg shadow-lg object-cover w-full max-w-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default CompanySection;
