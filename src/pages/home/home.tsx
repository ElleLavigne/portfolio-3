import { Header } from "../../components/header";
import { ProjectSection } from "./project-section";

export function Home() {
  return (
    <>
      <Header />
      {/* Container */}
      <div className=" app-container ">
        <div className="flex mt-40 gap-5">
          {/* Container title */}
          <div className="flex flex-col gap-4  ">
            <span className="font-medium">Olá, me chamo Izaelle, sou</span>
            <div className="text-5xl font-semibold min-w-96">
              Desenvolvedora Front-end e UI UX Designer
            </div>
          </div>

          <p className=" mt-14 text-zinc-500 font-medium max-w-[638px]">
            Eespecializada em React.js e Next.js, com experiência em React Hooks, Context API, React Query e
            integração de APIs. Também utilizo Tailwind CSS, SCSS e
            Styled-components para criar designs responsivos e alinhados às
            melhores práticas.

            {/* Trabalho com JavaScript e TypeScript para desenvolver interfaces
            modernas e funcionais. Sou especializada em React.js e Next.js, além
            de ter experiência com React Hooks, Context API, React Query e
            integração de APIs. Também utilizo Tailwind CSS, SCSS e
            Styled-components para criar designs responsivos e alinhados às
            melhores práticas do mercado. */}
          </p>
        </div>
      </div>
      <ProjectSection />
    </>
  );
}
