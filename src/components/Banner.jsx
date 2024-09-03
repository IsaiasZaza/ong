import Image from "next/image";

const Banner = () => {
    return (
        <section className="relative">
            <div className="relative bg-cover bg-center">
                <Image
                    src="/NossaEquipe.jpg" // Substitua pelo caminho real da imagem
                    alt="Transferência Bancária"
                    width={1920}
                    height={1080}
                    className="w-full h-lvh object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-orange-50 text-4xl font-bold mb-4">
                        Precisamos de voce
                    </h1>
                    <p className="text-orange-50 text-lg">
                        Conheça os profissionais que fazem a diferença.
                    </p>
                    <div className="flex gap-1">
                        <p className="text-orange-50 text-lg">Nos ajude nessa missao</p>
                    </div>
                    <button className="text-orange-50 text-lg cursor-pointer border-b border-w px-2 py-2 hover:text-orange-300">
                        Junte-se!
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Banner;
