// src/components/Header.jsx
import logoDark from "../assets/ap-logo.png";        // logo normal
import logoLight from "../assets/ap-logo-claro.png"; // logo claro
import { useEffect, useMemo, useState } from "react";

const links = [
  { href: "#inicio",     label: "Inicio" },
  { href: "#servicios",  label: "Servicios" },
  { href: "#proyectos",  label: "Proyectos" },
  { href: "#contacto",   label: "Escribinos" },   // <--- cambiado
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(() => links.map(l => l.href.slice(1)), []);

  // Scrollspy
  useEffect(() => {
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const headerH = document.querySelector("header")?.offsetHeight ?? 64;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          const hash = `#${visible.target.id}`;
          if (hash !== active) setActive(hash);
        }
      },
      {
        root: null,
        rootMargin: `-${headerH + 8}px 0px -60% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, [sectionIds, active]);

  // Hash
  useEffect(() => {
    const setFromHash = () => setActive(window.location.hash || "");
    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  // Esc + lock scroll mobile
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Detectar scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero vs resto
  const heroMode = active === "#inicio" || (!active && !scrolled);

  // Link styles
  const linkCls = (href) =>
    `hover:opacity-80 transition ${
      active === href
        ? "underline underline-offset-4 text-[var(--color-sunray)]"
        : ""
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16
          flex items-center justify-between rounded-b-2xl
          border-b border-black/5
          transition-all duration-300

          ${
            heroMode
              ? "bg-black/25 text-white backdrop-blur-sm shadow-none"
              : "bg-transparent text-[#1f1611] backdrop-blur-sm shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
          }
        `}
        aria-label="Primary"
      >
        {/* LOGO dinámico */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={heroMode ? logoLight : logoDark}
            alt="Arquitecta Pescara"
            className="h-12 w-auto object-contain transition-all duration-300"
          />
          <span className="text-sm font-medium tracking-wide">
            Arquitecta Pescara
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkCls(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
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

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition
                    ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Fondo */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity
                      ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        
        {/* Panel */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={`absolute top-0 right-0 h-full w-[78%] max-w-xs
                      bg-[var(--color-almond)] text-[var(--color-raisin)]
                      border-l border-black/10 shadow-xl
                      transition-transform duration-300
                      ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-16 flex items-center justify-between px-4 border-b border-black/10">
            <span className="font-semibold">Menú</span>
            <button
              className="rounded-xl border px-3 py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`block px-3 py-2 rounded-lg hover:bg-black/5 ${linkCls(
                      l.href
                    )}`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}