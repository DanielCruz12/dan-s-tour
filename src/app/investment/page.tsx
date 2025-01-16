"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function PartnerOrInvestPage() {
  const financialData = [
    { name: "Año 1", ingresos: 220000, gastos: 187000, beneficio: 33000 },
    { name: "Año 2", ingresos: 330000, gastos: 214500, beneficio: 115500 },
    { name: "Año 3", ingresos: 495000, gastos: 321750, beneficio: 173250 },
  ];

  const timelineData = [
    {
      name: "Mes 1-2",
      value: 2,
      description: "Investigación y planeación detallada",
    },
    {
      name: "Mes 3-6",
      value: 4,
      description: "Desarrollo de la plataforma MVP",
    },
    {
      name: "Mes 7-8",
      value: 2,
      description: "Pruebas beta con negocios seleccionados",
    },
    {
      name: "Mes 9",
      value: 1,
      description: "Lanzamiento oficial con campañas de marketing",
    },
  ];

  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4 py-12 ">
      <h2 className="text-xl md:text-4xl font-semibold mb-4">
        Sé un Socio o Invierte en Nuestra Plataforma
      </h2>

      <div className="pb-3">
        <h3 className="text-base font-semibold">Objetivo</h3>
        <p className="text-sm">
          Conectamos negocios locales con clientes nacionales mediante una
          plataforma que facilita la promoción y reserva de servicios
          turísticos, impulsando la economía local y mejorando la experiencia
          del cliente.
        </p>
      </div>

      <h3 className="text-sm font-medium mb-1">Problema Detectado</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Negocios locales enfrentan dificultades para promocionarse
          eficientemente en el mercado digital.
        </li>
        <li>
          Falta de una plataforma integral que concentre servicios turísticos y
          de ocio locales en un solo lugar.
        </li>
        <li>
          Clientes buscan opciones centralizadas para planificar actividades y
          obtener servicios.
        </li>
        <li>
          Baja visibilidad de negocios pequeños y medianos en el sector
          turístico.
        </li>
      </ul>

      <div className="py-3">
        <h3 className="text-sm font-medium mb-1">Solución Propuesta</h3>
        <p className="mb-4 text-sm">
          Una plataforma digital (web y app) donde negocios puedan registrarse y
          promocionar sus servicios.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-stretch items-center">
        <div className="text-start md:px-2">
          <h3 className="text-sm font-medium mb-1">Funciones clave</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Registro fácil de negocios con perfiles personalizables</li>
            <li>
              Opciones para reseñas y calificaciones de clientes para fomentar
              la confianza
            </li>
            <li>
              Reservas en línea y pagos integrados para una experiencia sin
              fricciones
            </li>
            <li>
              Sistema de recomendaciones personalizadas basado en preferencias
              del usuario
            </li>
            <li>
              Herramientas de análisis para que los negocios comprendan su
              rendimiento
            </li>
          </ul>
        </div>
        <div className="text-start pt-3 md:pt-0">
          <h3 className="text-sm font-medium mb-1">Modelo de Negocio</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Freemium Registro gratuito para negocios pequeños con funciones
              básicas
            </li>
            <li>
              Suscripción Premium Negocios pagan tarifas mensuales/anuales para
              funciones avanzadas
            </li>
            <li>
              Comisiones Ganancia por transacciones realizadas en la plataforma
            </li>
            <li>
              Publicidad Espacios de promoción pagados dentro de la plataforma
              para mayor visibilidad
            </li>
            <li>
              Servicios adicionales Oferta de servicios de fotografía, diseño y
              marketing digital
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-sm font-medium mb-1 pt-4 pb-2">
        Proyecciones Financieras
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={financialData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ingresos" fill="#8884d8" />
          <Bar dataKey="gastos" fill="#82ca9d" />
          <Bar dataKey="beneficio" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-6">
        <h4 className="font-semibold mb-2">
          Inversión Inicial: $100,000 - $120,000
        </h4>
        <p className="mb-4 text-sm">
          Incluye desarrollo de la plataforma, infraestructura, marketing
          inicial y operación por 6 meses.
        </p>
        <h4 className="font-semibold mb-2">Retorno de Inversión (ROI):</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Primera Etapa (1-2 años): Recuperación del 70-100% de la inversión.
          </li>
          <li>
            Segunda Etapa (3 años): Margen de ganancia proyectado del 30-50%
            anual.
          </li>
        </ul>
      </div>

      <h3 className="text-sm font-medium mb-1">Cronograma de Ejecución</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={timelineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-6">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-2">
            <span className="font-semibold">{item.name}:</span>{" "}
            {item.description}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center">
        <div>
          <h4 className="font-semibold mb-2 pt-3">Mercado Potencial:</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Crecimiento sostenido en el turismo local y la digitalización de
              negocios.
            </li>
            <li>
              Público objetivo amplio: turistas nacionales y extranjeros,
              familias, organizadores de eventos.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 pt-3">Escalabilidad:</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Expansión a más países o regiones.</li>
            <li>
              Introducción de nuevas categorías de servicios, como eventos
              corporativos o alquileres especializados.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 pt-3">Ventajas Competitivas:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Tecnología de punta con IA para recomendaciones personalizadas.
            </li>
            <li>
              Modelo de negocio flexible que se adapta a diferentes tamaños de
              empresas.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
