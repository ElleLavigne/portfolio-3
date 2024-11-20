import { Header } from "../../components/header";
import { ProjectSection } from "./project-section";

export function Home() {
  return (
    <>
      <Header />
      {/* Container */}
      <div className=" app-container">
        <div className="flex mt-40 gap-5">
          {/* Container title */}
          <div className="flex flex-col gap-4 max-w-sm ">
            <span className="font-medium">Olá, me chamo Izaelle, sou</span>
            <div className="text-3xl font-bold min-w-96">
              Desenvolvedora Front-end e UI UX Designer
            </div>
          </div>

          <p className=" mt-14 text-zinc-500 font-normal max-w-[638px]">
            Atuo no desenvolvimento de layouts e interfaces para aplicações web,
            com foco na criação de designs funcionais e visualmente atraentes
            que garantem uma experiência de usuário intuitiva e eficiente.Também
            sou responsável pelo desenvolvimento front-end das plataformas.
          </p>
        </div>
      </div>
        <ProjectSection />
    </>
  );
}
