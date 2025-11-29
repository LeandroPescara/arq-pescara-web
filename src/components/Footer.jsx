// src/components/Footer.jsx
import apLogoWhite from "../assets/ap-logo-claro.png";

export default function Footer() {
  return (
    <footer className="bg-[#29241E] text-[#F2E2CE] py-16 text-center">

      {/* Logo */}
      <img
        src={apLogoWhite}
        alt="Arquitecta Pescara"
        className="mx-auto h-10 opacity-95"
      />

      {/* Nombre */}
      <p className="mt-4 text-sm tracking-wide opacity-90">
        AP Estudio
      </p>

      {/* Iconos */}
      <div className="flex justify-center gap-8 mt-6 text-2xl">
        <a href="https://www.instagram.com/arquitecta_pescara/?igsh=MWt5YjBybDNkd3o1YQ%3D%3D#" className="text-[#F2E2CE] hover:text-[#D9B959] transition">
          <i className="uil uil-instagram"></i>
        </a>

        <a href="https://www.facebook.com/profile.php?id=100070535161079" className="text-[#F2E2CE] hover:text-[#D9B959] transition">
          <i className="uil uil-facebook-f"></i>
        </a>

        <a href="https://youtube.com/@arquitectapescara?si=P_h7I8HIqZ06lMDM" className="text-[#F2E2CE] hover:text-[#D9B959] transition">
          <i className="uil uil-youtube"></i>
        </a>

        <a href="https://www.linkedin.com/in/arqpescaracecilia/" className="text-[#F2E2CE] hover:text-[#D9B959] transition">
          <i className="uil uil-linkedin"></i>
        </a>
      </div>

      {/* Derechos */}
      <p className="mt-8 text-xs opacity-60">
        © 2025 Arquitecta Pescara. Todos los derechos reservados.
      </p>

    </footer>
  );
}

