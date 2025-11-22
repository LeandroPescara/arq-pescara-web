// src/components/Header.jsx
import { useEffect, useMemo, useState } from "react";

const links = [
  { href: "#inicio",     label: "Inicio" },      // <-- nuevo
  { href: "#servicios",  label: "Servicios" },
  { href: "#proyectos",  label: "Proyectos" },
  { href: "#contacto",   label: "Contacto"  },
];


export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // lista de ids sin "#"
  const sectionIds = useMemo(() => links.map(l => l.href.slice(1)), []);

  // --- Scrollspy con IntersectionObserver
  useEffect(() => {
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    // margen superior para compensar el header sticky (~64-80px)
    const headerH = document.querySelector("header")?.offsetHeight ?? 64;

    const obs = new IntersectionObserver(
      (entries) => {
        // el que tenga mayor intersección y esté entrando al viewport gana
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          const hash = `#${visible.target.id}`;
          if (hash !== active) setActive(hash);
        }
      },
      {
        // dispará cuando el top de la sección está ~debajo del header
        root: null,
        rootMargin: `-${headerH + 8}px 0px -60% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, [sectionIds, active]);

  // Mantener activo al navegar por hash (atrás/adelante o click)
  useEffect(() => {
    const setFromHash = () => setActive(window.location.hash || "");
    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  // ESC + bloqueo de scroll para el menú móvil
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const linkCls = (href) =>
    `hover:opacity-80 transition ${
      active === href ? "underline underline-offset-4 text-[var(--color-sunray)]" : ""
    }`;

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16
                   flex items-center justify-between rounded-b-2xl
                   backdrop-blur bg-[color-mix(in oklab,var(--color-almond) 85%,transparent)]
                   border-b border-black/5"
        aria-label="Primary"
      >
        <a href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl grid place-content-center font-bold
                          text-[var(--color-sunray)] bg-[var(--color-raisin)]">ap</div>
          <span className="font-semibold tracking-tight">Arquitecta Pescara</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkCls(l.href)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contacto"
               className="px-5 py-2 rounded-xl bg-[var(--color-raisin)]
                          text-[var(--color-almond)] hover:opacity-90 transition">
              Escribinos
            </a>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl
                     border px-3 py-2 text-sm"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Abrir menú</span> ☰
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition
                    ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity
                      ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={`absolute top-0 right-0 h-full w-[78%] max-w-xs
                      bg-[var(--color-almond)] text-[var(--color-raisin)]
                      border-l border-black/10 shadow-[var(--shadow-soft)]
                      transition-transform duration-300
                      ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-16 flex items-center justify-between px-4 border-b border-black/10">
            <span className="font-semibold">Menú</span>
            <button className="rounded-xl border px-3 py-2 text-sm" onClick={() => setOpen(false)}>
              <span className="sr-only">Cerrar</span> ✕
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`block px-3 py-2 rounded-lg hover:bg-black/5 ${linkCls(l.href)}`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contacto"
                  className="block text-center px-4 py-3 rounded-[var(--radius-soft)]
                             bg-[var(--color-sunray)] text-[var(--color-raisin)]
                             font-semibold hover:brightness-105 transition"
                  onClick={() => setOpen(false)}
                >
                  Escribinos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
