import React from 'react';
import { BookOpenIcon, PlusIcon, BoltIcon, CheckCircleIcon, RocketLaunchIcon, ExclamationCircleIcon, ChartBarIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid'; // Icono sólido para destacar

// 1. Definición de tipos de TypeScript para la tabla de modelos
interface Model {
  name: string;
  version: string;
  status: 'Deployed' | 'Training' | 'Archived' | 'Failed';
  lastModified: string;
}

// 2. Datos de ejemplo para el Registro de Modelos (simulando una llamada a BigQuery/Backend)
const models: Model[] = [
  { name: 'SupplyChain-Risk-v3', version: '3.1.0', status: 'Deployed', lastModified: 'Hace 2 horas' },
  { name: 'DemandForecast-Q4', version: '1.2.5', status: 'Training', lastModified: 'Hace 1 día' },
  { name: 'Marketing-Optimizer-24', version: '2.0.1', status: 'Archived', lastModified: 'Hace 3 días' },
];

// Función auxiliar para el estilo del estado
const getStatusClasses = (status: Model['status']) => {
  switch (status) {
    case 'Deployed':
      return 'bg-green-100 text-green-800 border-green-300';
    case 'Training':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'Archived':
      return 'bg-gray-200 text-gray-700 border-gray-300';
    case 'Failed':
      return 'bg-red-100 text-red-800 border-red-300';
  }
};

// Componente para la barra de progreso (reutilizable)
const ProgressBar = ({ label, current, total, color, unit }: { label: string, current: number, total: number, color: string, unit: string }) => {
  const percentage = (current / total) * 100;
  return (
    <div>
      <p className="text-sm text-gray-700 mb-1">
        {label} 
        <span className="float-right text-xs font-semibold">{current}{unit} / {total}{unit}</span>
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};


export default function VertexAIPage() {
  return (
    <div className="space-y-8 p-0">
      
      {/* 1. Encabezado de la Página */}
      <div className="flex justify-between items-center pb-2">
        <div className="space-y-1">
            <h1 className="text-3xl font-bold text-gray-900">Vertex AI</h1>
            <p className="text-gray-500">Plataforma unificada para ML e IA Responsable</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-150">
            <BookOpenIcon className="w-5 h-5 mr-2" />
            Documentación
          </button>
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 shadow-md">
            <PlusIcon className="w-5 h-5 mr-2" />
            Nuevo Pipeline
          </button>
        </div>
      </div>

      {/* 2. Contenedores Principales (Modelos, Pipelines, Toolkits, Recursos) */}
      {/* Utilizamos la estructura de grid para replicar el layout de la imagen */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Principal - 2/3 del ancho en LG */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Panel de Registro de Modelos (Model Registry) */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Registro de Modelos</h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Ver Todos los Modelos</button>
            </div>
            
            {/* Tabla de Modelos */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre del Modelo</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Versión</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última Modificación</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {models.map((model) => (
                    <tr key={model.name} className="hover:bg-gray-50 transition duration-100">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-blue-600 cursor-pointer hover:underline">{model.name}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{model.version}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusClasses(model.status)}`}>
                          {model.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{model.lastModified}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Panel de Pipelines Activos */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pipelines Activos</h3>
            <div className="space-y-4">
              
              {/* Data Ingestion Pipeline (Completado) */}
              <div className="flex items-center p-3 bg-green-50/50 rounded-lg border border-green-100">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Data Ingestion Pipeline</p>
                  <p className="text-xs text-green-600 font-medium">Completado exitosamente</p>
                </div>
                <p className="ml-auto text-xs text-gray-500">hace 2m</p>
              </div>

              {/* Model Retraining Job (En Progreso) */}
              <div className="flex items-start p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                <RocketLaunchIcon className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Model Retraining Job</p>
                  <p className="text-xs text-blue-600 mb-1">Running - 75% completado</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <p className="ml-auto text-xs text-gray-500 hidden sm:block mt-1">En progreso</p>
              </div>

              {/* Batch Prediction Endpoint (Fallido) */}
              <div className="flex items-start p-3 bg-red-50/50 rounded-lg border border-red-100">
                <ExclamationCircleIcon className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Batch Prediction Endpoint</p>
                  <p className="text-xs text-red-600 font-medium">Falló - Límite de recurso excedido</p>
                </div>
                <p className="ml-auto text-xs text-gray-500">hace 1h</p>
              </div>

            </div>
          </div>
        </div>

        {/* Columna Derecha - 1/3 del ancho en LG */}
        <div className="lg:col-span-1 space-y-6">

          {/* Panel de Toolkit de IA Responsable */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <SparklesIcon className="w-5 h-5 text-purple-600 mr-2" />
                Toolkit de IA Responsable
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <ChartBarIcon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                Model Fairness & Bias
              </div>
              <div className="flex items-center text-gray-700">
                <BoltIcon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                Explainability Reports
              </div>
              <div className="flex items-center text-gray-700">
                <CpuChipIcon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                Data Validation
              </div>
            </div>
          </div>

          {/* Panel de Utilización de Recursos */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Utilización de Recursos</h3>
            <div className="space-y-4">
              {/* Utilizamos el componente ProgressBar para las métricas */}
              <ProgressBar label="GPU Instances" current={6} total={8} color="bg-blue-500" unit="" />
              <ProgressBar label="Notebook Runtimes" current={3} total={10} color="bg-green-500" unit="" />
              
              {/* Endpoint Predictions (barra especial) */}
              <div>
                <p className="text-sm text-gray-700 mb-1">
                  Endpoint Predictions 
                  <span className="float-right text-xs font-semibold">1.2M / 2M (por hr)</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
      
      {/* Botón de Crear Recurso (parte inferior izquierda de la imagen) */}
      <button className="fixed bottom-4 left-4 flex items-center justify-center bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition duration-150 transform hover:scale-105 lg:static lg:w-full lg:rounded-lg lg:p-4 lg:mt-6">
            <PlusIcon className="w-6 h-6 lg:w-5 lg:h-5 mr-0 lg:mr-2" />
            <span className="hidden lg:block">Crear Recurso</span>
      </button>

      {/* Footer / Enlace de Ayuda (parte inferior izquierda de la imagen) */}
      <div className="fixed bottom-4 left-4 hidden lg:block">
        <div className="flex items-center text-gray-500 space-x-4">
            <div className="flex items-center">
                <CpuChipIcon className="w-5 h-5 mr-2" />
                <span>Settings</span>
            </div>
            <div className="flex items-center">
                <BookOpenIcon className="w-5 h-5 mr-2" />
                <span>Help</span>
            </div>
        </div>
      </div>

    </div>
  );
}