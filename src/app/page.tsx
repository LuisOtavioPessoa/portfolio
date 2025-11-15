"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { RiInstagramLine } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";
import LanguageSelector from "./components/LanguageSelector";
import LogoGitHub from "./components/LogoGitHub";
import LogoLinkedIn from "./components/LogoLinkedIn";
import ParticlesBackground from "./components/ParticlesBackground";
import SecaoSobre from "./components/SecaoSobre";
import CardTecnologias from "./components/CardTecnologias";
import LogoHTML from "./components/LogoTecnologia/LogoHTML";
import LogoTailwindCSS from "./components/LogoTecnologia/LogoTailwindCSS";
import LogoJavaScript from "./components/LogoTecnologia/LogoJavaScript";
import LogoReact from "./components/LogoTecnologia/LogoReact";
import LogoNext from "./components/LogoTecnologia/LogoNext";
import LogoTypescript from "./components/LogoTecnologia/LogoTypescript";
import LogoNode from "./components/LogoTecnologia/LogoNode";
import LogoExpress from "./components/LogoTecnologia/LogoExpress";
import LogoSQL from "./components/LogoTecnologia/LogoSQL";
import CardProjetos from "./components/CardProjetos";
import InputField from "./components/InputField";
import TextAreaField from "./components/TextAreaField";
import LogoRestfulAPI from "./components/LogoTecnologia/LogoRestfulAPI";
import LogoMVC from "./components/LogoTecnologia/LogoMVC";
import LogoCleanCode from "./components/LogoTecnologia/LogoCleanCode";
import LogoScrum from "./components/LogoTecnologia/LogoScrum";
import LogoGit from "./components/LogoTecnologia/LogoGit";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./translations";

export default function Home() {

const [active, setActive] = useState("");
const { language } = useLanguage();
const t = translations[language] || translations.pt;

const navBarItems = [
  { id: "inicio", label: t.nav.inicio },
  { id: "sobre", label: t.nav.sobre },
  { id: "habilidades", label: t.nav.habilidades },
  { id: "projetos", label: t.nav.projetos },
  { id: "contatos", label: t.nav.contatos },
];

const schema = z.object({
  nome: z
    .string()
    .min(1, { message: t.contatos.erros.obrigatorio })
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: t.contatos.erros.nomeInvalido }),
  email: z
    .string()
    .min(1, { message: t.contatos.erros.obrigatorio })
    .email({ message: t.contatos.erros.emailInvalido }),
  assunto: z
    .string()
    .min(1, { message: t.contatos.erros.obrigatorio })
    .max(100, { message: t.contatos.erros.maxCaracteres }),
  mensagem: z
    .string()
    .min(1, { message: t.contatos.erros.mensagemObrigatoria }),
});

type FormData = z.infer<typeof schema>;

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormData>({
  resolver: zodResolver(schema),
});


