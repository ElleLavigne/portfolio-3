import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { Separator } from "../../components/ui/separator";
import { PROJECTS_DATA, ProjectTag } from "../../static/projects-data";
import { Button } from "../../components/ui/button";

type Tab = "ALL" | ProjectTag;

export function ProjectSection() {
  const [currentTab, setCurrentTab] = useState<Tab>("ALL");

  const [currentList, setCurrentList] = useState(PROJECTS_DATA);

  useEffect(() => {
    const filteredList = PROJECTS_DATA.filter((item) => {
      if (currentTab === "ALL") {
        return true;
      }
      if (item.tags.includes(currentTab as ProjectTag)) {
        return true;
      } else {
        return false;
      }
    });
    setCurrentList(filteredList);
  }, [currentTab]);
  return (
    <>
      <div className="flex flex-col mt-32">
        <div className="flex flex-col ">
          <div className="app-container flex items-center justify-center gap-5 ">
            <Button
              data-selected={currentTab === "ALL"}
              onClick={() => {
                setCurrentTab("ALL");
              }}
              variant={"link"}
            >
              Todos os projetos
            </Button>
            <Button
              data-selected={currentTab === "dev"}
              onClick={() => {
                setCurrentTab("dev");
              }}
              variant={"link"}
            >
              Dev
            </Button>
            <Button
              data-selected={currentTab === "design"}
              onClick={() => {
                setCurrentTab("design");
              }}
              variant={"link"}
            >
              Design
            </Button>
          </div>
          <Separator className="-m-2" />
        </div>
        <div className="flex flex-col gap-20 mt-14">
          {currentList.map((data) => {
            return <Card key={data.id} data={data} />;
          })}
        </div>
      </div>
    </>
  );
}
