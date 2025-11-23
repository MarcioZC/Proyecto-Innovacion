import React from 'react';
// Importamos Sidebar y Header usando el alias estándar de Next.js
import Sidebar from '@/components/sidebar'; 
import Header from '@/components/header'; 

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    // Contenedor principal que usa flexbox para la distribución lateral
    // h-screen asegura que ocupe toda la altura visible
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden">
      
      {/* Sidebar - Componente lateral fijo */}
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Header - Componente superior fijo */}
        <Header />

        {/* Área Principal de Contenido (Dashboard) */}
        {/* El children es el contenido de app/dashboard/page.tsx */}
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}