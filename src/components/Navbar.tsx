'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo ou nome da marca */}
        <div className="text-2xl font-extrabold tracking-tight">GRAVELO</div>

        {/* Botão hambúrguer no mobile */}
        <button
          className="md:hidden text-2xl transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links no desktop */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#inicio" className="hover:text-gray-600">Início</a></li>
          <li><a href="#produtos" className="hover:text-gray-600">Produtos</a></li>
          <li><a href="#contato" className="hover:text-gray-600">Contato</a></li>
          <li><a href="#sobre" className="houver:text-gray-600">Sobre</a></li>
        </ul>
      </nav>

      {/* Menu mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-2 text-sm font-medium">
            <li><a href="#inicio" className="hover:text-gray-600 block">Início</a></li>
            <li><a href="#produtos" className="hover:text-gray-600 block">Produtos</a></li>
            <li><a href="#contato" className="hover:text-gray-600 block">Contato</a></li>
            <li><a href="#sobre" className="houver:text-gray-600">Sobre</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
