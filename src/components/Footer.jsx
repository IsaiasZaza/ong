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

      <footer className="bg-orange-500 text-white py-8 ">
        <div className="container mx-auto px-6 pt-12">
          <div className="flex flex-wrap justify-between">

            {/* Coluna com a logo e links no final */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col h-full">
              <img src="/logo2.png" alt="Logo" className="w-48 h-auto" />
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex-col">
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                <img src="/footer.png" alt="Footer" />
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="flex space-x-4 mt-4 justify-center">
                <a href="https://www.instagram.com/gamboaacao/" aria-label="Instagram" target="_blank">
                  <img src="/instagran.png" alt="Instagram" className="w-8 h-8" />
                </a>
                <a href="https://pt-br.facebook1.com/onggamboaacao/" aria-label="Facebook" target="_blank">
                  <img src="/facebook1.png" alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="#" aria-label="WhatsApp" target="_blank">
                  <img src="/whatsapp1.png" alt="WhatsApp" className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/company/79719285/admin/dashboard/" aria-label="LinkedIn" target="_blank">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href="https://www.youtube.com/c/GAMBOAA%C3%87%C3%83O" aria-label="YouTube" target="_blank">
                  <img src="/youtube1.png" alt="YouTube" className="w-8 h-8" />
                </a>
              </div>
              <p className="text-center mt-6">Fale conosco</p>
              <p className="text-center">21 98899-3699</p>
              <p className="text-center">contato@gamboacao.org.br</p>
            </div>

          </div>
        </div>

        <div className="text-center text-sm mt-8">
          <p>R. Pedro Ernesto, 29 e 31 - Gamboa, Rio de Janeiro - RJ, 20220-350</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;