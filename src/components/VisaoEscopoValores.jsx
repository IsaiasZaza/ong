"use client" 

import { motion } from 'framer-motion';

export default function VisaoEscopoValores() {
  // Variantes para animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.3, // Intervalo entre animações dos filhos
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="bg-blue-50 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="bg-blue-50 py-10 max-w-5xl mx-auto">
        <motion.div
          className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {/* Visão */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-md text-center"
            variants={cardVariants}
          >
            <h3 className="text-orange-500 text-2xl font-bold mb-4">Visão</h3>
            <p className="text-gray-700 text-lg">
              Ser reconhecida como uma instituição que promove impacto relevante na região
              portuária do Rio de Janeiro através da educação.
            </p>
          </motion.div>

          {/* Escopo */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-md text-center"
            variants={cardVariants}
          >
            <h3 className="text-orange-500 text-2xl font-bold mb-4">Escopo</h3>
            <p className="text-gray-700 text-lg">
              Crianças e jovens de 4 a 18 anos que vivem em situação de vulnerabilidade familiar e social.
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-md text-center"
            variants={cardVariants}
          >
            <h3 className="text-orange-500 text-2xl font-bold mb-4">Valores</h3>
            <p className="text-gray-700 text-lg">
              Amor, cuidado, transformação, honra, paz, justiça, alegria, solidariedade, respeito,
              ética, integridade e família.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
