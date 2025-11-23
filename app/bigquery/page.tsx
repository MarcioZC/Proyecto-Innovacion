import React from 'react';
import {
  FolderOpenIcon,
  PlayIcon,
  PlusIcon,
  TableCellsIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ShareIcon,
  EllipsisVerticalIcon,
  // ¡CORRECCIÓN AQUÍ! Aseguramos que BoltIcon y StarIcon estén importados
  BoltIcon, 
} from '@heroicons/react/24/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid'; // Se importa la versión sólida

// Componente principal para la página de BigQuery
export default function BigQueryPage() {
  const projectId = 'project-id-12345'; // Usar el ID del proyecto definido
  
  // Resultados simulados de la consulta
  const queryResults = [
    { status: 'Shipped', order_count: 10500 },
    { status: 'Processing', order_count: 3200 },
    { status: 'Cancelled', order_count: 850 },
    { status: 'Returned', order_count: 430 },
  ];

  const queryCode = `SELECT
  status,
  COUNT(*) AS order_count
FROM
  \`${projectId}\`.sales_data.orders
GROUP BY
  status
ORDER BY
  order_count DESC;`;

  return (
    <div className="flex h-full min-h-[calc(100vh-64px)] bg-white">
      {/* Panel Izquierdo: Explorer */}
      <div className="w-64 border-r border-gray-200 p-4 pt-0 shrink-0 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 pt-4">Explorer</h2>
        
        {/* Pestañas: Starred y Project ID */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center text-blue-600 font-medium cursor-pointer">
            <SolidStarIcon className="w-4 h-4 mr-2 fill-blue-500" />
            Starred
          </div>
          
          <div className="text-gray-700">
            <div className="flex items-center font-semibold cursor-pointer py-1">
              <ChevronDownIcon className="w-3 h-3 mr-1" />
              <FolderOpenIcon className="w-4 h-4 mr-2" />
              {projectId}
            </div>
            
            {/* Datasets */}
            <div className="ml-5 mt-1 space-y-1">
              <div className="flex items-center cursor-pointer text-gray-600 hover:text-gray-900">
                <FolderOpenIcon className="w-4 h-4 mr-2 text-yellow-600" />
                sales_data
              </div>
              <div className="flex items-center cursor-pointer text-gray-600 hover:text-gray-900">
                <FolderOpenIcon className="w-4 h-4 mr-2 text-yellow-600" />
                marketing_analytics
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Panel Derecho: Editor de Consultas y Resultados */}
      <div className="flex-1 flex flex-col p-4 bg-white">
        
        {/* Pestañas del Editor */}
        <div className="flex border-b border-gray-300 text-sm">
          <div className="flex items-center bg-white p-2 border-t border-r border-l rounded-t-lg font-medium text-gray-700">
            <DocumentTextIcon className="w-4 h-4 mr-1" />
            Untitled
          </div>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
        
        {/* Editor de Consultas y Acciones */}
        <div className="flex flex-col grow min-h-0">
          <div className="bg-gray-100 p-3 flex justify-between items-center border-b border-gray-300">
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              <PlayIcon className="w-4 h-4 mr-2" /> Run
            </button>
            <div className="flex space-x-2 text-gray-600">
              <button className="p-2 hover:bg-gray-200 rounded-lg"><CodeBracketIcon className="w-5 h-5" /></button>
              <button className="p-2 hover:bg-gray-200 rounded-lg"><ShareIcon className="w-5 h-5" /></button>
              <button className="p-2 hover:bg-gray-200 rounded-lg"><EllipsisVerticalIcon className="w-5 h-5" /></button>
            </div>
          </div>
          
          {/* Área del Código SQL */}
          <div className="relative grow bg-gray-900 p-4 text-white font-mono text-sm overflow-auto">
            <pre className="whitespace-pre-wrap">{queryCode}</pre>
            
            {/* INTEGRACIÓN CLAVE DE INNOVACIÓN: Powered by Gemini */}
            <div className="absolute bottom-2 right-4 flex items-center text-xs font-bold text-purple-400 bg-purple-900/50 px-3 py-1 rounded-full shadow-lg">
                <BoltIcon className="w-3 h-3 mr-1" /> Powered by Gemini
            </div>
          </div>
          
          {/* Resultados y Job Information */}
          <div className="h-64 border-t border-gray-300 overflow-y-auto mt-4 shrink-0">
            {/* Pestañas de Resultados */}
            <div className="flex border-b text-sm font-medium text-gray-600">
              <div className="p-2 border-b-2 border-blue-600 text-blue-600 cursor-pointer">Results</div>
              <div className="p-2 cursor-pointer hover:text-gray-800">Job Information</div>
            </div>

            {/* Tabla de Resultados */}
            <table className="w-full text-left text-sm mt-2">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-2">status</th>
                  <th scope="col" className="px-4 py-2">order_count</th>
                </tr>
              </thead>
              <tbody>
                {queryResults.map((row, index) => (
                  <tr key={index} className="bg-white border-b hover:bg-gray-100">
                    <td className="px-4 py-2 font-medium text-gray-900">{row.status}</td>
                    <td className="px-4 py-2">{row.order_count.toLocaleString('en-US')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <p className="text-xs text-gray-500 mt-2 px-4">Query complete (1.2 sec elapsed, 15.3 GB processed)</p>
          </div>
        </div>
      </div>
    </div>
  );
}