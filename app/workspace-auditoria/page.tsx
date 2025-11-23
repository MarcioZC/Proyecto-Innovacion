'use client';

import React from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export default function Q3ProjectionsMock() {
  return (
    <div className="min-h-screen bg-[#eef3f9] flex flex-col">
      {/* Header */}
      <header className="h-14 bg-white border-b flex items-center px-4 space-x-3 shadow-sm">
        <DocumentTextIcon className="w-6 h-6 text-blue-700" />
        <h1 className="font-medium text-gray-800">Q3 Financial Projections - CONFIDENTIAL</h1>

        <div className="flex-1" />

        <button className="text-gray-600 text-sm hover:underline mr-4">Comments</button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded">
          Share
        </button>
        
      </header>

      {/* Layout principal */}
      <div className="flex flex-1 p-6 gap-6">
        {/* Documento */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-3xl">
            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mb-4">
              My Drive / Projects / <span className="text-gray-700 font-medium">Q3 Financial Projections</span>
            </p>

            <h1 className="text-3xl font-bold mb-6">Q3 Financial Projections</h1>

            <p className="text-gray-800 leading-7 mb-4">
              This document contains sensitive financial data and personal identifiable information (PII),
              including projections for client accounts like{' '}
              <span className="bg-yellow-200 font-medium px-1">Maria Rodriguez (Acct# 987-654)</span>{' '}
              and{' '}
              <span className="bg-yellow-200 font-medium px-1">John Doe (Acct# 123-456)</span>.
              Please ensure all data handling complies with our internal Responsible AI framework before sharing or
              distributing. Unauthorized access is strictly prohibited.
            </p>

            <p className="text-gray-800 leading-7 mb-4">
              Projected revenue for the third quarter is estimated at $2.5 million, a 15% increase from Q2.
              Key drivers include the successful launch of Project Phoenix and expansion into the EMEA market.
              However, operating costs are also expected to rise by 8%, primarily due to increased R&D spending and
              new hires.
            </p>

            <p className="text-gray-800 leading-7">
              A detailed breakdown of departmental budgets will be circulated by EOD.
              All team leads are required to review and provide feedback within 48 hours.
              Please treat this information as strictly confidential.
            </p>
          </div>
        </div>

        {/* Panel derecho */}
        <div className="w-80 bg-white rounded-xl shadow-xl p-5 h-fit sticky top-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Gemini</h2>

          {/* State Badge */}
          <div className="flex items-center mb-5">
            <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-300">
              Modelo Aprobado - Marco de IA Confiable
            </span>
          </div>

          {/* Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-lg py-2 hover:bg-gray-200">
              Verificar datos de fuente
            </button>

            <button className="w-full bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-lg py-2 hover:bg-gray-200">
              Reescribir con tono ético
            </button>

            <button className="w-full text-center text-blue-700 underline text-sm">
              Generar Reporte de Sostenibilidad
            </button>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-500 text-center">
              Select an action or ask me a question to get started with Responsible AI analysis.
            </p>
          </div>

          {/* Footer input */}
          <div className="mt-6">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Ask a follow-up question…"
                className="flex-1 bg-transparent text-sm outline-none text-gray-700"
              />
              <button className="text-gray-600 font-medium">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
