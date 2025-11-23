import React from 'react';
import { BoltIcon, ExclamationTriangleIcon, ChartBarIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

interface Decision {
  icon: React.ElementType;
  color: string;
  text: React.ReactNode;
  time: string;
}

interface DecisionCardProps {
  decisions: Decision[];
}

const DecisionCard: React.FC<DecisionCardProps> = ({ decisions }) => {
  return (
    // Estilo de tarjeta de Google Material Design
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-shadow hover:shadow-xl flex-1 min-w-[300px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-semibold text-gray-800">Decisiones Estratégicas en Tiempo Real</h3>
        {/* Badge de Gemini para enfatizar la IA */}
        <div className="flex items-center text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
          <BoltIcon className="w-3 h-3 mr-1" /> Powered by Gemini
        </div>
      </div>

      {/* Lista de Decisiones */}
      <div className="space-y-6 mb-6">
        {decisions.map((decision, index) => (
          <div key={index} className="flex items-start">
            {/* Icono de color */}
            <div className={`p-2 rounded-full ${decision.color} mr-3 shrink-0 mt-0.5`}>
              <decision.icon className="w-5 h-5 text-white" />
            </div>
            {/* Contenido de la Decisión */}
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">{decision.text}</p>
              <p className="text-xs text-gray-500 mt-1">{decision.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón de Ética y Sesgo (Flotante en la maqueta, aquí lo ponemos abajo y centrado) */}
      <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center shadow-md">
        <ShieldCheckIcon className="w-5 h-5 mr-2" /> Ver Parámetros de Ética y Sesgo
      </button>
    </div>
  );
};

export default DecisionCard;