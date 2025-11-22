import { useState, useRef } from "react";


const projects = [
  {
    id: "proyecto-greenhouse",
    title: "Green House - Caleta Olivia",
    type: "Proyecto · Diseño Arquitectonico",
    location: "Santa Cruz, Caleta Olivia",
    images: [
      "https://i.imgur.com/QJbOj0x.jpeg",
      "https://i.imgur.com/8KlX0UT.jpeg",
      "https://i.imgur.com/93NbGKE.jpeg",
      "https://i.imgur.com/cUijnBZ.jpeg",
      "https://i.imgur.com/7ErulnI.jpeg",
      "https://i.imgur.com/nCQb3pH.jpeg"
    ],
    summary:
      "Optimización de luz y privacidad en un lote entre medianeras, con patios como articuladores térmicos y visuales.",
    longDescription:
      "Green House se desarrolla en un lote entre medianeras donde la estrategia principal es compatibilizar privacidad y apertura. La vivienda se articula a través de patios verdes que regulan luz, temperatura y ventilación, generando una relación continua entre interior y exterior. La envolvente sólida asegura resguardo, mientras que el interior propone espacios cálidos y naturalmente iluminados."
  },

  {
    id: "proyectos-lachicadelaestetica",
    title: "La Chica De La Estética",
    type: "Anteproyecto · Diseño Comercial",
    location: "Santa Cruz, Caleta Olivia",
    images: [
      "https://i.imgur.com/jO6velC.jpeg",
      "https://i.imgur.com/1hXs87x.jpeg",
      "https://i.imgur.com/ifQIH5F.jpeg",
      "https://i.imgur.com/w1SdsFa.jpeg",
      "https://i.imgur.com/Lcvspn9.jpeg",
      "https://i.imgur.com/PNxBBil.jpeg",
      "https://i.imgur.com/ZhBDwto.jpeg"
    ],
    summary:
      "Local comercial orientado a servicios de bienestar, con control lumínico, circulación clara y materialidad suave.",
    longDescription:
      "El proyecto define una identidad calmada y perceptualmente ligera para un local de servicios estéticos. La circulación lineal optimiza recorridos y reduce interferencias entre áreas de trabajo. La iluminación combina luz técnica puntual con baños lumínicos suaves para acompañar la experiencia del usuario y reforzar el carácter del espacio."
  },

  {
    id: "proyecto-ruben",
    title: "Proyecto Rubén",
    type: "Reforma · Anteproyecto",
    location: "Santa Cruz, Caleta Olivia",
    images: [
      "https://i.imgur.com/gsTmKYd.jpeg",
      "https://i.imgur.com/ZpNoCkp.jpeg",
      "https://i.imgur.com/ipuQzMD.jpeg",
      "https://i.imgur.com/nBk6min.jpeg",
      "https://i.imgur.com/XLyswJq.jpeg",
      "https://i.imgur.com/LxRxyDF.jpeg",
      "https://i.imgur.com/e34iwQC.jpeg",
      "https://i.imgur.com/YkBty1p.jpeg"
    ],
    summary:
      "Refuncionalización de PH para uso mixto, incorporando iluminación natural, ampliación de guardado y reorganización circulatoria.",
    longDescription:
      "La intervención reorganiza un PH existente para uso mixto, integrando trabajo remoto y vida doméstica. Se optimiza la iluminación natural, se amplían áreas de guardado y se redefine la circulación interna para lograr un uso más eficiente y contemporáneo del espacio."
  },

  {
    id: "proyecto-sparthenics",
    title: "Sparthenics Gym",
    type: "Diseño de interiores + Habilitación Comercial",
    location: "Santa Cruz - Caleta Olivia - Av Belgrano 26",
    images: [
      "https://i.imgur.com/ekTNVnf.jpeg",
      "https://i.imgur.com/kxhuxMv.jpeg",
      "https://i.imgur.com/1elVopb.jpeg",
      "https://i.imgur.com/GfdX8B9.jpeg",
      "https://i.imgur.com/7FoGLkH.jpeg",
      "https://i.imgur.com/eWSIa8S.jpeg"
    ],
    summary:
      "Espacio deportivo especializado en calistenia, con estructura metálica expuesta y zonificación funcional para entrenamiento.",
    longDescription:
      "Primer gimnasio de calistenia de la ciudad, diseñado a partir de una lectura estructural clara: barras, zonas de piso y áreas técnicas se organizan mediante una zonificación precisa. La iluminación puntual y el carácter material enfatizan la intensidad y el ritmo del entrenamiento."
  },

  {
    id: "proyectos-morales",
    title: "Proyecto Morales",
    type: "Anteproyecto · Diseño de Propiedad",
    location: "Santa Cruz, Caleta Olivia",
    images: [
      "https://i.imgur.com/oHIDo3Y.jpeg",
      "https://i.imgur.com/uXNElBS.jpeg",
      "https://i.imgur.com/rN8ngK0.jpeg",
      "https://i.imgur.com/5NtyJVW.jpeg",
      "https://i.imgur.com/91EJkx8.jpeg"
    ],
    summary:
      "Vivienda compacta con patios internos, superficies ventiladas y planteo geométrico racional.",
    longDescription:
      "Vivienda planteada a partir de patios internos que permiten ventilar, iluminar y articular espacialmente cada ambiente. La geometría simple y el control de vacíos generan eficiencia funcional y una lectura arquitectónica clara y ordenada."
  },

  {
    id: "proyecto-conection-house",
    title: "Conection House",
    type: "Anteproyecto · Diseño de Propiedad",
    location: "Santa Cruz, Caleta Olivia",
    images: [
      "https://i.imgur.com/ateKoub.jpeg",
      "https://i.imgur.com/uXNElBS.jpeg",
      "https://i.imgur.com/IlquPEy.jpeg",
      "https://i.imgur.com/rN8ngK0.jpeg",
      "https://i.imgur.com/5NtyJVW.jpeg",
      "https://i.imgur.com/91EJkx8.jpeg"
    ],
    summary: "Atardeceres únicos bañando cada espacio.",
    longDescription:
      "Conection House organiza su espacialidad para capturar luz rasante durante la tarde. La orientación y las aperturas generan un gradiente lumínico cálido, mientras que la continuidad interior–exterior refuerza la idea de una vivienda contemplativa y abierta al paisaje."
  }   
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  // NEW → estados de drag
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);



  const openProject = (project) => {
    setActiveProject(project);
    setPhotoIndex(0); // empezar siempre por la primera foto
  };

  const nextPhoto = () => {
    if (!activeProject) return;
    setPhotoIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    if (!activeProject) return;
    setPhotoIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };
    const startDrag = (clientX) => {
    dragStartX.current = clientX;
    setIsDragging(true);
  };

  const endDrag = (clientX) => {
    if (!isDragging) return;

    const deltaX = clientX - dragStartX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) nextPhoto();
      else prevPhoto();
    }

    setIsDragging(false);
  };

  const handleMouseDown = (e) => startDrag(e.clientX);
  const handleMouseMove = () => {};
  const handleMouseUp = (e) => endDrag(e.clientX);
  const handleMouseLeave = (e) => isDragging && endDrag(e.clientX);

  const handleTouchStart = (e) => startDrag(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    endDrag(touch.clientX);
  };


  return (
    <section id="proyectos" className="bg-[#f5ebdd] py-20 border-t border-[#e0d3c0]">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITULO */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2b2420] mb-2">
            Proyectos
          </h2>
          <p className="text-[#5a514a] text-sm md:text-base max-w-xl mx-auto">
            Una selección de proyectos recientes en vivienda, reformas e identidad comercial.
          </p>
        </div>


        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl bg-[#f7efe3] border border-[#e0d3c0] overflow-hidden shadow-sm hover:shadow-md transition hover:-translate-y-1"
            >
              {/* Portada */}
              <div className="relative h-56">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs uppercase opacity-90">{p.type}</p>
                  <h3 className="font-semibold">{p.title}</h3>
                </div>
              </div>

              {/* Texto Card */}
              <div className="p-5">
                <p className="text-xs text-[#8a7a6a] mb-1">{p.location}</p>
                <p className="text-sm text-[#5a514a] mb-4">{p.summary}</p>

                <button
                  onClick={() => openProject(p)}
                  className="text-xs underline underline-offset-4 text-[#2b2420] hover:opacity-70"
                >
                  Ver ficha completa
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
             onClick={(e) => e.target === e.currentTarget && setActiveProject(null)}
        >
          <div className="relative bg-[#f7efe3] border border-[#e0d3c0] rounded-2xl max-w-3xl w-full overflow-hidden shadow-xl">

            {/* Cerrar */}
            <button
              className="absolute top-3 right-3 text-xs text-[#5a514a] hover:opacity-70"
              onClick={() => setActiveProject(null)}
            >
              Cerrar ✕
            </button>

      {/* SLIDER con slide lateral, sombra y borde */}
      <div
        className={`relative h-72 md:h-96 overflow-hidden bg-black select-none rounded-xl border border-[#1e1a16] shadow-xl ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Contenedor que se desliza */}
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${photoIndex * 100}%)`,
          }}
        >
          {activeProject.images.map((img, i) => (
            <div
              key={i}
              className="min-w-full h-full flex items-center justify-center flex-shrink-0"
            >
              <img
                src={img}
                alt=""
                draggable="false"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Flecha izquierda */}
        <button
          onClick={prevPhoto}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/55 text-white text-3xl px-3 py-1 rounded-full backdrop-blur-sm transition"
        >
          ‹
        </button>

        {/* Flecha derecha */}
        <button
          onClick={nextPhoto}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/55 text-white text-3xl px-3 py-1 rounded-full backdrop-blur-sm transition"
        >
          ›
        </button>
      </div>

            {/* TEXTO FICHA */}
            <div className="p-6 space-y-3">
              <p className="text-xs uppercase tracking-wide text-[#8a7a6a]">
                {activeProject.type}
              </p>

              <h3 className="text-xl font-serif text-[#2b2420]">
                {activeProject.title}
              </h3>

              <p className="text-xs text-[#8a7a6a]">{activeProject.location}</p>

              <p className="text-sm text-[#5a514a]">
                {activeProject.longDescription}
              </p>

              <div className="pt-3">
                <a
                  href="#contacto"
                  className="bg-[#111] text-white px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition"
                  onClick={() => setActiveProject(null)}
                >
                  Pedir presupuesto para algo similar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}