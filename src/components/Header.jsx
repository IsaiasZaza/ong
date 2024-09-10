"use client";

import Image from 'next/image';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Lembre-se de instalar o Heroicons


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/">
            <Image
              src="/logo.png" // Substitua com o caminho do seu logo
              alt="Logo"
              width={150}
              height={100}
              className="mr-3"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-grow items-center justify-center space-x-6">
          <a href="/comoDoar" className="text-gray-800 hover:text-orange-500 transition-colors">Como Doar</a>
          <a href="/quemSomos" className="text-gray-800 hover:text-orange-500 transition-colors">Quem Somos</a>
          <a href="/nossa-equipe" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Nossa Equipe</a>
          <div className="relative group">
            <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors">Nossa História</a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg">
              <a href="/transparencia" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Transparência</a>
              <a href="/nossa-equipe" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">voluntariado</a>
              <a href="/nossa-equipe" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog</a>
            </div>
          </div>
          <a href="/oQueFazemos" className="text-gray-800 hover:text-orange-500 transition-colors">O Que Fazemos</a>
          <a href="/parceiros" className="text-gray-800 hover:text-orange-500 transition-colors">Parceiros</a>
        </nav>

        {/* Desktop Call-to-Action Button */}
        <div className="hidden md:block">
          <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">Doe Agora</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 hover:text-orange-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800">
          <nav>
            <ul className="space-y-2 px-4 py-2">
              <li><a href="/comoDoar" className="block px-4 py-2 text-gray-800 hover:text-orange-500 transition-colors">Como Doar</a></li>
              <li><a href="/quemSomos" className="block px-4 py-2 text-gray-800 hover:text-orange-500 transition-colors">Quem Somos</a></li>
              <li><a href="/nossa-equipe" className="block px-4 py-2 text-gray-800 hover:text-orange-500 transition-colors">Nossa Equipe</a></li>
              <li><a href="/transparencia" className="block px-4 py-2 text-gray-800 hover:text-orange-500 transition-colors">Transparência</a></li>
              <li><a href="#" className="block px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">Doe Agora</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
