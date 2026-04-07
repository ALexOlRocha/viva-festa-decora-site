import React from "react";
import logo from "@/assets/logo-viva-festas.png";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
      {/* Janela */}
      <div className="relative w-[320px] h-[380px] rounded-2xl  flex flex-col items-center justify-center animate-[scaleIn_0.5s_ease]">
        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl opacity-40"></div>

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo animada */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-pulse"></div>
            <img
              src={logo}
              alt="Viva Festas Decora"
              className="h-24 w-24 rounded-full object-cover animate-[float_3s_ease-in-out_infinite]"
            />
          </div>

          {/* Nome */}
          <h1 className="text-white text-2xl font-bold tracking-wide">
            Viva Festas
          </h1>

          <p className="text-white/70 text-sm mb-6">
            Preparando sua experiência...
          </p>

          {/* Barra de loading */}
          <div className="w-52 h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-primary to-secondary animate-[loading_1.5s_infinite] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Animações custom */}
      <style>
        {`
          @keyframes scaleIn {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(200%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
