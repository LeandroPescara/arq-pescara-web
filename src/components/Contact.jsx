// src/components/Contact.jsx
import { useState } from "react";

const EMAIL = "arquitectapescara@gmail.com";
const WHATS = "5492974947505"; // con código de país, sin '+'

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const buildMsg = () =>
    `Hola, soy ${form.nombre || "(sin nombre)"}.\n` +
    `Mi correo: ${form.email || "(sin email)"}\n\n` +
    `Consulta:\n${form.mensaje || "(sin mensaje)"}`;

  const sendWhatsApp = () => {
    const txt = encodeURIComponent(buildMsg());
    window.open(`https://wa.me/${WHATS}?text=${txt}`, "_blank");
  };

  const sendEmail = () => {
    const subject = encodeURIComponent("Consulta desde la web — Arquitecta Pescara");
    const body = encodeURIComponent(buildMsg());
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="bg-[#f5ebdd] py-20 border-t border-[#e0d3c0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 items-start">
        {/* Columna izquierda: texto y datos */}
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--color-raisin)]">
            Pongámonos en contacto
          </h2>
          <p className="mt-3 text-[var(--color-raisin)]/80">
            Contame tu proyecto y coordinamos una visita o videollamada.
          </p>
          <div className="mt-6 text-sm text-[var(--color-raisin)]/70 space-y-1">
            <p>
              Email:{" "}
              <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <p>
              WhatsApp:{" "}
              <a className="underline" href={`https://wa.me/${WHATS}`} target="_blank" rel="noreferrer">
                +{WHATS}
              </a>
            </p>
            <p>Caleta Olivia · Patagonia · Argentina</p>
          </div>
        </div>

        {/* Columna derecha: formulario liviano (sin submit nativo) */}
        <div className="md:col-span-2">
          <form className="grid gap-3 max-w-xl" onSubmit={(e) => e.preventDefault()}>
            <input
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={onChange}
              required
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-sunray)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              required
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-sunray)]"
            />
            <textarea
              name="mensaje"
              rows={4}
              placeholder="Mensaje"
              value={form.mensaje}
              onChange={onChange}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-sunray)] resize-none"
            />

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                type="button"
                onClick={sendWhatsApp}
                className="flex-1 px-5 py-3 rounded-[var(--radius-soft)]
                           bg-[var(--color-sunray)] text-[var(--color-raisin)] font-semibold
                           hover:brightness-110 active:brightness-95 transition"
              >
                Escribir por WhatsApp
              </button>
              <button
                type="button"
                onClick={sendEmail}
                className="flex-1 px-5 py-3 rounded-[var(--radius-soft)]
                           border border-[var(--color-raisin)]/20 hover:bg-[var(--color-almond)]/60
                           active:bg-[var(--color-almond)]/80 transition"
              >
                Enviar email directo
              </button>
            </div>

            <p className="text-xs text-[var(--color-raisin)]/60 mt-1">
              *No se envía nada automáticamente: se abre WhatsApp o tu correo con el mensaje listo.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
