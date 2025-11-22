// src/components/Services.jsx

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-[#f5ebdd] py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2b2420] mb-3">
            Servicios
          </h2>
          <p className="text-sm md:text-base text-[#5a514a] max-w-2xl mx-auto">
            Acompañamos cada proyecto desde la primera idea hasta la obra,
            con distintos niveles de alcance según lo que el cliente necesita.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          {/* Tarjeta 1 — Anteproyecto */}
          <article className="rounded-2xl bg-[#f7efe3] border border-[#e0d3c0] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition flex flex-col">
            <h3 className="text-lg font-semibold text-[#2b2420] mb-1">
              Anteproyecto
            </h3>
            <p className="text-sm text-[#5a514a] mb-4">
              La idea madre del proyecto. El rumbo claro antes de avanzar.
            </p>
            <h4 className="text-xs font-semibold tracking-wide text-[#8a7a6a] uppercase mb-2">
              Incluye
            </h4>
            <ul className="text-sm text-[#5a514a] space-y-1 mb-6 list-disc list-inside">
              <li>Relevamiento y diagnóstico inicial</li>
              <li>Programa arquitectónico</li>
              <li>Plantas preliminares</li>
              <li>Estudios de uso y circulaciones</li>
              <li>Volumetría / Primera imagen objetivo</li>
              <li>Reuniones de ajuste</li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-auto pt-2">
              <a
                href="#contacto"
                className="bg-[#111111] text-white px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition"
              >
                Pedir presupuesto
              </a>
              <a
                href="#proyectos"
                className="text-sm text-[#2b2420] underline underline-offset-4 hover:opacity-80"
              >
                Ver trabajos
              </a>
            </div>
          </article>

          {/* Tarjeta 2 — Proyecto Arquitectónico */}
          <article className="rounded-2xl bg-[#f7efe3] border border-[#e0d3c0] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition flex flex-col">
            <h3 className="text-lg font-semibold text-[#2b2420] mb-1">
              Proyecto Arquitectónico (Carpeta Técnica)
            </h3>
            <p className="text-sm text-[#5a514a] mb-4">
              La documentación completa para aprobar y construir sin improvisar.
            </p>
            <h4 className="text-xs font-semibold tracking-wide text-[#8a7a6a] uppercase mb-2">
              Incluye
            </h4>
            <ul className="text-sm text-[#5a514a] space-y-1 mb-6 list-disc list-inside">
              <li>Planos municipales</li>
              <li>Planos de arquitectura definitivos</li>
              <li>Carpeta técnica y cómputos</li>
              <li>Detalles y especificaciones</li>
              <li>Coordinación de instalaciones</li>
              <li>Archivo digital organizado</li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-auto pt-2">
              <a
                href="#contacto"
                className="bg-[#111111] text-white px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition"
              >
                Pedir presupuesto
              </a>
              <a
                href="#proyectos"
                className="text-sm text-[#2b2420] underline underline-offset-4 hover:opacity-80"
              >
                Ver trabajos
              </a>
            </div>
          </article>

          {/* Tarjeta 3 — Diseño Interior Locales Comerciales */}
          <article className="rounded-2xl bg-[#f7efe3] border border-[#e0d3c0] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition flex flex-col">
            <h3 className="text-lg font-semibold text-[#2b2420] mb-1">
              Diseño Interior de Locales Comerciales
            </h3>
            <p className="text-sm text-[#5a514a] mb-4">
              Identidad, estrategia y atmósfera. Un local que vende y emociona.
            </p>
            <h4 className="text-xs font-semibold tracking-wide text-[#8a7a6a] uppercase mb-2">
              Incluye
            </h4>
            <ul className="text-sm text-[#5a514a] space-y-1 mb-6 list-disc list-inside">
              <li>Layout funcional</li>
              <li>Moodboard + concepto de marca</li>
              <li>Render/collage de ambientación</li>
              <li>Propuesta de iluminación</li>
              <li>Mobiliario (detalle o modular)</li>
              <li>Planimetría lista para ejecutar</li>
              <li>Señalética base</li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-auto pt-2">
              <a
                href="#contacto"
                className="bg-[#111111] text-white px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition"
              >
                Pedir presupuesto
              </a>
              <a
                href="#proyectos"
                className="text-sm text-[#2b2420] underline underline-offset-4 hover:opacity-80"
              >
                Ver trabajos
              </a>
            </div>
          </article>

          {/* Tarjeta 4 — Acompañamiento Técnico de Obra */}
          <article className="rounded-2xl bg-[#f7efe3] border border-[#e0d3c0] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition flex flex-col">
            <h3 className="text-lg font-semibold text-[#2b2420] mb-1">
              Acompañamiento Técnico de Obra (opcional)
            </h3>
            <p className="text-sm text-[#5a514a] mb-4">
              Supervisión puntual. Decisiones claras durante la ejecución.
            </p>
            <h4 className="text-xs font-semibold tracking-wide text-[#8a7a6a] uppercase mb-2">
              Incluye
            </h4>
            <ul className="text-sm text-[#5a514a] space-y-1 mb-6 list-disc list-inside">
              <li>Visitas programadas</li>
              <li>Informes de avances</li>
              <li>Resolución de detalles</li>
              <li>Validación técnica</li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-auto pt-2">
              <a
                href="#contacto"
                className="bg-[#111111] text-white px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition"
              >
                Consultar disponibilidad
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
