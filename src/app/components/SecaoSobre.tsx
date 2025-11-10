"use client";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { SecaoSobreData } from "../types/SecaoSobreType";

interface SecaoSobreProps {
  section: "apresentacao" | "experiencia" | "formacao";
  height?: number;
}

export default function SecaoSobre({
  section,
  height = 150,
}: SecaoSobreProps) {

  const {language} = useLanguage();
  const data = translations[language].sobre[section];

  return (
    <div className="w-3/4 flex flex-col items-start relative mb-8">
   
      <p className="text-primary-6 font-altone font-bold text-[32px] [text-shadow:0_0_9px_#3B76BB] mb-4 fade-letters">
        {data.titulo.split("").map((letra, i) => (
          <span
            key={i}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {letra === " " ? "\u00A0" : letra}
          </span>
        ))}
      </p>

      <div className="flex relative">

        <div className="relative mr-6 flex flex-col items-center">
      
          <div className="text-[#FFFFFF80] text-[14px]">◆</div>

          <div
            style={{
              width: "2px",
              height: `${height - 28}px`, // ALTURA TOTAL MENOS OS LOSANGOS (ENCAIXE DOS LOSANGOS)
              backgroundImage:
                "repeating-linear-gradient(#FFFFFF80 0 2px, transparent 2px 12px)",
            }}
          />

          <div className="text-[#FFFFFF80] text-[14px] mt-0">◆</div>
        </div>

        <div className="flex flex-col mt-2">

          {data.subtitulo && (
          <p className="text-white text-[22px] leading-relaxed font-chocolates font-semibold">
            {data.subtitulo}
          </p>
          )}

          {data.subtitulo2 && (
            <div className="flex justify-between items-center mb-6 mt-3 w-full md:max-w-[650px]">
              <p className="text-white text-[20px] leading-relaxed font-chocolates font-semibold">
                {data.subtitulo2}
              </p>
              {data.tempoExperiencia && (
                <p className="text-white text-[16px] font-chocolates">{data.tempoExperiencia}</p>
              )}
            </div>
          )}

          <p className="text-white text-[18px] leading-relaxed font-creato max-w-[90%] md:max-w-[650px]">
            {data.texto1}
          </p>

          {data.texto2 && (
            <p className="text-white text-[18px] leading-relaxed mt-4 font-creato max-w-[90%] md:max-w-[650px]">
              {data.texto2}
            </p>
          )}

          {data.texto3 && (
            <p className="text-white text-[18px] leading-relaxed mt-4 font-creato max-w-[90%] md:max-w-[650px]">
              {data.texto3}
            </p>
          )}

          {data.texto4 && (
            <p className="text-white text-[18px] leading-relaxed mt-4 font-creato max-w-[90%] md:max-w-[650px]">
              {data.texto4}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
