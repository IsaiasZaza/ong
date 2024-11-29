import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative lg:h-screen flex items-center overflow-hidden z-0">
      <div className="">
        <Image
          src="/banner-home01.png"
          alt="Children smiling"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 w-full h-full flex pt-20 md:pt-40 lg:mx-24">
        {/* Text on the left */}
        <div className="bg-transparent text-left p-6 sm:p-8 md:p-12 lg:p-16">
          <h1 className="bg-[#63C5EC] bg-opacity-80 lg:bg-transparent lg:bg-opacity-0 rounded-lg px-4 py-1 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-normal w-full md:w-2/3 lg:w-1/3 mt-3">
            Transformamos vidas oferecendo educação integral e dignidade,
            para as crianças da região portuária do Rio de Janeiro.
          </h1>
        </div>
      </div>

    </section>
  );
};

export default Banner;
