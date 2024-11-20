export type ProjectTag = 'dev' | 'design'
    

export type IProject = {
  id: string;
  img: string;
  title: string;
  description: string;
  githubLink?: string;
  figmaLink?: string;
  projectLink?: string;
  tags: ProjectTag[] 
};

export const PROJECTS_DATA: IProject[] = [
  {
    id: '1',
    img: "/imgs/losse.png",
    title: "Títulodo projeto",
    description: "Descrição do projeto",
    figmaLink: "link",
    githubLink: "link",
    tags: ["design"]
  },
  {
    id: '2',
    img: "/imgs/losse.png",
    title: "Títulodo projeto 2",
    description: "Descrição do projeto 2",
    figmaLink: "link",
    githubLink: "link",
    tags: ["dev"]

  },
];
