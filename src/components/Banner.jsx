import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden font-sans">
      {/* Background image covering the entire section */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/banner-home01.png" // Path to your image
          alt="Children smiling"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay content on the left */}
      <div className="relative z-10 w-full h-full flex pt-20 md:pt-40">
        {/* Text on the left */}
        <div className="bg-transparent text-left p-6 sm:p-8 md:p-12 lg:p-16">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-normal w-full md:w-2/3 lg:w-1/3 mt-3">
            Transformamos vidas oferecendo educação integral e dignidade,
            para as crianças da região portuária do Rio de Janeiro.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
