# Portfólio Luís Otávio
Este projeto é o meu portfólio pessoal — um espaço desenvolvido para apresentar meu trabalho de forma prática, visual e organizada. Construído com React e TailwindCSS, ele reúne minha trajetória profissional e acadêmica, minhas principais habilidades e os projetos que desenvolvi.

O portfólio foi pensado para facilitar a conexão com quem deseja conhecer melhor meu trabalho, oferecendo uma navegação intuitiva, design responsivo e uma experiência moderna. Também inclui uma versão traduzida para inglês, permitindo que pessoas de diferentes países tenham acesso ao conteúdo. Além disso, disponibiliza um canal direto para contato, tornando a comunicação mais simples e acessível.

## Tecnologias Utilizadas 🚀
### **Front-end:**
  - **Next.js:** Framework React utilizado para estruturar o projeto, criar rotas, otimizar a performance e renderizar páginas de forma híbrida (SSR/SSG).
  - **React:** Biblioteca JavaScript base usada para construir componentes reutilizáveis e gerenciar a lógica da interface.
  - **TypeScript:** Superset do JavaScript utilizado para tipagem estática, maior segurança e previsibilidade no desenvolvimento.
  - **Tailwind CSS:** Framework CSS utilitário para criar interfaces modernas, responsivas e com alto desempenho.
  - **React Hooks:** Usados para gerenciamento de estado, controle de efeitos colaterais e manipulação de elementos do DOM.
  - **react-hook-form:** Biblioteca leve para gerenciamento de formulários com alta performance.
  - **zod:** Biblioteca de validação usada junto ao react-hook-form para definição de schemas e mensagens de erro.
  - **Particles.js:** Biblioteca utilizada para gerar o efeito de partículas animadas no background da página inicial.
    
### **Back-end:**
  - **Next.js API Routes:** Utilizadas como camada back-end do projeto, permitindo criar endpoints serverless dentro da própria aplicação para processamento seguro de dados.
  - **Resend (Serviço de E-mail):** Ferramenta usada para envio de e-mails através da rota /api/sendEmail, protegendo chaves sensíveis e evitando exposição no front-end.
  - **Validação com Zod:** Schemas utilizados no servidor para validar e normalizar os dados recebidos antes do envio do e-mail.
  - **Arquitetura Serverless:** As rotas internas do Next.js executam apenas sob demanda, sem necessidade de um servidor dedicado.

  ## Funcionalidades do Portfólio🌟 
  🌐 Sistema de tradução PT/EN
  - Alternância dinâmica entre português e inglês.
  - Todas as seções (home, sobre, contato, habilidades, cards etc.) possuem textos transcritos via objetos tipados.
  - Mudança de idioma sem recarregar a página.
    
  📄 Formulário de contato com envio real de e-mail
  - Campos validados com Zod + react-hook-form.
  - Envio seguro via API interna usando Resend.
  - Nenhuma chave exposta no front-end.
  - Mensagens de sucesso e erro tratadas no próprio componente.

  💻 Seções estruturadas e responsivas
  - Header fixo com navegação suave para cada seção.
  - Layout responsivo para telas pequenas, médias e grandes.
  - Uso de Tailwind para estilização limpa e consistente.

  🧩 Card de Tecnologias totalmente dinâmico
  - Componente reutilizável que recebe:
    - Título,
    - Lista de tecnologias (nome, ícone, cor, animação),
    - Tamanho (pequeno, médio, grande).
  - Integração com o sistema de tradução para os títulos dos cards.

  🎨 Design moderno com animações
  - Tipografia personalizada (Altone e Chocolates).
  - Efeitos de sombra pulsante nos cards.
  - Fade-letters aplicado aos títulos com animação letra a letra.
  - Organização de grid adaptável.

  ✨ Particles.js no background da Home
  - Efeito visual leve e discreto ao fundo.
  - Configuração personalizada.
  - Mantido separado em arquivo dedicado para performance.


