"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
import emailjs from "@emailjs/browser";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./translations";

export default function Home() {

  const[active, setActive] = useState("");
  const {language} = useLanguage();
  const current = translations[language] || translations.pt;
  const t = translations[language];

  const navBarItems = [
    {id: "inicio", label: t.nav.inicio},
    {id: "sobre", label: t.nav.sobre},
    {id: "habilidades", label: t.nav.habilidades},
    {id: "projetos", label: t.nav.projetos},
    {id: "contatos", label: t.nav.contatos},
  ];

  const schema = z.object({
    nome: z
      .string()
      .min(1, {message: 'Preenchimento obrigatório'})
      .regex(/^[A-Za-zÀ-ÿ\s]+$/, {message: "O nome não pode conter números"}),
    email: z
      .string()
      .min(1, {message: "Preenchimento obrigatório"})
      .email({message: "Digite um email válido"}),
    assunto: z
      .string()
      .min(1, {message: "Preenchimento obrigatório"})
      .max(100, {message: "Máximo de caracteres"}),
    mensagem: z
      .string()
      .min(1, {message: "Mensagem obrigatória"})
  });

  type FormData = z.infer<typeof schema>

  const{
      register,
      handleSubmit,
      formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

const onSubmit = async (data: FormData) => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const res = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.nome,
        from_email: data.email,
        subject: data.assunto,
        message: data.mensagem,
      },
      publicKey
    );

    console.log("Email enviado:", res.status, res.text);
    alert("Mensagem enviada com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
  }
};

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
        <div className="flex justify-evenly items-center-safe max-w-5xl w-full px-6">
          {navBarItems.map((item) => (
          <p
            key={item.id}
            onClick={() => {
              setActive(item.id);
              scrollToSection(item.id);
            }}
            className={`relative cursor-pointer font-chocolates text-[20px] transition-all duration-500
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:bg-[#3B76BB] after:transition-all after:duration-500
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

      <div className="w-full flex justify-end px-6 pt-[80px]">
        <LanguageSelector/>
      </div>
      
      <div id="inicio" className="grid grid-cols-2 w-full min-h-screen">
          <div className="bg-transparent">
              <div className="pt-30 pl-30">
                <h1 className="text-white font-altone font-bold text-[58px]">Luís Otávio</h1>
                <p className="relative text-primary-6 font-chocolates text-[30px] font-semibold [text-shadow:0_0_6px_#5191DB]  pr-4 after:content-[''] after:absolute after:right-65 after:top-6 after:-translate-y-6 after:w-[6px] after:h-[75%] after:bg-[#3B76BB]  ">{t.inicio.cargo}</p>
                <p className="text-white font-creato text-[22px] mt-2 max-w-[500px]">{t.inicio.titulo}</p>

                <a 
                  href="/curriculo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <button className="text-white font-chocolates bg-primary-6 mt-12 rounded-[20px] px-6 py-4 hover:bg-primary-3 hover:font-bold hover:scale-110 transition-all duration-300 w-[150px] cursor-pointer">{t.inicio.curriculo}</button>
                </a>
                
                <div className="flex flex-row mt-8 gap-6">
                  <LogoLinkedIn/>
                  <LogoGitHub/>
                </div>
              </div>
          </div>

          <div className="pt-20 pl-30">
 
            <div className="relative w-[350px] h-[320px] rounded-[15px] shadow-[4px_4px_4px_0_#3B76BB]">
              
              <div
                className="absolute inset-0 bg-primary-2
                [clip-path:polygon(120px_0%,100%_0%,100%_100%,0%_100%,0%_120px)]
                flex flex-col items-start justify-start px-4 gap-4 rounded-[15px]"
              >
                <div className="flex items-center gap-2 mt-30">
                  <IoLocationOutline className="text-[40px] text-white" />
                  <p className="text-white text-[20px] font-chocolates m-2">
                    João Pessoa, PB, Brasil
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <MdOutlineEmail className="text-[40px] text-white" />
                  <p className="text-white text-[20px] font-chocolates m-2">
                    otaviopessoa999@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FiPhone className="text-[40px] text-white" />
                  <p className="text-white text-[20px] font-chocolates m-2">
                    (81) 99140-8370
                  </p>
                </div>
              </div>
            </div>
          </div>

      </div>

      <div id="sobre" className= "w-full min-h-screen bg-transparent flex flex-col items-center">
        <h1 className=" text-white text-[40px] font-altone font-bold ">{t.sobre.secao.titulo}</h1>
        <div className="bg-primary-6 h-[5px] w-1/5 rounded-[5px] mt-3 "></div>

        <div className="w-3/4 flex justify-start mt-20">
        <SecaoSobre
          section="apresentacao"
          height={520}
        />
        </div>

        <SecaoSobre
          section="experiencia"
          height={580}
        />

        <SecaoSobre
          section="formacao"
          height={260}
        />

      </div>

      <div 
        id="habilidades" 
        className="w-full min-h-screen bg-transparent flex flex-col items-center pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        <h1 className=" text-white text-[40px] font-altone font-bold ">{t.habilidades.titulo}</h1>
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

        <div className="flex justify-center w-full mt-20 grid-cols-2 gap-20">
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
        className="w-full min-h-screen bg-transparent flex flex-col items-center pt-24 sm:pt-28 md:pt-32 lg:pt-40"
      >
        <h1 className=" text-white text-[40px] font-altone font-bold ">{t.contatos.titulo}</h1>
        <div className="bg-primary-6 h-[5px] w-1/5 rounded-[5px] mt-3 "></div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 w-full max-w-[450px] pt-30"
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
          className="bg-primary-6 text-white text-[20px] font-chocolates rounded-[20px] border-[1px] border-[#2C2C2C] py-3  hover:bg-primary-3 hover:font-bold hover:scale-110 transition-all duration-300 cursor-pointer"
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

        <p className="text-white font-chocolates text-[18px] pt-10 mb-10">{t.contatos.direitos}</p>

      </div>
    </main>
  );
}
