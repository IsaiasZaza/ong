import Image from "next/image";

const Banner = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background image covering the entire section */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/perfil1.png" // Path to your image
                    alt="Children smiling"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                />
            </div>

            {/* Overlay content on the left */}
            <div className="relative z-10 w-full h-full flex pt-40">
                {/* Text on the left */}
                <div className="bg-transparent text-left p-6 ml-8">
                    <h1 className="text-white text-3xl font-bold leading-tight w-1/3 mt-3">
                    Transformamos vidas  oferecendo educação  integral e dignidade, 
                    para as crianças da região  portuária do Rio de Janeiro.
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Banner;