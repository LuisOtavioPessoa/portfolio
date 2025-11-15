"use client";
import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    // Garante que só rode no client
    if (typeof window === "undefined") return;

    // Adiciona o script do particles.js dinamicamente
    const script = document.createElement("script");
    script.src = "/particles/particles.min.js"; // Você precisa ter o arquivo particles.min.js na pasta public/particles
    script.async = true;
    script.onload = () => {
      if (window.particlesJS?.load) {
        window.particlesJS.load(
          "particles-js",
          "/particles/particles-config.json",
          () => console.log("✨ Particles.js carregado com sucesso!")
        );
      }
    };
    script.onerror = () => console.error("Falha ao carregar particles.js");
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="particles-js"
      className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0a0a1a]"
    />
  );
}
