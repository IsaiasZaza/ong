"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'; // Importando framer-motion
import VoluntariadoSection from '@/components/VoluntariadoSection';
import VideoSection from '@/components/VideoSection';
import Donation from '@/components/Donation';
import Corporativo from '@/components/Corporativo';

export default function voluntariado() {
  // Variantes para animações
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <main>
        <section>
          {/* Header Section with background image */}
          <motion.div
            className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Desktop Background */}
            <Image
              src="/voluntariado.png"
              alt="Grupo de voluntários"
              fill
              className="object-cover grayscale lg:block hidden"
            />
            {/* Mobile Background */}
            <Image
              src="/mb6.png"
              alt="Grupo de voluntários"
              fill
              className="object-cover grayscale sm:block lg:hidden"
            />
            {/* Header Button */}
            <motion.div
              className="relative z-10 flex flex-col justify-end w-3/4 sm:w-1/2 lg:w-64 h-full ml-4 sm:ml-8 lg:ml-40 mb-4 sm:mb-8 lg:mb-16 py-3"
              variants={fadeInUp}
            >
              <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-lg sm:text-base lg:text-2xl shadow-lg w-40">
                Voluntariado
              </button>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="mx-auto text-center">
              {/* Title and Description */}
              <motion.h3 className="text-blue-400 text-2xl mb-4 mt-4" variants={fadeInUp}>
                Seja parte da transformação na Gamboa Ação.
              </motion.h3>
              <motion.p className="text-orange-500 text-xl mb-8" variants={fadeInUp}>
                Formas de Atuar Voluntariamente
              </motion.p>

              {/* Cards Section */}
              <motion.div
                className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                {/* Card 1: Voluntariado mão na massa */}
                <motion.div
                  className="flex flex-col items-center"
                  variants={fadeInUp}
                >
                  <div className="bg-orange-500 rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center mb-4">
                    <Image
                      src="/maoNaMassa.png"
                      alt="Mão na massa"
                      width={140}
                      height={140}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-blue-500 text-lg">Voluntariado mão na massa</h4>
                </motion.div>

                {/* Card 2: Voluntariado por competência */}
                <motion.div
                  className="flex flex-col items-center"
                  variants={fadeInUp}
                >
                  <div className="bg-orange-500 rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center mb-4">
                    <Image
                      src="/co.png"
                      alt="Por competência"
                      width={140}
                      height={140}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-blue-500 text-lg">Voluntariado por competência</h4>
                </motion.div>

                {/* Card 3: Voluntariado pro bono */}
                <motion.div
                  className="flex flex-col items-center"
                  variants={fadeInUp}
                >
                  <div className="bg-orange-500 rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center mb-4">
                    <Image
                      src="/bono.png"
                      alt="Pro bono"
                      width={140}
                      height={140}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-blue-500 text-lg">Voluntariado pro bono</h4>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Other Sections */}
        <VoluntariadoSection />
        <div>
          <Corporativo />
        </div>
        <VideoSection />
        <Donation />
      </main>
    </>
  );
}
