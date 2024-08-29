import Image from "next/image";

const Banner = () => {
    return (
        <section className="z-50">
            <div className="relative bg-cover bg-center h-screen ">
                <Image
                    src="/teste-vagalume.jpg" // Substitua pelo caminho real da imagem
                    alt="Transferência Bancária"
                    width={1920}
                    height={400}
                    className="mx-auto mb-4"
                />
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold z-50">
                    teste
                </h1>
            </div>

        </section>
    )
}

export default Banner;