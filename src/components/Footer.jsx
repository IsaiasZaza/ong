"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import PartnersSection from './PartnersSection';

const Footer = () => {
  return (
    <>
      <PartnersSection />

      <footer className="bg-orange-400 text-white py-8 font-sans">
        <div className="container mx-auto px-6 pt-12">
          <div className="flex flex-wrap justify-between">

            <div className="w-full md:w-1/3 mb-6 md:mb-0 text-white">
              <img src="logo2.png" alt="Logo" className="w-48 h-auto" />
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex-col">
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                <img src="/footer.png" alt="Footer" />
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-3">Onde Estamos</h4>

              {/* Contêiner dos ícones com flex e espaçamento */}
              <div className="flex space-x-4 mt-4 justify-center">
                <a href="" aria-label="Instagram">
                  <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="" aria-label="Facebook">
                  <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="" aria-label="WhatsApp">
                  <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                </a>
                <a href="" aria-label="LinkedIn">
                  <img src="/linkdin.png" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="" aria-label="YouTube">
                  <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="text-center text-sm mt-8">
          <p>R. Souza e Silva, 112 - Gamboa, Rio de Janeiro - RJ, 20220-560</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
