"use client"

import { motion } from 'framer-motion';

const ActuationSection = () => {
  // Variantes para os elementos (animação dos textos e cartões)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: 'beforeChildren', // Executa antes dos filhos
        staggerChildren: 0.3, // Adiciona um intervalo entre as animações dos filhos
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="relative h-[600px] sm:h-[600px] md:h-[650px] bg-cover bg-center py-12 px-4 sm:px-8"
      style={{ backgroundImage: "url('/porfavorr.png')" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Texto principal */}
      <motion.div className="relative z-10 text-white p-4 sm:p-8 lg:mx-20">
        <motion.div
          className="text-start lg:px-6"
          variants={itemVariants}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Onde atuamos
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-center">
            Gamboa - Rio de Janeiro - RJ
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-center">
            Comunidade da Providência e entorno
          </p>
        </motion.div>

        {/* Cartões com estatísticas */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-32 text-start"
          variants={containerVariants}
        >
          {[
            {
              percent: '50%',
              description: 'da população ativa do território está desempregada',
            },
            {
              percent: '48%',
              description: 'da população possui apenas ensino fundamental incompleto',
            },
            {
              percent: '70%',
              description: 'da população sofre algum nível de insegurança alimentar',
            },
            {
              percent: '20%',
              description: 'da população vive em insegurança alimentar grave (situação de fome)',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="lg:p-6 p-0 rounded-lg bg-opacity-20"
              variants={itemVariants}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
                {item.percent}
              </p>
              <p className="mt-2 text-base sm:text-base md:text-lg lg:text-xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ActuationSection;
