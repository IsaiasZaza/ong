"use client"

import Image from 'next/image';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Lembre-se de instalar o Heroicons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed bg-white shadow mx-auto w-full z-50 mb-12 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="/">
            <Image
              src="/logo.png" // Substitua com o caminho do seu logo
              alt="Logo Vaga Lume"
              width={150}
              height={100}
              className="mr-3"
            />
          </a>

        </div>
        <div className="hidden md:flex space-x-4">
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/comoDoar" className="text-gray-800 hover:text-orange-500">Como Doar</a></li>
              <li><a href="/quemSomos" className="text-gray-800 hover:text-orange-500">Quem Somos</a></li>
              <li><a href="#" className="text-gray-800 hover:text-orange-500">Nossa História</a></li>
              <li><a href="/oQueFazemos" className="text-gray-800 hover:text-orange-500">O Que Fazemos</a></li>
              <li><a href="/nossa-equipe" className="text-gray-800 hover:text-orange-500">Nossa Equipe</a></li>
              <li><a href="/voluntariado" className="text-gray-800 hover:text-orange-500">Voluntariado</a></li>
            </ul>
            <div className='text-center '>
              <p className='text-orange-500'>Transparencia</p>
            </div>
          </nav>
        </div>
        <div className="hidden md:block">
          <a href="#" className="bg-orange-500 text-white px-4 py-16 rounded hover:bg-orange-600">Doe Agora</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-yellow-500">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800">
          <nav>
            <ul className="space-y-2 px-4 py-2">
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-yellow-500">Como Doar</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-yellow-500">Quem Somos</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-yellow-500">Nossa História</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-800 hover:text-yellow-500">O Que Fazemos</a></li>
              <li><a href="/nossa-equipe" className="block px-4 py-2 text-gray-800 hover:text-yellow-500">Nossa Equipe</a></li>
              <li><a href="#" className="block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Doe Agora</a></li>
            </ul>
          </nav>

        </div>
      )}
    </header>
  );
}

export default Header;