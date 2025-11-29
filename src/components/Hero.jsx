export default function Hero() {
  return (
<section
  id="inicio"
  className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('https://i.imgur.com/CnZRvJ3.jpeg')" }}
>
    {/* Capa oscura suave */}
  <div className="absolute inset-0 bg-black/30" />

  
  <div className="relative z-10 text-center text-white px-6">
    <h1 className="font-sans font-light text-6xl md:text-7xl tracking-tight">
      Arquitecta Pescara
    </h1>

    <p className="text-lg md:text-xl mb-8 opacity-90">
      Espacios que inspiran, arquitectura con propósito.
    </p>

    <div className="flex gap-4 justify-center">
      <a
        href="#proyectos"
        className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:brightness-110 transition">
        Ver proyectos
      </a>

      <a
        href="#contacto"
        className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
      >
        Contacto
      </a>
    </div>
  </div>
</section>

  );
}
