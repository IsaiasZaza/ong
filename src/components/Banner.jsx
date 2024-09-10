import Image from "next/image";

const Banner = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden lg:mt-16">
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
            <div className="relative z-10 w-full h-full flex items-center justify-start">
                {/* Text on the left */}
                <div className="bg-transparent text-left p-4 md:p-6 ml-4 md:ml-8">
                    <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight space-y-2 md:space-y-4">
                        Transformamos vidas <br />
                        oferecendo educação <br />
                        integral e dignidade, <br />
                        para as crianças da <br />
                        região portuária do <br />
                        Rio de Janeiro.
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Banner;
