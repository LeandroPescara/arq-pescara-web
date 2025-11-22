

// src/components/CTA.jsx
export default function CTA() {
    const EMAIL = "arquitectapescara@gmail.com";
    const WHATS = "5492974947505";
  
    return (
      <section className="bg-[#262019] text-[#f7efe3] py-16 border-t border-[#3a3027]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">
            ¿Listo para dar vida a tu proyecto?
          </h2>
          <p className="text-sm md:text-base text-[#d7c8b6] mt-3">
            Contanos tu idea y diseñemos juntos el espacio que estás soñando.
          </p>
  
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATS}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-[var(--radius-soft)]
                         bg-[var(--color-sunray)] text-[var(--color-raisin)] font-semibold
                         hover:brightness-110 active:brightness-95 transition"
            >
              Escribir por WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="px-6 py-3 rounded-[var(--radius-soft)]
                         border border-white/30 font-semibold
                         hover:bg-white/10 active:bg-white/20 transition"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </section>
    );
  }
  