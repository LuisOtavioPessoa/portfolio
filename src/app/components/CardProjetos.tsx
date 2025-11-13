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
  className="
    bg-[#272742B2] shadow-[4px_4px_4px_0_#3B76BB]
    w-[380px] h-[640px]
    rounded-[40px] overflow-hidden
    flex flex-col items-center group cursor-pointer
    hover:bg-[#27274266] hover:scale-105
    transition-transform duration-300 ease-out

    /* 📱 Ajustes responsivos */
    max-lg:w-[330px] max-lg:h-[580px]
    max-md:w-[300px] max-md:h-[520px]
    max-sm:w-[260px] max-sm:h-[470px]
  "
>

  <div
    className="
      relative w-[90%] h-[230px]
      overflow-hidden rounded-[20px] border-[2px] border-[#474747] mt-4
      max-lg:h-[200px] max-md:h-[180px] max-sm:h-[160px]
    "
  >
    <img
      src={imagem}
      alt={titulo}
      className="w-full h-auto min-h-[230px] transition-transform duration-[3s] ease-in-out group-hover:-translate-y-1/3"
    />
  </div>

  <div
    className="
      flex flex-col items-start p-6 gap-3 w-full
      max-lg:p-5 max-md:p-4 max-sm:p-3 max-sm:gap-2
    "
  >
    <p
      className="
        font-altone font-bold text-[22px] text-white
        max-h-[55px] overflow-hidden text-ellipsis whitespace-nowrap
        max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] max-sm:text-center
      "
    >
      {titulo}
    </p>

    <p
      className="
        text-white font-creato text-[18px] leading-snug
        max-h-[140px] overflow-hidden line-clamp-4
        max-lg:text-[17px] max-md:text-[16px] max-sm:text-[14px]
        max-sm:text-justify
      "
    >
      {descricao[0]}
    </p>
  </div>

  <div className="bg-white h-[2px] w-3/5 rounded-[2px]" />

  <p
    className="
      text-white font-chocolates font-semibold text-[22px] mt-4
      max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px]
    "
  >
    {subtitulo}
  </p>

  <div
    className="
      flex flex-wrap w-full gap-4 justify-center mt-2
      max-lg:gap-3 max-md:gap-2 max-sm:gap-2
    "
  >
    {tecnologias.slice(0, 2).map((tec, index) => (
      <p
        key={index}
        className={`
          flex text-[18px] text-white items-center justify-center
          w-[130px] h-[50px] mt-4 rounded-[30px] border-[2px] ${tec.borda}
          max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px]
          max-lg:w-[115px] max-md:w-[100px] max-sm:w-[90px]
          max-lg:h-[45px] max-md:h-[40px] max-sm:h-[38px]
        `}
        style={{ backgroundColor: tec.cor }}
      >
        {tec.nome}
      </p>
    ))}
  </div>

  <div
    className="
      flex w-full gap-4 justify-center items-center mt-2 mb-2
    "
  >
    <p
      className="
        flex text-[18px] text-white items-center justify-center
        w-[80px] h-[40px] mt-4 rounded-[30px] border-[2px] border-white
        max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px]
        max-lg:w-[70px] max-md:w-[65px] max-sm:w-[60px]
        max-lg:h-[36px] max-md:h-[34px] max-sm:h-[32px]
      "
    >
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
