import Image from "next/image";

const BannerNossaEquipe = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden font-sans">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/NossaEquipe.jpg')" }} // Caminho real da imagem
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-orange-50 text-4xl font-bold mb-4">
                    Precisamos de você
                </h1>
                <p className="text-orange-50 text-lg">
                    Conheça os profissionais que fazem a diferença.
                </p>
                <div className="flex gap-1">
                    <p className="text-orange-50 text-lg">Nos ajude nessa missão</p>
                </div>
                <button className="text-orange-50 text-lg cursor-pointer border-b border-w px-2 py-2 hover:text-orange-300">
                    Junte-se!
                </button>
            </div>
        </section>

    )
}

export default BannerNossaEquipe;
