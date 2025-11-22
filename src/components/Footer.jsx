// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[var(--almond)]/60 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="inline-flex items-center gap-2 font-semibold">
            <span className="h-8 w-8 rounded-lg grid place-content-center bg-[var(--raisin)] text-[var(--color-sunray)]">ap</span>
            Arquitecta Pescara
          </div>
          <p className="mt-3 text-sm text-[var(--color-raisin)]/80">
            Caleta Olivia · Santa Cruz · Trabajos en ARG
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Estudio</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#proyectos" className="hover:underline">Proyectos</a></li>
            <li><a href="#contacto"  className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:underline" href="mailto:arquitectapescara@gmail.com">arquitectapescara@gmail.com</a></li>
            <li><a className="hover:underline" href="https://wa.me/5492974947505" target="_blank" rel="noreferrer">+54 9 2974 947505</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Redes</h4>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:underline" href="https://www.instagram.com/arquitecta_pescara/?igsh=MWt5YjBybDNkd3o1YQ%3D%3D#" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a className="hover:underline" href="https://www.facebook.com/profile.php?id=100070535161079" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a className="hover:underline" href="https://youtube.com/@arquitectapescara?si=P_h7I8HIqZ06lMDM" target="_blank" rel="noreferrer">Youtube</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-[var(--color-raisin)]/70 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Arquitecta Pescara. Todos los derechos reservados.</span>
          <span>Brand & Web • Estudio AP</span>
        </div>
      </div>
    </footer>
  );
}
