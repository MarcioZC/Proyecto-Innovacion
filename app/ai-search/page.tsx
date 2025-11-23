'use client';

import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface ArticleCard {
  title: string;
  source: string;
}

interface SearchResult {
  title: string;
  url: string;
  source: string;
  date?: string;
  description: string;
}

const overviewArticles: ArticleCard[] = [
  {
    title: 'How inflation is squeezing tech startups',
    source: 'reuters.com',
  },
  {
    title: 'The impact of inflation on the tech industry',
    source: 'forbes.com',
  },
  {
    title: 'VCs are getting picky as inflation hits',
    source: 'techcrunch.com',
  },
];

const searchResults: SearchResult[] = [
  {
    title: 'How inflation is squeezing tech startups - Reuters',
    url: 'https://www.reuters.com',
    source: 'Reuters',
    date: 'Oct 26, 2023',
    description:
      'High inflation and rising interest rates están creando un entorno difícil para startups tecnológicas, que se ven obligadas a recortar costos y replantear sus estrategias.',
  },
  {
    title: 'The impact of inflation on the tech industry and how to navigate it',
    url: 'https://www.forbes.com',
    source: 'Forbes',
    description:
      'El aumento de los costos operativos y los cambios en el comportamiento del consumidor exigen que las empresas tecnológicas ajusten precios, márgenes y prioridades de inversión.',
  },
  {
    title: 'VCs are getting picky as inflation hits startups hard',
    url: 'https://www.techcrunch.com',
    source: 'TechCrunch',
    description:
      'El capital de riesgo se está volviendo más selectivo; con mayores tasas de interés, los inversionistas favorecen startups con modelos de negocio sólidos y burn rate controlado.',
  },
];

export default function InflationSearchMockPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Barra superior */}
      <header className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-xs">
              G
            </div>
            <span className="text-sm text-gray-700 hidden sm:inline">
              Search
            </span>
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 mr-3" />
              <input
                className="flex-1 bg-transparent outline-none text-sm"
                defaultValue="¿Cómo afecta la inflación a las startups tecnológicas?"
              />
            </div>
          </div>

        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-5xl mx-auto px-4 pt-4 pb-12">
        <p className="text-xs text-gray-500 mb-3">
          About 1,230,000 results (0.42 seconds)
        </p>

        {/* AI Overview */}
        <section className="border border-gray-200 rounded-xl mb-6 shadow-sm overflow-hidden">
          <div className="border-b border-gray-100 px-4 py-2 flex items-center space-x-3 bg-gray-50">
            <span className="text-xs font-semibold text-gray-800">
              AI Overview
            </span>
            <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 border border-gray-300 rounded-full text-gray-600">
              Experimental
            </span>
          </div>

          <div className="px-4 pt-3 pb-4 space-y-3">
            <p className="text-sm text-gray-800 leading-relaxed">
              La inflación afecta a las startups tecnológicas de varias maneras:
              incrementa los costos operativos, encarece el financiamiento y
              presiona los márgenes de beneficio. Los inversionistas se vuelven
              más cautelosos y suelen exigir modelos de negocio más sólidos y
              valoraciones más bajas. Al mismo tiempo, la menor capacidad de
              gasto de los consumidores reduce la demanda de productos no
              esenciales, aunque también se abren oportunidades para soluciones
              que ayuden a empresas a optimizar costos y automatizar procesos.
            </p>

            {/* Carrusel de artículos */}
            <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
              {overviewArticles.map((article) => (
                <div
                  key={article.title}
                  className="min-w-[180px] max-w-[220px] border border-gray-200 rounded-lg px-3 py-2 bg-white hover:bg-gray-50 cursor-pointer transition"
                >
                  <p className="text-[11px] text-blue-700 truncate mb-1">
                    {article.source}
                  </p>
                  <p className="text-xs font-medium text-gray-900 line-clamp-2">
                    {article.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resultados individuales */}
        <section className="space-y-6">
          {searchResults.map((result) => (
            <article key={result.title} className="space-y-1">
              <div className="flex items-center text-xs text-gray-600 space-x-1">
                <span className="inline-block w-4 h-4 bg-blue-500 rounded-sm" />
                <span>{result.url.replace('https://', '')}</span>
              </div>

              <a
                href={result.url}
                className="text-[#1a0dab] text-lg leading-snug hover:underline"
              >
                {result.title}
              </a>

              <p className="text-xs text-gray-500">
                {result.source}
                {result.date ? ` • ${result.date}` : null}
              </p>

              <p className="text-sm text-gray-700 max-w-2xl">
                {result.description}
              </p>
            </article>
          ))}

          {/* Paginación simple como en Google */}
          <div className="flex items-center justify-center space-x-2 pt-4 text-sm text-blue-700">
            <button className="px-2 py-1 rounded hover:bg-gray-100">
              &lt;
            </button>
            <span className="px-2 py-1 rounded-full bg-blue-600 text-white">
              1
            </span>
            <button className="px-2 py-1 rounded hover:bg-gray-100">2</button>
            <button className="px-2 py-1 rounded hover:bg-gray-100">3</button>
            <span className="px-2 py-1 text-gray-500">...</span>
            <button className="px-2 py-1 rounded hover:bg-gray-100">10</button>
            <button className="px-2 py-1 rounded hover:bg-gray-100">
              &gt;
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
