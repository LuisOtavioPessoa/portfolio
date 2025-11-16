import { pt } from "./pt";
import { en } from "./en";
import { SecaoSobreData } from "../../types/SecaoSobreType";

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

  habilidades: {
    titulo: string;
    cards: {
      dados: string;
      outros: string;
    };
  };

    contatos: {
    titulo: string;
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
    enviar: string;
    direitos: string;
    erros: {
      obrigatorio: string;
      nomeInvalido: string;
      emailInvalido: string;
      maxCaracteres: string;
      mensagemObrigatoria: string;
    };
  };

  projetos: {
    tituloSecao: string;
    tecnologia: string;
    tecnologia2: string;
    lista: ProjetoData[];
  };

  
}

export const translations: Record<"pt" | "en", Translations> = { pt, en };