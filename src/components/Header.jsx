"use client"

import Image from 'next/image';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white mx-auto w-full z-50 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Logo Vaga Lume"
              width={150}
              height={100}
              className="mr-3 w-3/4 md:w-[150px] lg:w-[150px]"
            />
          </a>
        </div>

        <div className="hidden lg:flex space-x-4">
          <nav>
            <ul className="flex space-x-3 lg:text-lg md:text-base text-base">
              <li><a href="/comoDoar" className="text-gray-800 hover:text-orange-500">Como Doar </a></li>
              <li><a href="/quemSomos" className="text-gray-800 hover:text-orange-500">Quem Somos </a></li>
              <li><a href="/oQueFazemos" className="text-gray-800 hover:text-orange-500">O Que Fazemos </a></li>
              <li><a href="/nossa-equipe" className="text-gray-800 hover:text-orange-500">Nossa Equipe </a></li>
              <li><a href="/voluntariado" className="text-gray-800 hover:text-orange-500">Voluntariado </a></li>
              <li><a href="/transparencia" className="text-gray-800 hover:text-orange-500">Transparência</a></li>
            </ul>
          </nav>
        </div>
        <div className="lg:block hidden">
          <a href="/comoDoar" className="relative bg-orange-500 text-white px-4 py-16 rounded hover:bg-orange-600 z-50">Doe Agora</a>
        </div>

        <div className="flex items-center lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-yellow-500">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white text-gray-800">
          <nav>
            <ul className="space-y-2 px-4 py-2">
              <li><a href="/quemSomos" className="text-gray-800 hover:text-orange-500">Quem Somos</a></li>
              <li><a href="/oQueFazemos" className="text-gray-800 hover:text-orange-500">O Que Fazemos</a></li>
              <li><a href="/nossa-equipe" className="text-gray-800 hover:text-orange-500">Nossa Equipe</a></li>
              <li><a href="/voluntariado" className="text-gray-800 hover:text-orange-500">Voluntariado</a></li>
              <li><a href="/transparencia" className="text-gray-800 hover:text-orange-500">Transparência</a></li>
              <li><a href="/comoDoar" className="block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Doe Agora</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
