"use client";
import React from "react";

interface TecnologiaProjeto {
  nome: string;
  cor: string;
  borda: string;
}

interface ModalCardProjetosProps {
  isOpen: boolean;
  onClose: () => void;
  titulo: string;
  descricao: string[];
  imagem: string;
  tecnologias: TecnologiaProjeto[];
  subtitulo2: string;
}

export default function ModalCardProjetos({
  isOpen,
  onClose,
  titulo,
  descricao,
  imagem,
  tecnologias,
  subtitulo2
}: ModalCardProjetosProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 cursor-default"
      onClick={onClose}
    >
      <div
        className="bg-primary-2 rounded-[40px] w-full max-w-[900px] h-[500px] flex flex-col overflow-hidden relative p-6 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-end mb-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-white font-bold text-3xl leading-none hover:text-gray-300 transition cursor-pointer"
          >
            ×
          </button>
        </div>

        <div className="flex w-full h-full">
          <div className="w-2/5 flex flex-col justify-start gap-4 pr-4 max-lg:w-1/2 max-md:w-full">
            <p className="font-altone font-bold text-[26px] text-white text-center max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px]">
              {titulo}
            </p>

            <div className="bg-white h-[2px] w-2/5 mx-auto rounded-[2px]" />

            <div className="text-white font-creato text-[18px] leading-snug overflow-y-auto max-h-[300px] space-y-5 w-[80%] text-justify mx-auto max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] scrollbar-thin scrollbar-thumb-[#474747]/60 scrollbar-track-transparent">
              {descricao.map((texto, index) => (
                <p key={index}>{texto}</p>
              ))}
            </div>
          </div>

          <div className="w-3/5 flex flex-col items-center justify-start gap-4 max-lg:w-1/2 max-md:w-full">
            <div className="relative w-full h-[250px] overflow-hidden rounded-[20px] border-[2px] border-[#474747] group max-lg:h-[220px] max-md:h-[200px] max-sm:h-[180px]">
              <img
                src={imagem}
                alt={titulo}
                className="w-full h-auto min-h-[250px] transition-transform duration-[3s] ease-in-out group-hover:-translate-y-1/3 max-lg:min-h-[220px] max-md:min-h-[200px] max-sm:min-h-[180px]"
              />
            </div>

            <p className="text-white font-chocolates font-semibold text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px]">
              {subtitulo2}
            </p>

            <div className="bg-white h-[2px] w-2/5 mx-auto rounded-[2px]" />

            <div className="flex flex-wrap w-full gap-2 justify-center">
              {tecnologias.map((tec, index) => (
                <p
                  key={index}
                  className={`flex text-[16px] text-white items-center justify-center w-[100px] h-[40px] rounded-[30px] border-[2px] ${tec.borda}
                  max-lg:text-[14px] max-lg:w-[90px] max-lg:h-[36px]
                  max-md:text-[13px] max-md:w-[80px] max-md:h-[34px]
                  max-sm:text-[12px] max-sm:w-[70px] max-sm:h-[32px]`}
                  style={{ backgroundColor: tec.cor }}
                >
                  {tec.nome}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
