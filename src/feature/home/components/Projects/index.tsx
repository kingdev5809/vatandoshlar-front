import Card from "@/component/Card";
import SectionWrapper from "@/component/SectionWrapper";
import { projectBgImg, projectImg2, projectImg3 } from "@/assets/images";
import { useTranslations } from "next-intl";
import React from "react";
import { ProjectSectionWrapper } from "./style";

const mockProjectsData = [
  { id: 1, title: "Anor Sotsiyal Loyihasi", image: projectImg2 },
  {
    id: 2,
    title: "Vatandoshlar jamoat fondi vatandoshlar uchun",
    image: projectImg2,
  },
  { id: 3, title: "Xorijdagi vatandosh yoshlar  boshladi", image: projectImg3 },
  { id: 4, title: "Xorijdagi vatandosh yoshlar  boshladi", image: projectImg2 },
  { id: 5, title: "Anor Sotsiyal Loyihasi", image: projectImg3 },
  {
    id: 6,
    title: "Vatandoshlar jamoat fondi vatandoshlar uchun",
    image: projectImg2,
  },
];
const Projects = () => {
  const t = useTranslations();

  return (
    <ProjectSectionWrapper style={{ background: projectBgImg }}>
      <SectionWrapper title={t("Home.projects")} link="/projects" />
      <div className="cards">
        {mockProjectsData.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </div>
    </ProjectSectionWrapper>
  );
};

export default Projects;
