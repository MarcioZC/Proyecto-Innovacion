import React from 'react';
import { MagnifyingGlassIcon, BellIcon, QuestionMarkCircleIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
      {/* Sección Izquierda: Logo de Google Cloud y Búsqueda */}
      <div className="flex items-center space-x-6">
        {/* Placeholder para el Logo de Google Cloud */}
        <div className="flex items-center">
          <span className="text-xl font-semibold text-blue-600 mr-2">G</span>
          <span className="text-xl font-medium text-gray-800">Google Cloud</span>
        </div>

        {/* Barra de Búsqueda */}
        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
        </div>
      </div>

      {/* Sección Derecha: Iconos de Utilidad y Perfil */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
          <QuestionMarkCircleIcon className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
          <Squares2X2Icon className="w-6 h-6" />
        </button>
        <button className="relative p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
          <BellIcon className="w-6 h-6" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        {/* Avatar del Usuario */}
        <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-medium cursor-pointer text-sm">
          M
        </div>
      </div>
    </header>
  );
}