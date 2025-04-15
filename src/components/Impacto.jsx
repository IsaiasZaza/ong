import React from 'react';
import { motion } from 'framer-motion';

const Impacto = () => {
  // Variantes para as animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: "url('/impct.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white py-10 px-4 md:px-10">
          {/* Título com animação */}
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-center"
            variants={itemVariants}
          >
            Impacto:
          </motion.h2>

          {/* Estatísticas com animações */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 w-full pt-16"
            variants={containerVariants}
          >
            {[
              {
                value: '+300',
                description: 'Assistidos diretamente ao longo de 8 anos',
              },
              {
                value: '+1500',
                description: 'Beneficiários impactados indiretamente ao longo de 8 anos',
              },
              {
                value: '+80',
                description: 'Famílias impactadas ao longo de 8 anos',
              },
              {
                value: '+40',
                description: 'Empregos e renda gerados diretamente ao longo de 8 anos',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center flex-1 min-w-[120px] p-4"
                variants={itemVariants}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
                  {item.value}
                </h3>
                <p className="mt-2 text-base sm:text-base md:text-lg lg:text-xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Impacto;
