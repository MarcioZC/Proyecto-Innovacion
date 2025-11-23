import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const services = [
    {
      icon: '📊',
      title: 'Dashboard',
      description: 'Visualiza métricas clave y el rendimiento de tus aplicaciones en un solo lugar.',
      color: 'text-blue-500',
      href: '/dashboard'
    },
    {
      icon: '🗄️',
      title: 'BigQuery',
      description: 'Analiza grandes volúmenes de datos rápidamente con nuestro almacén de datos sin servidor.',
      color: 'text-green-500',
      href: '/bigquery'
    },
    {
      icon: '🔍',
      title: 'AI Search',
      description: 'Implementa búsqueda de nivel de consumidor en tus aplicaciones con IA avanzada.',
      color: 'text-purple-500',
      href: '/ai-search'
    },
    {
      icon: '📱',
      title: 'Workspace',
      description: 'Colabora y desarrolla tus proyectos de IA en un entorno de trabajo integrado.',
      color: 'text-blue-500',
      href: '/workspace-auditoria'
    },
    {
      icon: '🧠',
      title: 'Vertex AI',
      description: 'Construye, despliega y escala modelos de machine learning con una plataforma unificada.',
      color: 'text-green-500',
      href: '/vertex-ai'
    },
    {
      icon: '📈',
      title: 'Monitoring',
      description: 'Supervisa el rendimiento, la disponibilidad y la salud de tus servicios en la nube.',
      color: 'text-purple-500',
      href: '/monitoring'
    },
    {
      icon: '💳',
      title: 'Billing',
      description: 'Gestiona tus costos y entiende tu gasto en la nube con herramientas de facturación.',
      color: 'text-blue-500',
      href: '/billing'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-10 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          {/* Diamante azul 🔷 */}
          <span className="text-3xl">🔷</span>
          <h2 className="text-lg font-bold text-gray-900">Plataforma IA Responsable</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Visión General IA
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Sobre Nosotros
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Contacto
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 py-20 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 max-w-3xl mb-10">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Fortalece tu Nube con IA Responsable
          </h1>
          <p className="text-lg text-gray-600">
            Desbloquea soluciones de IA potentes, escalables y éticas integradas perfectamente con Google Cloud Platform.
          </p>
          <div className="flex justify-center mt-4">
            <Link 
              href="/dashboard"
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
            >
              Explorar Plataforma
            </Link>
          </div>
        </div>

        {/* Hero Image - Gemini (Imagen Local) */}
        <div className="w-full max-w-5xl mt-10">
          <div className="w-full aspect-2/1 relative rounded-xl shadow-2xl overflow-hidden">
            <Image
              src="/imagenes/gemini.jpg"
              alt="Gemini AI Technology"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Sobre la plataforma</h2>
          <p className="text-base text-gray-600 max-w-2xl">
            Descubre los pilares centrales de nuestra plataforma, diseñados para la seguridad, escalabilidad y transparencia en cada aplicación de IA.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group flex flex-col gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <span className={`text-4xl ${service.color}`}>{service.icon}</span>
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-900 mb-2">{service.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-10 py-8 border-t border-gray-200 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">
              2025 Plataforma IA Responsable. Todos los derechos reservados.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600 font-medium">
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}