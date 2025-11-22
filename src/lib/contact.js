// POST a Formspree (reemplazá FORM_ID por el tuyo)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORM_ID";

export async function sendContact({ nombre, email, mensaje }) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ nombre, email, mensaje }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    throw new Error(`Error al enviar: ${res.status} ${err}`);
  }
  return await res.json().catch(() => ({}));
}
