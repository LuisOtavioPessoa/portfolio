"use client";
import React, { useState } from "react";
import ModalCardProjetos from "./ModalCardProjetos";

interface TecnologiaProjeto {
  nome: string;
  cor: string;
  borda: string;
}

interface CardProjetosProps {
  titulo: string;
  descricao: string[];
  imagem: string;
  tecnologias: TecnologiaProjeto[];
  quantidadeTecnologia: string;
  subtitulo: string;
  subtitulo2: string;
}

export default function CardProjetos({
  titulo,
  descricao,
  imagem,
  tecnologias,
  quantidadeTecnologia,
 subtitulo,
 subtitulo2
}: CardProjetosProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-[#272742B2] shadow-[4px_4px_4px_0_#3B76BB] w-[380px] h-[640px] rounded-[40px] overflow-hidden flex flex-col items-center group cursor-pointer hover:bg-[#27274266] hover:scale-105 transition-transform duration-300 ease-out"
      >
        <div className="relative w-[90%] h-[230px] overflow-hidden rounded-[20px] border-[2px] border-[#474747] mt-4">
          <img
            src={imagem}
            alt={titulo}
            className="w-full h-auto min-h-[230px] transition-transform duration-[3s] ease-in-out group-hover:-translate-y-1/3"
          />
        </div>

        <div className="flex flex-col items-start p-6 gap-3 w-full">
          <p className="font-altone font-bold text-[22px] text-white max-h-[55px] overflow-hidden text-ellipsis whitespace-nowrap">
            {titulo}
          </p>
          <p className="text-white font-creato text-[18px] leading-snug max-h-[140px] overflow-hidden line-clamp-4">
            {descricao[0]}
          </p>
        </div>

        <div className="bg-white h-[2px] w-3/5 rounded-[2px]" />
        <p className="text-white font-chocolates font-semibold text-[22px] mt-4">
          {subtitulo}
        </p>

        <div className="flex flex-wrap w-full gap-4 justify-center mt-2">
          {tecnologias.slice(0,2).map((tec, index) => (
            <p
              key={index}
              className={`flex text-[18px] text-white items-center justify-center w-[130px] h-[50px] mt-4 rounded-[30px] border-[2px] ${tec.borda}`}
              style={{ backgroundColor: tec.cor }}
            >
              {tec.nome}
            </p>
          ))}
        </div>

        <div className="flex w-full gap-4 justify-center items-center mt-2 mb-2">
          <p className="flex text-[18px] text-white items-center justify-center w-[80px] h-[40px] mt-4 rounded-[30px] border-[2px] border-white">
            +{quantidadeTecnologia}
          </p>
        </div>
      </div>

      <ModalCardProjetos
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        titulo={titulo}
        descricao={descricao}
        imagem={imagem}
        tecnologias={tecnologias}
        subtitulo2={subtitulo2}
      />
    </>
  );
}