async function onSubmit(data: FormData) {
  const res = await fetch("/api/sendEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: data.nome,
      email: data.email,
      assunto: data.assunto,
      mensagem: data.mensagem,
    }),
  });

  const resposta = await res.json();
  console.log("Resposta:", resposta);

  if (res.ok) {
    alert("Mensagem enviada com sucesso!");
  } else {
    alert("Falha ao enviar a mensagem: " + (resposta.error || "Erro desconhecido."));
  }
}

    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      let headerOffset = 80; 

      if(id === "habilidades" || id === "projetos" || id === "contatos") {
        const paddingCompensation = 80;
        headerOffset = -paddingCompensation;
      }

      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <main className="relative flex flex-col items-center-safe justify-center grow">
      <ParticlesBackground />

      <div className="flex items-center-safe justify-center bg-primary-2 min-h-[65px] w-full fixed top-0 left-0 z-50">
        <div className="flex justify-evenly items-center-safe max-w-5xl w-full px-6 max-md:justify-between max-md:px-4 max-sm:gap-2 max-sm:text-[14px]">
          {navBarItems.map((item) => (
          <p
            key={item.id}
            onClick={() => {
              setActive(item.id);
              scrollToSection(item.id);
            }}
            className={`relative cursor-pointer font-chocolates text-[20px] transition-all duration-500
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:bg-[#3B76BB] after:transition-all after:duration-500 max-md:text-[17px] max-sm:text-[14px]
              ${
                active === item.id
                  ? "text-[#3B76BB] font-semibold after:w-full"
                  : "text-white hover:text-[#3B76BB] after:w-0"
              }`}
          >
            {item.label}
          </p>
        ))}
        </div>
      </div>

      <div className="w-full flex justify-end px-6 pt-[80px]
                      max-lg:px-4 max-lg:pt-[80px] 
                      max-md:px-4 max-md:pt-[60px] max-sm:pt-[70px] max-sm:justify-center">
        <LanguageSelector/>
      </div>
      
      <div id="inicio" className="grid grid-cols-2 w-full min-h-screen 
                                  max-lg:gap-4 max-lg:pt-[40px] max-lg:min-h-[60vh]
                                  max-sm:grid-cols-1 max-sm:pl-6 max-sm:pt-[60px] max-sm:mb-[100px]
      ">
          <div className="bg-transparent">
              <div className="pt-30 pl-30
                               max-lg:pt-20 max-lg:pl-30 max-lg:pr-4
                              max-sm:pt-6 max-sm:pl-4
              ">
                <h1 className="text-white font-altone font-bold text-[58px]
                              max-lg:text-[44px] max-sm:text-[34px]">  
                  Luís Otávio
                </h1>
                <p className=" 
                text-primary-6 font-chocolates text-[30px] font-semibold max-lg:text-[24px] max-sm:text-[20px] [text-shadow:0_0_6px_#5191DB]">
                  {t.inicio.cargo}
                </p>
                <p className=" text-white font-creato text-[22px] mt-2 max-w-[500px]
                              max-lg:text-[18px] max-sm:text-[16px] max-sm:max-w-[90%]">
                  {t.inicio.titulo}
                </p>

                <a 
                  href="/curriculo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button 
                    className=" text-white font-chocolates bg-primary-6 mt-12 rounded-[20px] px-6 py-4 hover:bg-primary-3 hover:font-bold hover:scale-110 transition-all duration-300 w-[150px] cursor-pointer
                    max-lg:w-[130px] max-lg:py-3 max-lg:text-[15px]
                    max-sm:mt-8 max-sm:w-[120px]"
                  >
                    {t.inicio.curriculo}
                  </button>
                </a>
                
                <div className=" flex flex-row mt-8 gap-6 max-lg:mt-6 max-sm:mt-4 max-sm:gap-4">
                  <LogoLinkedIn/>
                  <LogoGitHub/>
                </div>
              </div>
          </div>

          <div className="pt-20 pl-30 
                          max-lg:pt-10 max-lg:pl-10
                          max-sm:pt-8 max-sm:pl-10 max-sm:justify-center ">
 
            <div className="relative w-[350px] h-[320px] rounded-[15px] shadow-[4px_4px_4px_0_#3B76BB]
                            max-lg:w-[300px] max-lg:h-[270px]
                            max-sm:w-[260px] max-sm:h-[230px]
            ">
              
              <div
                className="absolute inset-0 bg-primary-2
                [clip-path:polygon(120px_0%,100%_0%,100%_100%,0%_100%,0%_120px)]
                flex flex-col items-start justify-start px-4 gap-4 rounded-[15px]
                 max-sm:px-4 max-sm:gap-4 max-sm:py-1"
              >
                <div className="flex items-center gap-2 mt-30 
                                max-lg:mt-24 ">
                  <IoLocationOutline className="text-[40px] text-white max-lg:text-[32px]" />
                  <p className="text-white text-[20px] font-chocolates m-2 
                                max-lg:text-[17px] max-sm:text-[15px] max-sm:m-1">
                    João Pessoa, PB, Brasil
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <MdOutlineEmail className="text-[40px] text-white max-lg:text-[32px]" />
                  <p className="text-white text-[20px] font-chocolates m-2 
                                  max-lg:text-[17px] max-sm:text-[15px] max-sm:m-1">
                    otaviopessoa999@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FiPhone className="text-[40px] text-white max-lg:text-[32px]" />
                  <p className="text-white text-[20px] font-chocolates m-2 
                                  max-lg:text-[17px] max-sm:text-[15px] max-sm:m-1">
                    (81) 99140-8370
                  </p>
                </div>
              </div>
            </div>
          </div>

      </div>

      <div id="sobre" className= "w-full min-h-screen bg-transparent flex flex-col items-center">
        <h1 className="text-white text-[40px] font-altone font-bold 
                      max-lg:text-[34px] max-md:text-[30px] max-sm:text-[26px] ">
                      {t.sobre.secao.titulo}
      </h1>
        <div className="bg-primary-6 h-[5px] w-1/5 rounded-[5px] mt-3 max-md:w-1/4 max-sm:w-1/3"></div>

        <div className="w-3/4 flex justify-start mt-20
                        max-lg:justify-center max-lg:mt-14 max-md:mt-10 max-sm:mt-8 max-sm:justify-center">
        <SecaoSobre
          section="apresentacao"
          height={530}
        />
        </div>

  <div className="w-3/4 flex justify-start 
                  max-lg:justify-center">
    <SecaoSobre section="experiencia" height={580} />
  </div>

  <div className="w-3/4 flex justify-start 
                  max-lg:justify-center">
    <SecaoSobre section="formacao" height={260} />
  </div>

      </div>

      <div 
        id="habilidades" 
        className="w-full min-h-screen bg-transparent flex flex-col items-center pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        <h1 className=" text-white text-[40px] font-altone font-bold 
max-lg:text-[34px] max-md:text-[30px] max-sm:text-[26px] ">{t.habilidades.titulo}</h1>

        <div className="bg-primary-6 h-[5px] w-1/5 rounded-[5px] mt-3 "></div>

        <div className="flex justify-center w-full mt-20">

          <CardTecnologias
            titulo="Front End"
            tamanho="grande"
            tecnologias= {[
            { nome: "HTML", imagem: <LogoHTML/>, cor: "#E34C26CC", shadow: "hover:shadow-[0_0_80px_0_#E34C26CC]"},
            { nome: "Tailwind CSS", imagem: <LogoTailwindCSS/>, cor: "#00ACC1CC", shadow: "hover:shadow-[0_0_80px_0_#4AA4EECC]"},
            { nome: "Javascript", imagem: <LogoJavaScript/>, cor: "#FFE730CC", shadow: "hover:shadow-[0_0_80px_0_#FFE730CC]"},
            { nome: "Typescript", imagem: <LogoTypescript/>, cor: "#5B51F3CC", shadow: "hover:shadow-[0_0_80px_0_#5B51F3CC]"},
            { nome: "React.js", imagem: <LogoReact/>, cor: "#5DE1EACC", shadow: "hover:shadow-[0_0_80px_0_#5DE1EACC]"},
            { nome: "Next.js", imagem: <LogoNext/>, cor: "#D9D9D9CC", shadow: "hover:shadow-[0_0_80px_0_#D9D9D9CC]"},
            ]}
          />

        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 w-full ">
            <CardTecnologias
              titulo="Back End"
              tamanho="medio"
              tecnologias={[
              { nome: "Node.js", imagem: <LogoNode/>, cor: "#5DE850CC", shadow: "hover:shadow-[0_0_80px_0_#5DE850CC]"},
              { nome: "Express", imagem: <LogoExpress/>, cor: "#8B8B8BCC", shadow: "hover:shadow-[0_0_80px_0_#8B8B8B]"},
              ]}
            />

            <CardTecnologias
              titulo="Dados"
              tamanho="pequeno"
              tecnologias={[
              { nome: "MySQL", imagem: <LogoSQL/>, cor: "#ED8F3CCC", shadow: "hover:shadow-[0_0_80px_0_#ED8F3CCC]"},
              ]}
            />


        </div>

        <div className="flex justify-center w-full mt-10">
          <CardTecnologias
            titulo="Outros"
            tamanho="grande"
            tecnologias= {[
            { nome: "RESTful APIs", imagem: <LogoRestfulAPI/>, cor: "#54B5F2CC", shadow: "hover:shadow-[0_0_80px_0_#54B5F2CC]"},
            { nome: "MVC", imagem: <LogoMVC/>, cor: "#D9D9D9CC", shadow: "hover:shadow-[0_0_80px_0_#D9D9D9CC]"},
            { nome: "Clean Code", imagem: <LogoCleanCode/>, cor: "#2CB525CC", shadow: "hover:shadow-[0_0_80px_0_#2CB525CC]"},
            { nome: "Scrum", imagem: <LogoScrum/>, cor: "#976DF9CC", shadow: "hover:shadow-[0_0_80px_0_#976DF9CC]"},
            { nome: "Git", imagem: <LogoGit/>, cor: "#D34F38CC", shadow: "hover:shadow-[0_0_80px_0_#ED8F3CCC]"},    
            ]}
          />

        </div>

      </div>

      <div 
        id="projetos" 
        className="w-full min-h-screen bg-transparent flex flex-col items-center pt-24 sm:pt-28 md:pt-32 lg:pt-40">
          
        <h1 className=" text-white text-[40px] font-altone font-bold ">{t.projetos.tituloSecao}</h1>
        <div className="bg-primary-6 h-[5px] w-1/5 rounded-[5px] mt-3 "></div>

        <div className="flex justify-center w-full mt-20 gap-20
      max-sm:flex-col max-sm:items-center">
          <CardProjetos
             titulo={t.projetos.lista[0].titulo}
              descricao={t.projetos.lista[0].descricao} 
             imagem="/images/f360-projeto.png"
             tecnologias={[
              {nome: "React.js", cor: "#5DE1EA1F", borda: "border-[#5DE1EAE5]"},
              {nome: "Typescript", cor: "#5B51F31A", borda: "border-[#5B51F3E5]"},
              {nome: "Next.js", cor: "#D9D9D91A", borda: "border-[#D9D9D9E5]"},
              {nome: "Tailwind CSS", cor: "#00ACC11A", borda: "border-[#00ACC1E5]"},
             ]}
             quantidadeTecnologia="2"
             subtitulo={t.projetos.tecnologia}
             subtitulo2={t.projetos.tecnologia2}
          />
         
          <CardProjetos
             titulo={t.projetos.lista[1].titulo}
             descricao={t.projetos.lista[1].descricao}
             imagem="/images/pokemonapi-projeto.png"
             tecnologias={[
              {nome: "React.js", cor: "#5DE1EA1F", borda: "border-[#5DE1EAE5]" },
              {nome: "Next.js", cor: "#D9D9D91A", borda: "border-[#D9D9D9E5]" },
              {nome: "Javascript", cor: "#FFE7301A", borda: "border-[#FFE730E5]" },
              {nome: "Typescript", cor: "#5B51F31A", borda: "border-[#5B51F3E5]" },
              {nome: "TailwindCSS", cor: "#00ACC11A", borda: "border-[#00ACC1E5]" },
              {nome: "API RESTful", cor: "#54B5F21A", borda: "border-[#54B5F2E5]" },
             ]}
             quantidadeTecnologia="4"
             subtitulo= {t.projetos.tecnologia}
             subtitulo2={t.projetos.tecnologia2}
          />

        </div>
      </div>

      <div 
        id="contatos" 
        className="w-full min-h-screen bg-transparent flex flex-col items-center pt-24 sm:pt-28 md:pt-20 lg:pt-40"
      >
        <h1 className="text-white text-[28px] sm:text-[34px] md:text-[40px] font-altone font-bold">
          {t.contatos.titulo}
        </h1>
        <div className="bg-primary-6 h-[5px] w-1/5 rounded-[5px] mt-3 "></div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 sm:gap-8 w-full max-w-[400px] sm:max-w-[450px] pt-20 sm:pt-30"
        >

          <InputField
          id="nome"
          label={t.contatos.nome}
          register={register("nome")}
          error= {errors.nome}
          />

          <InputField
          id="email"
          label={t.contatos.email}
          register={register("email")}
          error= {errors.email}
          />

          <InputField
          id="assunto"
          label={t.contatos.assunto}
          register={register("assunto")}
          error= {errors.assunto}
          />

          <TextAreaField
          id="mensagem"
          label={t.contatos.mensagem}
          register={register("mensagem")}
          error={errors.mensagem}
        />
        
        <button
          type="submit"
          className="bg-primary-6 text-white text-[16px] sm:text-[18px] md:text-[20px] font-chocolates rounded-[20px] border-[1px] border-[#2C2C2C] py-2 sm:py-3 hover:bg-primary-3 hover:font-bold hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          {t.contatos.enviar}
        </button>

        </form>

        <div className="w-full bg-transparent flex flex-row items-center justify-center pt-20 mb-10 gap-30">

          <a 
            href="https://www.linkedin.com/in/lu%C3%ADsot%C3%A1viopessoa/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FiLinkedin className="text-white text-[34px] hover:text-[#3B76BB] transition-colors duration-500"/>
          </a>

          <a 
            href="https://www.instagram.com/luisotaviopessoa/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <RiInstagramLine className="text-white text-[34px] hover:text-[#3B76BB] transition-colors duration-500"/>
          </a>

          <a 
            href="https://github.com/LuisOtavioPessoa"
            target="_blank"
            rel="noopener noreferrer"
          >
          <LuGithub className="text-white text-[34px] hover:text-[#3B76BB] transition-colors duration-500"/>
          </a>

        </div>

        <p className="text-white font-chocolates text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] pt-10 mb-10">
          {t.contatos.direitos}
        </p>

      </div>
    </main>
  );
}
