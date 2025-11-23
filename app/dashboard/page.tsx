import React from 'react';
// Importamos los componentes del Dashboard desde la carpeta 'components'
import PerformanceChart from '@/components/performance';
import DecisionCard from '@/components/desicioncard';
import { ExclamationTriangleIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

// Este componente utiliza el layout definido en app/dashboard/layout.tsx
export default function DashboardPage() {
  // Datos de ejemplo para el gráfico de rendimiento (simulando BigQuery)
  const performanceData = [
    { name: 'Sem 1', value: 100000 },
    { name: 'Sem 2', value: 120000 },
    { name: 'Sem 3', value: 110000 },
    { name: 'Sem 4', value: 130000 },
    { name: 'Sem 5', value: 200000 }, // Pico visible en la maqueta
    { name: 'Sem 6', value: 150000 },
    { name: 'Sem 7', value: 160000 },
  ];

  // Datos de ejemplo para las decisiones estratégicas (simulando Gemini)
  const strategicDecisions = [
    {
      icon: ExclamationTriangleIcon,
      color: 'bg-orange-500',
      text: (
        <>
          Gemini predice un 15% de riesgo en la cadena de suministro, se recomienda renegociar el{' '}
          <span className="font-semibold text-blue-600 cursor-pointer hover:underline">Contrato X</span>.
        </>
      ),
      time: 'Hace 2 horas',
    },
    {
      icon: ChartBarIcon,
      color: 'bg-green-500',
      text: (
        <>
          Se detecta un aumento del 25% en la demanda del{' '}
          <span className="font-semibold text-blue-600 cursor-pointer hover:underline">Producto Y</span>. Acción: Aumentar producción.
        </>
      ),
      time: 'Hace 1 día',
    },
    {
      icon: LightBulbIcon,
      color: 'bg-blue-500',
      text: (
        <>
          Oportunidad de optimización de costos en la campaña de marketing "
          <span className="font-semibold text-blue-600 cursor-pointer hover:underline">Verano 2024</span>".
        </>
      ),
      time: 'Hace 3 días',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard de Rendimiento Empresarial</h1>

      {/* Contenedor flexible para los gráficos y tarjetas */}
      <div className="flex flex-wrap gap-6">
        {/* Componente del Gráfico de Rendimiento */}
        <PerformanceChart
          data={performanceData}
          title="Rendimiento de Negocio"
          currentValue="$450,231"
          change="Flujo de Ingresos Semanal ↑ +5.2%"
        />

        {/* Componente de la Tarjeta de Decisiones Estratégicas */}
        <DecisionCard decisions={strategicDecisions} />
      </div>

      {/* Sección adicional para cumplir con la métrica de Sostenibilidad del proyecto (parte del alcance) */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">Métricas de Sostenibilidad Operativa</h2>
        <p className="mt-2 text-gray-600">
          Progreso hacia el objetivo de operar con energía libre de carbono 24/7 para 2030: 
          <span className="font-bold text-green-700 ml-2">78% de la carga de cómputo gestionada con energía limpia.</span>
        </p>
      </div>
    </div>
  );
}