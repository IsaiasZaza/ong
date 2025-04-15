import Image from 'next/image';
import { motion } from 'framer-motion';

const Cards = () => {
  // Variantes para animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3, // Delay entre os cards
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-8 bg-white lg:px-80 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animação dispara quando 20% do componente entra na viewport
      variants={containerVariants}
    >
      <div className="text-center">
        <h2 className="text-xl font-bold text-[#F97316] mb-8 md:mb-12">
          A Gamboa Ação atua em quatro áreas
        </h2>
      </div>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 lg:gap-52 justify-items-center mx-auto"
        variants={containerVariants}
      >
        {/* Educação */}
        <motion.div className="flex flex-col items-center" variants={cardVariants}>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#63C5EC] rounded-full flex items-center justify-center">
            <Image
              src="/educacao.png"
              alt="Educação"
              width={128}
              height={96}
              className="rounded-md"
              priority
            />
          </div>
          <p className="mt-4 text-[#63C5EC] text-lg md:text-xl font-bold">Educação</p>
        </motion.div>

        {/* Arte e Cultura */}
        <motion.div className="flex flex-col items-center" variants={cardVariants}>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#63C5EC] rounded-full flex items-center justify-center">
            <Image
              src="/arte.png"
              alt="Arte e Cultura"
              width={128}
              height={96}
              className="rounded-md"
              priority
            />
          </div>
          <p className="mt-4 text-[#63C5EC] text-lg md:text-xl font-bold">Arte e Cultura</p>
        </motion.div>

        {/* Esporte e Lazer */}
        <motion.div className="flex flex-col items-center" variants={cardVariants}>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#63C5EC] rounded-full flex items-center justify-center">
            <Image
              src="/esporte.png"
              alt="Esporte e Lazer"
              width={128}
              height={96}
              className="rounded-md"
              priority
            />
          </div>
          <p className="mt-4 text-[#63C5EC] text-lg md:text-xl font-bold">Esporte e Lazer</p>
        </motion.div>

        {/* Saúde e Higiene */}
        <motion.div className="flex flex-col items-center" variants={cardVariants}>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[#63C5EC] rounded-full flex items-center justify-center">
            <Image
              src="/hg.png"
              alt="Saúde e Higiene"
              width={128}
              height={96}
              className="rounded-md"
              priority
            />
          </div>
          <p className="mt-4 text-[#63C5EC] text-lg md:text-xl font-bold">Saúde e Higiene</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Cards;
