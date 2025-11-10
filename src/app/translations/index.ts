import { pt } from "./pt";
import { en } from "./en";
import { SecaoSobreData } from "../types/SecaoSobreType";

interface ProjetoData {
  titulo: string;
  descricao: string[];
}

interface Translations {
  nav: Record<string, string>;

  inicio: {
    cargo: string;
    titulo: string;
    curriculo: string;
  };

  sobre: Record<"apresentacao" | "experiencia" | "formacao" | "secao", SecaoSobreData>;

  habilidades: Record<string,string>;

  contatos: Record<string,string>;

  projetos: {
    tituloSecao: string;
    tecnologia: string;
    tecnologia2: string;
    lista: ProjetoData[];
  };
}

export const translations: Record<"pt" | "en", Translations> = { pt, en };