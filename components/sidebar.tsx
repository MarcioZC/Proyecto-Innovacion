'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FolderOpenIcon,
  ChartBarIcon,
  CpuChipIcon,
  BellIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  DocumentCheckIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  // Obtenemos la ruta actual
  const pathname = usePathname();

  // Las rutas de navegación
  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon },
    { name: 'BigQuery', href: '/bigquery', icon: FolderOpenIcon },
    { name: 'Vertex AI', href: '/vertex-ai', icon: CpuChipIcon },
    { name: 'Monitoring', href: '/monitoring', icon: BellIcon },
    { name: 'Billing', href: '/billing', icon: CreditCardIcon },
    { name: 'AI Search (B2C)', href: '/ai-search', icon: MagnifyingGlassIcon },
    { name: 'Workspace Auditoria', href: '/workspace-auditoria', icon: DocumentCheckIcon },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col justify-between shadow-sm shrink-0">
      {/* Sección Superior: Detalles del Proyecto y Navegación */}
      <div>
        {/* Nombre e ID del Proyecto */}
        <div className="flex items-center space-x-2 mb-6 p-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
            G
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">GCP Project</p>
            <p className="text-xs text-gray-500">project-id-12345</p>
          </div>
        </div>

        {/* Enlaces de Navegación */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            // Verificamos si la ruta actual coincide con el href del item
            const isActive = pathname === item.href;
            
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`flex items-center p-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sección Inferior: Botones de Acción y Opciones */}
      <div className="space-y-2">
        {/* Botón Principal de Acción */}
        <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center shadow-md">
          <PlusIcon className="w-5 h-5 mr-2" /> Create Resource
        </button>

        {/* Enlaces de Utilidad */}
        <Link href="/settings" className="flex items-center p-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
          <Cog6ToothIcon className="w-5 h-5 mr-3" />
          Settings
        </Link>
        <Link href="/help" className="flex items-center p-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
          <QuestionMarkCircleIcon className="w-5 h-5 mr-3" />
          Help
        </Link>
      </div>
    </div>
  );
}