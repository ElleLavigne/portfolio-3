export type ProjectTag = "dev" | "design";

export type IProject = {
  id: string;
  img: string;
  title: string;
  description: string;
  githubLink?: string;
  figmaLink?: string;
  projectLink?: string;
  tags: ProjectTag[];
};

export const PROJECTS_DATA: IProject[] = [
  {
    id: "7",
    img: "lossi-thumb.png",
    title: "Lossi | Ecommerce",
    description: "Lossi é uma marca fictícia criada para o estudo dos conceitos de criação de e-commerce, estruturada com um design moderno e minimalista. Por meio dela, pude aprimorar minhas habilidades no Figma.",
    figmaLink: "https://www.figma.com/design/roqn3atXPog3oBranyeBoa/Remaking-%7C-Lossi?node-id=93-122&t=YldymjR2F9UYnMj5-1",
    tags: ["design"],
  },
  {
    id: "1",
    img: "/pizza-shop-ignite-thumb.png",
    title: "Dashboard | Pizza Shop",
    description:"Em processo: Uma aplicação web focada em consumo e integração de APIs, construída com React, estilizada com Tailwind e ShadCN-UI. O projeto utiliza Docker para simplificar o ambiente de desenvolvimento e deploy, garantindo escalabilidade e consistência. Ideal para demonstrar expertise em integrações e construção de interfaces modernas e responsivas.",
    githubLink: "https://github.com/ElleLavigne/pizzashop-web",
    tags: ["dev"],
  },
  {
    id: "2",
    img: "DT-money-ignite-thumb.png",
    title: "Dashboard | DT-Money ",
    description: "Uma aplicação web focada em consumo e integração de APIs, construída com React",
    githubLink: "https://github.com/ElleLavigne/03-dt-money",
    tags: ["dev"],
  },
  {
    id: "3",
    img: "timer-ignite-thumn.png",
    title: "Timer Pomodoro ",
    description: "Um timer Pomodoro simples, desenvolvido em React, que permite ao usuário gerenciar sessões de foco e pausas, seguindo a técnica Pomodoro para aumentar a produtividade.",
    githubLink: "https://github.com/ElleLavigne/ignite-timer",
    tags: ["dev"],
  },
  {
    id: "4",
    img: "feed-ignite-thumb.png",
    title: "Feed - Ignite",
    description: "Este projeto foi desenvolvido em React para iniciar o aprendizado e aplicação de conceitos como componentes, estado e rotas no desenvolvimento de interfaces interativas.",
    githubLink: "https://github.com/ElleLavigne/ignite-feed",
    tags: ["dev"],
  },

  {
    id: "5",
    img: "adopt-pet-thumb.png",
    title: "Adopt Pet - App",
    description: "Em processo: Um projeto elaborado para facilitar o meio de adoção trazendo elementos que facilitam a busca de um animal por meio da possibilidade de achar um animal mais próximo de você, poder filtrar espécie, gênero e idade, design pensado para ser flúido e simples facilitando o fluxo. Design das telas criado no Figma.",
    figmaLink: "https://www.figma.com/design/t6yhAPPTDSIMBWjjY9p1Ue/Adopt-Pet?node-id=81-123&t=msh2g3aK3djLXR1g-1",
    tags: ["design"],
  },
  {
    id: "6",
    img: "norte-contabilidade-thumb.png",
    title: "Norte contabilidade - Site institucional",
    description: "Design criado no figma, programado em React.js.",
    githubLink: "https://github.com/ElleLavigne/Norte-Contabilidade",
    figmaLink: "https://www.figma.com/design/HCNiAIUGQkddUT3wCZsUYn/Norte-Cont%C3%A1bil?node-id=156-9&t=g6WrtFgQjIfw1jOE-1",
    tags: ["dev", "design"],
  },
  {
    id: "8",
    img: "gen-z-ecommerce-thumb.png",
    title: "Gen-z | E-commerce",
    description: "Design moderno e minimalista, criado no figma. Progamado em react utilizando tailwind",
    githubLink: "https://github.com/ElleLavigne/ecommerce-genz",
    figmaLink: "https://www.figma.com/design/KROdgyQuIrfoRxMt4z7ETm/Ecommerce?node-id=156-130&t=zvMpODwDdZXxMn5j-1",

    tags: ["dev", "design"],
  },

];
