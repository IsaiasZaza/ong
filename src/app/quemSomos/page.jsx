import Historia from "@/components/Historia";
import TimelineSwiper from "@/components/TimelineSwiper";
import VisaoEscopoValores from "@/components/VisaoEscopoValores";
import Image from "next/image";

export default function NossaEquipe() {
    return (
        <section className="">
            <div
                className="relative bg-gray-100 bg-no-repeat h-[550px]"
                style={{
                    backgroundImage: "url('/banner-transparencia.png')",
                    backgroundSize: "cover",
                }}
            >
                <div className="relative z-10 ml-4 sm:ml-8 lg:ml-40">
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-xl sm:text-base lg:text-2xl font-bold shadow-lg mt-[480px]">
                        Quem somos
                    </button>
                </div>
            </div>

            {/* Conteúdo Central */}
            <div className="mx-auto">
                <div className="mx-auto container py-10 text-center">
                    <h1 className="text-2xl lg:text-4xl font-bold mb-6">
                        Somos a Gamboa Ação
                    </h1>
                    <div className="text-start mb-8 flex flex-col lg:flex-row">
                        <p className="text-lg lg:w-1/2 mx-auto px-4">
                            A <strong>Gamboa Ação</strong> é uma instituição sem fins
                            lucrativos, situada na região portuária do Rio de Janeiro,{" "}
                            <strong>
                                que incentiva o desenvolvimento integral de crianças e
                                adolescentes em situação de vulnerabilidade familiar e
                                social
                            </strong>
                            , com o objetivo de ajudá-los a sonhar e lutar por um futuro
                            melhor e digno.
                        </p>
                    </div>
                </div>

                {/* Componentes */}
                <Historia />
                <TimelineSwiper />

                {/* Imagem e Texto Sobreposto */}
                <div className="relative hidden lg:block">
                    <Image
                        width={1080}
                        height={1080}
                        src="/meninaSomos.png"
                        alt="Children playing"
                        className="w-full h-full object-cover"
                    />
                    <h1 className="absolute inset-6 md:inset-12 flex items-center justify-center text-orange-500 text-sm md:text-lg lg:text-2xl font-semibold text-center px-4 z-10 w-full md:w-3/4 lg:w-1/2">
                        Esse é o nosso propósito: desenvolver indivíduos livres,
                        produtivos, socialmente integrados e moralmente responsáveis.
                    </h1>
                </div>

                {/* Componente Final */}
                <VisaoEscopoValores />
            </div>
        </section>
    );
}
