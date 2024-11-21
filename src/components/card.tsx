import { IProject } from "../static/projects-data";

interface CardProps {
  data: IProject;
}

export function Card({ data }: CardProps) {
  return (
    <>
      <div className="app-container flex gap-5">
       
        <img
          className="w-[400px] object-cover rounded-sm shadow-md"
          src={data.img}
          alt="Capa do projeto"
        />

        <div className="flex flex-col gap-10 justify-center">
          <h3 className="font-bold text-zinc-800">{data.title}</h3>
          <p className="font-medium text-zinc-600">{data.description}</p>
          <a
            className="text-zinc-800 font-semibold"
            target="blank"
            href={data.githubLink}
          >
       
            Veja no Github
          </a>
 
        </div>
      </div>
    </>
  );
}
