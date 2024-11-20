import { Card } from "../../components/card";
import { Separator } from "../../components/ui/separator";
import { PROJECTS_DATA } from "../../static/projects-data";

export function ProjectSection() {
  return (
    <>
      <div className="app-container flex items-center justify-center gap-5 ">
        <span>Projetos</span>
        <span>Dev</span>
        <span>Design</span>
      </div>
      <Separator />

    {PROJECTS_DATA.map((data) => {
        return(
            <Card key={data.id} data={data} /> 
        )
    })}

    </>
  );
}
